import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PROJECTS, SERVICES, TEAM } from "../../data/content";

const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const isRTL = i18n.language === "ar";

  const closePalette = useCallback(() => {
    setIsOpen(false);
    setSearch("");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.code === "KeyK") {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (e.repeat) return;
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") closePalette();
    };
    window.addEventListener("keydown", handleKeyDown, { capture: true });
    return () =>
      window.removeEventListener("keydown", handleKeyDown, { capture: true });
  }, [closePalette]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const results = useMemo(() => {
    if (!search) return { projects: [], services: [], team: [], actions: [] };
    const query = search.toLowerCase();
    return {
      projects: PROJECTS.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.client.toLowerCase().includes(query),
      ).slice(0, 3),
      services: SERVICES.filter((s) =>
        s.slug.replace(/-/g, " ").toLowerCase().includes(query),
      ).slice(0, 3),
      team: TEAM.filter(
        (t) =>
          t.name.replace(/_/g, " ").toLowerCase().includes(query) ||
          t.role.toLowerCase().includes(query),
      ).slice(0, 3),
      actions: [
        {
          id: "theme",
          label: isRTL ? "تبديل المظهر" : "Appearance",
          icon: "🌗",
          action: () => document.documentElement.classList.toggle("dark"),
        },
        {
          id: "magic",
          label: isRTL ? "تحفيز النظام" : "Pulse System",
          icon: "🚀",
          action: () => window.dispatchEvent(new CustomEvent("trigger-magic")),
        },
      ].filter((a) => a.label.toLowerCase().includes(query)),
    };
  }, [search, isRTL]);

  const hasResults =
    results.projects.length > 0 ||
    results.services.length > 0 ||
    results.team.length > 0 ||
    results.actions.length > 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[9000] flex items-start justify-center pt-[15vh] px-4 pointer-events-none overflow-hidden"
          style={{ direction: isRTL ? "rtl" : "ltr" }}
        >
          {/* OPTIMIZED BACKDROP: Light Glow & Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/10 dark:bg-black/40 backdrop-blur-[4px] pointer-events-auto"
            onClick={closePalette}
          >
            {/* Simple Performance Glow */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
              <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
              <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
            </div>
            <div className="absolute inset-0 grid-bg opacity-10" />
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative z-50 w-full max-w-lg bg-white dark:bg-dark border border-white/20 dark:border-white/10 rounded-[2.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden pointer-events-auto flex flex-col"
          >
            {/* COMPACT INNOVATIVE HEADER */}
            <div className="relative p-6 px-10">
              <div className="flex items-center gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm shadow-[0_0_20px_#145D90] border border-white/20">
                    <span className="animate-pulse">✨</span>
                  </div>
                </div>

                <input
                  ref={inputRef}
                  type="text"
                  placeholder={isRTL ? "ابحث بذكاء..." : "Search Node..."}
                  className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white text-xl placeholder:text-slate-400 dark:placeholder:text-white/20 font-medium"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <div className="flex gap-1">
                  <kbd className="px-1.5 py-1 bg-slate-900 dark:bg-white text-white dark:text-dark rounded-lg text-[9px] font-bold opacity-30">
                    K
                  </kbd>
                </div>
              </div>

              {/* Intelligent Progress Bar (Fakes AI reasoning) */}
              {search && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyber to-transparent origin-left"
                />
              )}
            </div>

            {/* CONCENTRATED CONTENT AREA */}
            <div className="max-h-[50vh] overflow-y-auto p-4 custom-scrollbar">
              {!search ? (
                <div className="grid grid-cols-2 gap-2 p-2">
                  {[
                    {
                      label: isRTL ? "الخدمات" : "Services",
                      icon: "⚡",
                      path: "/services",
                    },
                    {
                      label: isRTL ? "المشاريع" : "Projects",
                      icon: "📂",
                      path: "/projects",
                    },
                    {
                      label: isRTL ? "عنا" : "About",
                      icon: "👤",
                      path: "/about",
                    },
                    {
                      label: isRTL ? "تواصل" : "Contact",
                      icon: "📡",
                      path: "/contact",
                    },
                  ].map((item, i) => (
                    <motion.button
                      key={item.path}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => {
                        navigate(item.path);
                        closePalette();
                      }}
                      className="flex items-center gap-3 p-4 rounded-[1.8rem] bg-white dark:bg-white/5 border border-slate-100 dark:border-white/[0.03] hover:border-cyber/50 hover:bg-cyber/5 transition-all text-left rtl:text-right group"
                    >
                      <span className="text-lg w-8 h-8 flex items-center justify-center rounded-full bg-slate-50 dark:bg-white/5 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-xs font-bold text-slate-700 dark:text-white/60 tracking-tight">
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              ) : hasResults ? (
                <div className="space-y-4 p-2">
                  {Object.entries(results).map(
                    ([key, items]) =>
                      items.length > 0 && (
                        <div key={key} className="space-y-2">
                          <h4 className="px-5 text-[8px] font-black text-primary/40 uppercase tracking-[0.4em]">
                            {key}
                          </h4>
                          {items.map((item: any) => (
                            <button
                              key={item.id || item.label}
                              onClick={() => {
                                if (item.action) item.action();
                                else
                                  navigate(
                                    item.path || `/projects/${item.slug}`,
                                  );
                                if (item.id !== "magic") closePalette();
                              }}
                              className="w-full flex items-center gap-4 p-3 rounded-2xl hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20 group"
                            >
                              <span className="text-base w-10 h-10 flex items-center justify-center bg-white dark:bg-white/10 rounded-xl border border-slate-100 dark:border-white/10">
                                {item.icon || "🛸"}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="text-slate-800 dark:text-white font-bold text-xs truncate uppercase tracking-tighter">
                                  {item.title || item.label}
                                </div>
                                <div className="text-[10px] text-slate-400 dark:text-white/20 truncate">
                                  {item.client ||
                                    item.role ||
                                    "Instant Execute"}
                                </div>
                              </div>
                              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity text-cyber">
                                →
                              </span>
                            </button>
                          ))}
                        </div>
                      ),
                  )}
                </div>
              ) : (
                <div className="p-16 text-center">
                  <div className="text-3xl mb-2 opacity-20">🛸</div>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest">
                    No matching node found
                  </p>
                </div>
              )}
            </div>

            {/* MINI STATUS BAR */}
            <div className="p-5 px-10 bg-slate-50/50 dark:bg-white/5 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber animate-pulse" />
                <span className="text-[9px] font-black text-slate-400 dark:text-white/20 tracking-widest">
                  OPTIMA_PULSE v2.5
                </span>
              </div>
              <div className="text-[8px] text-slate-300 dark:text-white/10 uppercase">
                Security: Active
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
