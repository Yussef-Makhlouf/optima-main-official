import React, { useEffect, useState, useRef } from "react";

const LiquidCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark"),
  );

  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Physics Refs
  const mouse = useRef({ x: -100, y: -100 });
  const smoothMouse = useRef({ x: -100, y: -100 });

  // Canvas Particles System
  const particles = useRef<any[]>([]);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Theme observer
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"));
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    // 1. Core Cursor (Immediate)
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
    }

    // 2. Smooth Ring
    const ringLerp = 0.35;
    smoothMouse.current.x +=
      (mouse.current.x - smoothMouse.current.x) * ringLerp;
    smoothMouse.current.y +=
      (mouse.current.y - smoothMouse.current.y) * ringLerp;

    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${smoothMouse.current.x}px, ${smoothMouse.current.y}px, 0)`;
    }

    // 3. Dense Particle Trail (Canvas)
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update primary color based on DOM to avoid stale closure
        const isDark = document.documentElement.classList.contains("dark");
        const primaryColor = isDark ? "#00FFCC" : "#145D90";

        const dx = mouse.current.x - smoothMouse.current.x;
        const dy = mouse.current.y - smoothMouse.current.y;
        const speed = Math.sqrt(dx * dx + dy * dy);

        if (speed > 2 && particles.current.length < 100) {
          for (let i = 0; i < 2; i++) {
            particles.current.push({
              x: mouse.current.x + (Math.random() - 0.5) * 10,
              y: mouse.current.y + (Math.random() - 0.5) * 10,
              vx: (Math.random() - 0.5) * 2 - dx * 0.08,
              vy: (Math.random() - 0.5) * 2 - dy * 0.08,
              size: Math.random() * 3 + 1,
              color: primaryColor,
              life: 1,
            });
          }
        }

        particles.current.forEach((p, i) => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.015;

          if (p.life <= 0) {
            particles.current.splice(i, 1);
            return;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.life * 0.4;
          ctx.fill();
        });
      }
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (isMobile) return;

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    requestRef.current = requestAnimationFrame(animate);

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouse.current = { x: e.clientX, y: e.clientY };

      const target = e.target as HTMLElement;
      const isClickable = !!target.closest(
        'button, a, [role="button"], .magnetic-target, input, textarea',
      );
      setIsHovering(isClickable);
    };

    const onMouseDown = () => setIsPressed(true);
    const onMouseUp = () => setIsPressed(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    document.body.classList.add("hide-cursor");

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.body.classList.remove("hide-cursor");
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isMobile, isVisible]);

  if (isMobile) return null;

  const primaryColor = isDarkMode ? "#00FFCC" : "#145D90";

  // Size Logic: Shrink on interaction
  // Idle: 44px
  // Hover: 32px (Shrink)
  // Press: 24px (Shrink more)
  const ringSize = isPressed ? 24 : isHovering ? 32 : 44;
  const borderRadius = isHovering ? "10px" : "50%"; // Adjusted border radius for smaller size

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[10000] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 border-2 ease-out"
        style={{
          width: ringSize,
          height: ringSize,
          marginLeft: -(ringSize / 2),
          marginTop: -(ringSize / 2),
          borderRadius: borderRadius,
          borderColor: isHovering ? "transparent" : primaryColor,
          backgroundColor: "transparent",
          boxShadow: "none",
          opacity: isHovering ? 0 : 1,
          willChange: "transform, width, height, border-radius, opacity",
          transition:
            "width 0.2s, height 0.2s, border-radius 0.2s, border-color 0.2s, opacity 0.2s",
        }}
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-50 pointer-events-none"
        style={{
          width: "50px",
          height: "50px",
          marginTop: "-25px",
          marginLeft: "-25px",
          willChange: "transform",
        }}
      >
        <img
          key={isDarkMode ? "dark" : "light"}
          src={
            isDarkMode
              ? "/logos/optima-cursor-dark.svg"
              : "/logos/optima-cursor-light.svg"
          }
          alt="Optima Cursor"
          className="w-full h-full object-contain transition-transform duration-300"
          style={{
            transform: `scale(${isPressed ? 0.7 : isHovering ? 1.15 : 1}) rotate(${isHovering ? "45deg" : "0deg"})`,
            filter: "drop-shadow(0 0 4px rgba(0,0,0,0.2))",
            opacity: isHovering || isPressed ? 0.7 : 1,
          }}
        />
      </div>
    </div>
  );
};

export default LiquidCursor;
