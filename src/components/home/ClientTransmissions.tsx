import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TESTIMONIALS } from "../../data/content";

const ClientTransmissions: React.FC = () => {
  const { t, i18n } = useTranslation(["home"]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [decodedText, setDecodedText] = useState("");
  const [isDecoding, setIsDecoding] = useState(false);

  const currentTestimonial = TESTIMONIALS[activeIndex];

  // Get localized text
  const localizedText = t(
    `home:testimonials.items.${currentTestimonial.id}.text`,
  );
  const localizedRole = t(
    `home:testimonials.items.${currentTestimonial.id}.role`,
  );
  const localizedLocation = t(
    `home:testimonials.items.${currentTestimonial.id}.location`,
  );
  const localizedEncrypted = t(
    `home:testimonials.items.${currentTestimonial.id}.encrypted`,
  );

  useEffect(() => {
    let interval: number;

    // Auto-advance
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  useEffect(() => {
    // Decode effect when active index changes
    const text = localizedText;
    let iteration = 0;
    setIsDecoding(true);

    const possibleChars =
      i18n.language === "ar"
        ? "ابتثجحخدذرزسشصضطظعغفقكلمنهوي٠١٢٣٤٥٦٧٨٩"
        : "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    const interval = setInterval(() => {
      setDecodedText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return possibleChars[
              Math.floor(Math.random() * possibleChars.length)
            ];
          })
          .join(""),
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsDecoding(false);
      }

      iteration += 1; // Speed of decoding
    }, 15);

    return () => clearInterval(interval);
  }, [activeIndex, currentTestimonial, localizedText, i18n.language]); // Added i18n.language usage

  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden border-y border-white/10">
      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute inset-0 pointer-events-none z-10 bg-scanline opacity-10"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-stretch border border-primary/30 bg-black/40 backdrop-blur-sm p-1 overflow-hidden">
          {/* Signal Status Sidebar */}
          <div className="w-full md:w-auto md:min-w-[300px] md:shrink-0 border-b md:border-b-0 md:border-r border-primary/30 p-6 md:p-10 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2">
                {t("home:testimonials.tag")}
              </div>
              <div className="flex space-x-1 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-8 w-2 ${i <= 3 ? "bg-secondary" : "bg-secondary/20"} animate-pulse`}
                  ></div>
                ))}
              </div>

              <div className="space-y-4">
                {TESTIMONIALS.map((tItem, idx) => (
                  <button
                    key={tItem.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`block w-full text-left text-[10px] font-mono uppercase tracking-widest px-3 py-2 border-l-2 transition-all whitespace-nowrap ${
                      idx === activeIndex
                        ? "border-cyber bg-cyber/10 text-white"
                        : "border-transparent text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    Src_0{idx + 1} :: {tItem.client}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-8 text-[9px] text-gray-600 font-mono">
              {t("home:testimonials.encryption")}
              <br />
              {t("home:testimonials.status")}
            </div>
          </div>

          {/* Main Display Area */}
          <div className="flex-1 p-8 md:p-16 relative min-h-[300px] flex flex-col justify-center">
            <div className="absolute top-4 right-4 text-[10px] font-mono text-cyber animate-pulse">
              {t("home:testimonials.incoming")}
            </div>

            <div key={activeIndex}>
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-2">
                  {currentTestimonial.client}
                </h3>
                <div className="flex items-center space-x-4 text-xs font-mono text-primary">
                  <span>[{localizedRole}]</span>
                  <span>//</span>
                  <span>{localizedLocation}</span>
                </div>
              </div>

              <blockquote className="text-lg md:text-2xl font-light font-mono leading-relaxed text-gray-300 min-h-[120px]">
                "{decodedText}"
                <span className="inline-block w-2 h-5 bg-cyber ml-1 animate-pulse"></span>
              </blockquote>

              <div className="mt-8 flex justify-between items-center border-t border-white/10 pt-4">
                <div className="text-[9px] font-mono text-gray-500">
                  {localizedEncrypted}
                </div>
                <div className="text-[9px] font-mono text-cyber">
                  {t("home:testimonials.verified")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTransmissions;
