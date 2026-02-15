import React, { useEffect, useState, useRef } from "react";

const LiquidCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const animate = () => {
    // 1. Core Dot (Immediate)
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

        const isDarkMode = document.documentElement.classList.contains("dark");
        const primaryColor = isDarkMode ? "#00FFCC" : "#145D90";

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
          ctx.globalAlpha = p.life * 0.6;
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

    window.addEventListener("mousemove", onMouseMove);
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

  const isDarkMode = document.documentElement.classList.contains("dark");
  const primaryColor = isDarkMode ? "#00FFCC" : "#145D90";

  // Size Logic: Shrink on interaction
  // Idle: 44px
  // Hover: 32px (Shrink)
  // Press: 24px (Shrink more)
  const ringSize = isPressed ? 24 : isHovering ? 32 : 44;
  const borderRadius = isHovering ? "10px" : "50%"; // Adjusted border radius for smaller size

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-[999999] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 border-2 transition-all duration-200 ease-out"
        style={{
          width: ringSize,
          height: ringSize,
          marginLeft: -(ringSize / 2),
          marginTop: -(ringSize / 2),
          borderRadius: borderRadius,
          borderColor: primaryColor,
          backgroundColor: isHovering
            ? isDarkMode
              ? "rgba(0, 255, 204, 0.15)"
              : "rgba(20, 93, 144, 0.1)"
            : "transparent",
          boxShadow: isHovering
            ? `0 0 15px ${isDarkMode ? "rgba(0,255,204,0.3)" : "rgba(20,93,144,0.15)"}`
            : "none",
          willChange: "transform, border-radius, width, height",
        }}
      />
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 flex items-center justify-center transition-opacity duration-200"
        style={{
          width: 0,
          height: 0,
          opacity: isHovering ? 0 : 1,
          willChange: "transform",
        }}
      >
        <div
          className="w-2 h-2 rounded-full transition-transform duration-200"
          style={{
            backgroundColor: primaryColor,
            boxShadow: `0 0 10px ${primaryColor}`,
            transform: `scale(${isPressed ? 0.6 : 1})`,
          }}
        />
      </div>
    </div>
  );
};

export default LiquidCursor;
