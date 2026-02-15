import React from "react";
import { useTranslation } from "react-i18next";
import LogoMarquee from "./LogoMarquee";

interface Client {
  name: string;
  logo?: string;
  industry: string;
}

interface ClientLogosProps {
  clients: Client[];
  title?: string;
  tag?: string;
  showTitle?: boolean;
}

const ClientLogos: React.FC<ClientLogosProps> = ({
  clients,
  title,
  tag,
  showTitle = true,
}) => {
  const { t } = useTranslation(["about"]);

  // Use provided props or fallback to translations
  const displayTitle = title || t("about:clients.title");
  const displayTag = tag || t("about:clients.tag");

  return (
    <section
      className="py-16 md:py-24 bg-white dark:bg-dark border-y border-slate-200 dark:border-white/5 transition-colors overflow-hidden"
      dir="ltr"
    >
      <div className="max-w-7xl mx-auto px-6">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-[10px] md:text-xs font-mono font-bold text-secondary uppercase tracking-[0.5em] mb-3">
              [ {displayTag} ]
            </h2>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              {displayTitle}
            </h3>
          </div>
        )}

        <LogoMarquee speed="slow" pauseOnHover={true}>
          {clients.map((client, index) => (
            <div key={index} className="flex-shrink-0 group">
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 md:h-16 w-auto opacity-40 dark:opacity-30 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              ) : (
                <div className="px-8 py-4 border border-slate-300 dark:border-white/10 group-hover:border-primary transition-all duration-300">
                  <div className="text-lg md:text-xl font-black text-slate-400 dark:text-white/40 group-hover:text-slate-900 dark:group-hover:text-white uppercase tracking-tight transition-colors">
                    {client.name}
                  </div>
                  <div className="text-[9px] font-mono text-slate-400 dark:text-white/30 uppercase tracking-wider mt-1">
                    {client.industry}
                  </div>
                </div>
              )}
            </div>
          ))}
        </LogoMarquee>
      </div>
    </section>
  );
};

export default ClientLogos;
