import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ScrollToTop: React.FC = () => {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setVisible(scrollTop > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  const circumference = 2 * Math.PI * 26; // Larger radius for more presence
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 ${i18n.language === "ar" ? "left-8" : "right-8"} z-50 group flex items-center justify-center`}
      aria-label="Scroll to top"
    >
      {/* Dynamic Background Glow - Subtle by default, intense on hover */}
      <div
        className="absolute inset-0 bg-primary/20 rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"
        style={{ width: "80px", height: "80px" }}
      />

      {/* Main Container */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* SVG Progress Core (Always Visible) */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 scale-110"
          viewBox="0 0 64 64"
        >
          <defs>
            <linearGradient
              id="neonGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#145D90" />
              <stop offset="50%" stopColor="#56A5DD" />
              <stop offset="100%" stopColor="#00D9FF" />
            </linearGradient>
            <filter id="neonGlow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Base track circle */}
          <circle
            cx="32"
            cy="32"
            r="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-slate-200/50 dark:text-slate-800/50"
          />

          {/* Active progress circle - Always glowing */}
          <circle
            cx="32"
            cy="32"
            r="26"
            fill="none"
            stroke="url(#neonGradient)"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            filter="url(#neonGlow)"
            className="transition-all duration-300 ease-out"
          />
        </svg>

        {/* Inner Glass Orb */}
        <div className="relative w-11 h-11 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-center shadow-[0_8px_32px_rgba(20,93,144,0.2)] border border-white/20 group-hover:scale-110 transition-all duration-500 z-10 overflow-hidden">
          {/* Animated Background Mesh for the orb */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
            <div className="absolute inset-0 animate-spin-slow bg-[conic-gradient(from_0deg,transparent,rgba(20,93,144,0.5),transparent)]" />
          </div>

          {/* Arrow with magnetic effect (slight lift) */}
          <svg
            className="w-5 h-5 text-primary dark:text-cyber group-hover:-translate-y-[-0.10rem] transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </div>

        {/* Decorative Compass Lines (Static) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-full h-[0.5px] bg-primary absolute" />
          <div className="w-[0.5px] h-full bg-primary absolute" />
        </div>

        {/* Hover corner brackets */}
        <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
        </div>
      </div>

      {/* Modern Floating Tech Label (Now at the top) */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
        <div className="bg-slate-900/90 dark:bg-white/90 backdrop-blur-md px-2 py-0.5 rounded border border-primary/20 shadow-xl">
          <span className="text-[10px] font-mono font-bold text-white dark:text-slate-900">
            {Math.round(scrollProgress)}%
          </span>
        </div>
        <div className="w-[1px] h-4 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
      </div>
    </button>
  );
};

export default ScrollToTop;
