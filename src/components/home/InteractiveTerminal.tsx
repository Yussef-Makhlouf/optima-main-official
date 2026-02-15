import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const InteractiveTerminal: React.FC = () => {
  const { t, i18n } = useTranslation(["home"]);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const isRTL = i18n.language === "ar";

  // Initialize terminal with localized welcome message
  useEffect(() => {
    setOutput([t("home:terminal.systemReady"), t("home:terminal.typeHelp")]);
  }, [t]);

  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    // Simple mapping for common Arabic commands if the user types them
    // This is a basic enhancement; ideally these would be in translation files
    let normalizedCmd = command;
    if (command === "مساعدة" || command === "المساعدة") normalizedCmd = "help";
    if (command === "خدمات" || command === "الخدمات")
      normalizedCmd = "services";
    if (command === "مشاريع" || command === "المشاريع")
      normalizedCmd = "projects";
    if (command === "من نحن" || command === "عنا") normalizedCmd = "about";
    if (command === "تواصل" || command === "اتصل") normalizedCmd = "contact";
    if (command === "مسح" || command === "تنظيف") normalizedCmd = "clear";

    let response = `${isRTL ? "->" : ">"} ${cmd}`;
    let action = null;

    switch (normalizedCmd) {
      case "help":
        if (isRTL) {
          setOutput((prev) => [
            ...prev,
            response,
            t("home:terminal.availableCommands"),
            "- خدمات",
            "- مشاريع",
            "- من نحن",
            "- تواصل",
            "- مسح",
          ]);
        } else {
          setOutput((prev) => [
            ...prev,
            response,
            t("home:terminal.availableCommands"),
            "- SERVICES",
            "- PROJECTS",
            "- ABOUT",
            "- CONTACT",
            "- CLEAR",
          ]);
        }
        break;
      case "services":
        setOutput((prev) => [
          ...prev,
          response,
          t("home:terminal.redirectServices"),
        ]);
        action = () => setTimeout(() => navigate("/services"), 1000);
        break;
      case "projects":
        setOutput((prev) => [
          ...prev,
          response,
          t("home:terminal.accessProjects"),
        ]);
        action = () => setTimeout(() => navigate("/projects"), 1000);
        break;
      case "about":
        setOutput((prev) => [
          ...prev,
          response,
          t("home:terminal.loadingProfile"),
        ]);
        action = () => setTimeout(() => navigate("/about"), 1000);
        break;
      case "contact":
        setOutput((prev) => [
          ...prev,
          response,
          t("home:terminal.openingChannels"),
        ]);
        action = () => setTimeout(() => navigate("/contact"), 1000);
        break;
      case "clear":
        setOutput([t("home:terminal.consoleCleared")]);
        break;
      default:
        setOutput((prev) => [
          ...prev,
          response,
          t("home:terminal.error", { cmd: command }),
        ]);
    }

    if (action) action();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <section
      className="py-24 bg-black font-mono text-green-500 p-6 md:p-12 relative overflow-hidden border-y border-green-900/30"
      dir="ltr"
    >
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>

      <div
        ref={containerRef}
        onClick={() => inputRef.current?.focus()}
        className={`max-w-3xl mx-auto border bg-black/90 p-6 shadow-2xl transition-all duration-500 rounded-md relative z-20 ${isFocused ? "border-green-500/50 shadow-[0_0_30px_rgba(0,255,0,0.15)]" : "border-green-800/30 shadow-[0_0_10px_rgba(0,255,0,0.05)]"}`}
      >
        <div
          className={`flex justify-between items-center border-b border-green-900/50 pb-2 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}
        >
          <span className="text-[10px] font-mono text-green-700 uppercase tracking-widest">
            {t("home:terminal.guest")} // {isFocused ? "ACTIVE" : "IDLE"}
          </span>
          <div className="flex space-x-2">
            <div
              className={`w-3 h-3 rounded-full ${isFocused ? "bg-red-500" : "bg-red-500/20"} transition-colors`}
            ></div>
            <div
              className={`w-3 h-3 rounded-full ${isFocused ? "bg-yellow-500" : "bg-yellow-500/20"} transition-colors`}
            ></div>
            <div
              className={`w-3 h-3 rounded-full ${isFocused ? "bg-green-500" : "bg-green-500/20"} transition-colors`}
            ></div>
          </div>
        </div>

        <div
          className={`h-64 overflow-y-auto font-mono text-sm space-y-1 px-8 ${isRTL ? "text-right" : "text-left"} 
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:bg-green-900/20
                    [&::-webkit-scrollbar-thumb]:bg-green-500/40
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    hover:[&::-webkit-scrollbar-thumb]:bg-green-500/60
                    transition-colors`}
        >
          {output.map((line, i) => (
            <div
              key={i}
              className={`transition-opacity duration-300 ${isFocused ? "opacity-90" : "opacity-40"}`}
            >
              {line}
            </div>
          ))}
          <div ref={inputRef as any}></div>
        </div>

        <div
          className={`mt-4 flex items-center border-t py-2 transition-colors ${isFocused ? "border-green-500/50" : "border-green-900/30"} ${isRTL ? "flex-row-reverse" : ""}`}
        >
          <span
            className={`mx-2 transition-colors ${isFocused ? "text-green-400" : "text-green-900"}`}
          >
            {isRTL ? "$" : "$"}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`bg-transparent border-none outline-none w-full placeholder-green-900/50 text-sm transition-colors ${isFocused ? "text-green-400" : "text-green-900"} ${isRTL ? "text-right" : "text-left"}`}
            placeholder={isFocused ? "" : t("home:terminal.placeholder")}
            dir={isRTL ? "rtl" : "ltr"}
          />
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
