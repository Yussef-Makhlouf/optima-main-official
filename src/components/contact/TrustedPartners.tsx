import React from 'react';
import { useTranslation } from 'react-i18next';

interface Partner {
    name: string;
    logo?: string;
    sectorKey: string;
}

const TrustedPartners: React.FC = () => {
    const { t } = useTranslation(['contact']);

    const partners: Partner[] = [
        { name: 'Tarmez Tech', sectorKey: 'software', logo: '/partners/tarmezmain.svg' },
        { name: 'Logix Pro', sectorKey: 'software', logo: '/partners/logixi.png' },
        { name: 'Technova', sectorKey: 'ai', logo: '/partners/technova.svg' },
        { name: 'Fifth Floor', sectorKey: 'marketing', logo: '/partners/fifith-floor-light.png' },
        { name: 'Golden Moon', sectorKey: 'digitalMarketing', logo: '/partners/golden-moon.png' },
        { name: 'MACC', sectorKey: 'facility', logo: '/partners/macc.svg' },
        { name: 'UAEMMAF', sectorKey: 'sports', logo: '/partners/uaemmaf.svg' },
        { name: 'ARTAT', sectorKey: 'animalHealth', logo: '/partners/artat.png' },
        { name: 'Tasis Al-Binaa', sectorKey: 'realEstate', logo: '/partners/tasis-albinaa.svg' },
        { name: 'RAF', sectorKey: 'realEstate', logo: '/partners/raf.png' },
        { name: 'Ghanfa', sectorKey: 'facility', logo: '/partners/mainlogo.png' },
    ];

    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

            {/* Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                        <span className="text-xs font-mono text-secondary uppercase tracking-widest">
                            {t('contact:partners.tag')}
                        </span>
                        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter">
                        {t('contact:partners.title')}
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                            {t('contact:partners.titleHighlight')}
                        </span>
                    </h2>
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        {t('contact:partners.description')}
                    </p>
                </div>

                {/* Partners Grid with Hexagonal Pattern */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="group relative"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Glassmorphic Card */}
                            <div className="relative h-full bg-white/50 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 hover:border-primary/50 transition-all duration-500 overflow-hidden">
                                {/* HUD Corners */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors duration-300"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary/30 group-hover:border-secondary transition-colors duration-300"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary/30 group-hover:border-secondary transition-colors duration-300"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-300"></div>

                                {/* Animated Gradient Background on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-primary/5 transition-all duration-500"></div>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col justify-between h-full min-h-[160px]">
                                    {/* Logo Placeholder (can be replaced with actual images) */}
                                    <div className="mb-6 flex items-center justify-center h-16">
                                        {partner.logo ? (
                                            <img
                                                src={partner.logo}
                                                alt={partner.name}
                                                className="max-h-32 w-auto opacity-60 dark:opacity-40 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                                                onError={(e) => {
                                                    // Fallback to text if image doesn't exist
                                                    e.currentTarget.style.display = 'none';
                                                    const textElement = e.currentTarget.nextElementSibling as HTMLElement;
                                                    if (textElement) textElement.style.display = 'block';
                                                }}
                                            />
                                        ) : null}
                                        {/* Text Fallback */}
                                        <div className={partner.logo ? "hidden" : "block text-center"}>
                                            <h3 className="text-2xl font-black text-slate-700 dark:text-white/70 group-hover:text-slate-900 dark:group-hover:text-white uppercase tracking-tight transition-colors">
                                                {partner.name}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Company Info */}
                                    <div className="border-t border-slate-200 dark:border-white/5 pt-4">
                                        <div className="text-[9px] font-mono text-slate-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                                            {t('contact:partners.sectorLabel')}
                                        </div>
                                        <div className="text-sm font-semibold text-slate-600 dark:text-gray-300 group-hover:text-primary transition-colors">
                                            {t(`contact:partners.sectors.${partner.sectorKey}`)}
                                        </div>
                                    </div>

                                    {/* Status Indicator */}
                                    <div className="absolute top-4 right-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-[8px] font-mono text-green-400 uppercase tracking-wider">{t('contact:partners.activeStatus')}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Outer Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 blur-lg -z-10 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default TrustedPartners;
