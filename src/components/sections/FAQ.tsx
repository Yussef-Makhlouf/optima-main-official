import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FAQ_KEYS = [
  "migration",
  "compliance",
  "scaling",
  "integration",
  "support",
];

const FAQ: React.FC = () => {
  const { t, i18n } = useTranslation(["home"]);
  const isRtl = i18n.language === "ar";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-40 bg-white dark:bg-dark transition-colors border-t border-slate-200 dark:border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2
            className={`text-[11px] font-mono text-secondary uppercase ${isRtl ? "tracking-[0.2em]" : "tracking-[0.6em]"} mb-6`}
          >
            {t("home:faq.tag")}
          </h2>
          <h3
            className={`text-4xl md:text-6xl font-black text-slate-900 dark:text-white ${isRtl ? "" : "tracking-tighter"} uppercase leading-tight`}
          >
            {t("home:faq.title")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {t("home:faq.titleHighlight")}
            </span>
          </h3>
        </div>

        <div className="space-y-4">
          {FAQ_KEYS.map((key, index) => (
            <div
              key={key}
              className={`border border-slate-200 dark:border-white/5 transition-all duration-500 overflow-hidden ${openIndex === index ? "bg-slate-50 dark:bg-primary/5 border-primary/20" : "bg-white dark:bg-transparent"}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full p-6 md:p-8 flex items-center ${isRtl ? "flex-row-reverse" : ""} group focus:outline-none`}
              >
                <div
                  className={`flex-grow ${isRtl ? "text-right" : "text-left"}`}
                >
                  <span className="text-lg md:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                    {t(`home:faq.items.${key}.question`)}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 flex items-center justify-center border border-slate-300 dark:border-white/10 text-primary transition-transform duration-500 ${isRtl ? "ml-4" : "mr-4"} ${openIndex === index ? "rotate-180 bg-primary text-white" : ""}`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
              >
                <div className="p-6 md:p-8 pt-0 text-slate-500 dark:text-gray-400 font-light leading-relaxed text-base md:text-lg border-t border-slate-100 dark:border-white/5 mt-2">
                  <div
                    className={`flex items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}
                  >
                    <div className="w-1 h-12 bg-primary/20 shrink-0"></div>
                    <p className={isRtl ? "text-right" : "text-left"}>
                      {t(`home:faq.items.${key}.answer`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
