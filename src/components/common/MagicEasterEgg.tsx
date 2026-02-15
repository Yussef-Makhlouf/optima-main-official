import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const HUDBox = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="p-5 bg-white/5 dark:bg-primary/5 border border-primary/20 dark:border-cyber/20 rounded-2xl relative overflow-hidden backdrop-blur-md group hover:border-primary/40 dark:hover:border-cyber/40 transition-all duration-500">
    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/30 dark:border-cyber/30 rounded-tr-lg"></div>
    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/30 dark:border-cyber/30 rounded-bl-lg"></div>
    <h4 className="text-[9px] font-black text-primary dark:text-cyber mb-4 flex items-center gap-2 uppercase tracking-[0.3em]">
      <span className="w-1.5 h-1.5 bg-primary dark:bg-cyber rounded-full animate-pulse shadow-[0_0_10px_currentColor]"></span>
      {title}
    </h4>
    {children}
  </div>
);

const MagicEasterEgg: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [sequence, setSequence] = useState<string[]>([]);
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark"),
  );

  const konamiCode = [
    "arrowup",
    "arrowup",
    "arrowdown",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "arrowleft",
    "arrowright",
    "b",
    "a",
  ];

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleTrigger = () => {
      setIsActive(true);
      setTimeout(() => setIsActive(false), 15000); // 15s magic
    };
    window.addEventListener("trigger-magic", handleTrigger);
    return () => window.removeEventListener("trigger-magic", handleTrigger);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const newSequence = [...sequence, key].slice(-10);
      setSequence(newSequence);

      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 15000);
        setSequence([]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sequence]);

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[2147483647] flex items-center justify-center p-4 md:p-8 overflow-hidden font-mono"
        >
          {/* Theme-aware Dynamic Backdrop */}
          <div className="absolute inset-0 bg-slate-50/90 dark:bg-[#05080a]/95 backdrop-blur-[50px] transition-colors duration-700" />

          {/* Animated Tech Grid */}
          <div
            className="absolute inset-0 opacity-[0.15] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(var(--primary-color, #145D90) 1px, transparent 1px), linear-gradient(90deg, var(--primary-color, #145D90) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating HUD Elements */}
          <div className="relative z-10 w-full max-w-6xl h-full flex flex-col justify-between py-12">
            {/* TOP BAR */}
            <div className="flex justify-between items-start border-b border-primary/20 dark:border-white/10 pb-6">
              <div className="space-y-1">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                  <h2 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white flex items-center gap-2">
                    OPTIMA_
                    <span className="text-primary dark:text-cyber">
                      SYSTEMS
                    </span>
                    ::LTD
                  </h2>
                </motion.div>
                <div className="text-[9px] text-slate-500 dark:text-white/40 uppercase tracking-[0.5em] font-bold">
                  {isRTL
                    ? "بروتوكول التحليل الذكي نشط"
                    : "NEURAL_ANALYTICS_PROTOCOL_ENGAGED"}
                </div>
              </div>

              <div className="text-right hidden md:block">
                <div className="text-[10px] text-primary dark:text-cyber font-black mb-1">
                  NODE_ID: OPT-X99
                </div>
                <div className="text-[9px] text-slate-400 dark:text-white/20 uppercase tracking-widest">
                  Latency:{" "}
                  <span className="text-green-500 font-bold">42ms</span> | CPU:{" "}
                  <span className="text-yellow-500 font-bold">12%</span>
                </div>
              </div>
            </div>

            {/* MAIN HUD CONTENT */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-10 flex-grow content-center">
              {/* Left Column */}
              <div className="md:col-span-3 space-y-6">
                <HUDBox title={isRTL ? "جوهر التكنولوجيا" : "TECH_FOUNDATION"}>
                  <div className="space-y-4">
                    {[
                      { l: "ENGINE", v: "REACT_19" },
                      { l: "ROUTER", v: "V6.2x" },
                      { l: "STYLING", v: "TAILWIND" },
                      { l: "MOTION", v: "FRAMER" },
                    ].map((item) => (
                      <div
                        key={item.l}
                        className="flex justify-between items-center text-[10px]"
                      >
                        <span className="text-slate-500 dark:text-white/30">
                          {item.l}
                        </span>
                        <span className="text-primary dark:text-cyber font-bold">
                          [{item.v}]
                        </span>
                      </div>
                    ))}
                  </div>
                </HUDBox>

                <HUDBox title={isRTL ? "مؤشرات الأداء" : "PERFORMANCE_NODES"}>
                  <div className="h-16 flex items-end gap-1 px-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: [
                            `${30 + Math.random() * 70}%`,
                            `${10 + Math.random() * 90}%`,
                          ],
                        }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: i * 0.1,
                        }}
                        className="flex-1 bg-primary/20 dark:bg-cyber/20 border-t-2 border-primary dark:border-cyber"
                      />
                    ))}
                  </div>
                </HUDBox>
              </div>

              {/* Middle Section: Hero Visual */}
              <div className="md:col-span-6 flex flex-col items-center justify-center relative py-12">
                {/* Rotating Cyber Rings */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 border-[1px] border-primary/20 dark:border-cyber/10 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-4 border-[1px] border-dashed border-primary/30 dark:border-cyber/20 rounded-full"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-12 bg-primary/5 dark:bg-cyber/5 rounded-full blur-2xl"
                  />

                  {/* Central Identity: Circular & Integrated */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 10, repeat: Infinity }}
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-primary/20 bg-primary/5 p-4 flex items-center justify-center backdrop-blur-sm"
                    >
                      <img
                        src={
                          isDarkMode
                            ? "/logos/optima-04-symbol-dark.svg"
                            : "/logos/optima-05-symbol-light.svg"
                        }
                        alt="Optima"
                        className="w-full h-full object-contain opacity-20 dark:opacity-30"
                      />
                    </motion.div>
                  </div>
                </div>

                <div className="mt-12 text-center space-y-4">
                  <div className="inline-block px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full text-xs font-black tracking-[0.4em] uppercase shadow-2xl">
                    {isRTL ? "تزامن الهوية فعال" : "IDENTITY_SYNC_ACTIVE"}
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-white/40 uppercase tracking-widest max-w-xs mx-auto leading-relaxed">
                    {isRTL
                      ? "جاري مراقبة استجابات النظام والتفاعل العصبي للمستخدم."
                      : "Monitoring system responses and neural user interactions."}
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="md:col-span-3 space-y-6">
                <HUDBox title={isRTL ? "تحليل المستخدم" : "USER_INSIGHTS"}>
                  <div className="space-y-4 text-[10px]">
                    <div className="flex justify-between">
                      <span>GEO:</span>{" "}
                      <span className="text-primary dark:text-cyber">
                        GCC/MIDDLE_EAST
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>LANG:</span>{" "}
                      <span className="text-primary dark:text-cyber">
                        {isRTL ? "ARABIC" : "ENGLISH_US"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>MODE:</span>{" "}
                      <span className="text-primary dark:text-cyber">
                        {isDarkMode ? "DARK_V2" : "LIGHT_V2"}
                      </span>
                    </div>
                  </div>
                </HUDBox>

                <HUDBox title={isRTL ? "سجل التشريعات" : "PROTOCOL_LOGS"}>
                  <div className="text-[8px] space-y-2 opacity-50 dark:opacity-30 leading-none">
                    <div className="flex gap-2">
                      <span>[OK]</span> <span>BOOT_SEQ_LOADED</span>
                    </div>
                    <div className="flex gap-2 text-primary dark:text-cyber">
                      <span>{"[>>]"}</span> <span>SYNC_XPR_INIT</span>
                    </div>
                    <div className="flex gap-2">
                      <span>[OK]</span> <span>ENCRYPTION_ACTIVE</span>
                    </div>
                    <div className="flex gap-2">
                      <span>[OK]</span> <span>OPTIMA_OS_ON</span>
                    </div>
                  </div>
                </HUDBox>
              </div>
            </div>

            {/* BOTTOM FOOTER */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-primary/20 dark:border-white/10 pt-8">
              <div className="flex gap-8 items-center">
                <div className="flex flex-col">
                  <span className="text-[8px] text-slate-400 uppercase tracking-widest leading-none mb-1">
                    Date_Stamp
                  </span>
                  <span className="text-xs text-slate-900 dark:text-white font-black">
                    {new Date().toLocaleDateString()}
                  </span>
                </div>
                <div className="w-[1px] h-6 bg-slate-200 dark:bg-white/10 hidden md:block" />
                <div className="text-[9px] text-primary dark:text-cyber uppercase font-bold tracking-widest animate-pulse">
                  {">"} CONNECTION_STABLE
                </div>
              </div>

              <button
                onClick={() => setIsActive(false)}
                className="group relative px-10 py-3 rounded-full overflow-hidden transition-all duration-500 border border-primary/30 hover:border-primary dark:border-cyber/30 dark:hover:border-cyber"
              >
                <div className="absolute inset-0 bg-primary/10 dark:bg-cyber/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-900 dark:text-white">
                  {isRTL ? "إنهاء الاتصال" : "TERMINATE_HUD"}
                </span>
              </button>
            </div>
          </div>

          {/* Scanning Line */}
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[15vh] bg-gradient-to-b from-transparent via-primary/5 dark:via-cyber/5 to-transparent z-0 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MagicEasterEgg;
