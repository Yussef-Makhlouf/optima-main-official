import React from "react";
import { useTranslation } from "react-i18next";

const BrandDecoration: React.FC<{ className?: string }> = ({ className }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const positionClass = isRTL
    ? "left-0 -translate-x-1/4"
    : "right-0 translate-x-1/4";
  const defaultClassName = `absolute top-1/2 ${positionClass} -translate-y-1/2 opacity-10 pointer-events-none z-0`;

  return (
    <div className={className || defaultClassName}>
      <img
        src="/logos/optima-05-symbol-light.svg"
        className="w-[300px] md:w-[500px] lg:w-[700px] h-auto dark:hidden animate-[spin_120s_linear_infinite]"
        alt=""
      />
      <img
        src="/logos/optima-04-symbol-dark.svg"
        className="w-[300px] md:w-[500px] lg:w-[700px] h-auto hidden dark:block animate-[spin_150s_linear_infinite]"
        alt=""
      />
    </div>
  );
};

export default BrandDecoration;
تم