import React from 'react';
import { useTranslation } from 'react-i18next';
import LogoMarquee from './LogoMarquee';

interface Technology {
    name: string;
    icon?: React.ReactNode;
    logo?: string;
    color?: string;
    category?: string;
}

interface TechMarqueeProps {
    technologies: Technology[];
    title?: string;
    showTitle?: boolean;
    speed?: 'slow' | 'normal' | 'fast';
}

const TechMarquee: React.FC<TechMarqueeProps> = ({
    technologies,
    title,
    showTitle = true,
    speed = 'normal'
}) => {
    const { t } = useTranslation(['common']);
    const displayTitle = title || t('common:techStack.title');

    return (
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-surface/20 border-y border-slate-200 dark:border-white/5 transition-colors overflow-hidden" dir="ltr">
            <div className="max-w-7xl mx-auto px-6">
                {showTitle && (
                    <div className="text-center mb-12">
                        <h2 className="text-[10px] md:text-xs font-mono font-bold text-primary uppercase tracking-[0.5em] mb-3">
                            [ {t('common:techStack.tag')} ]
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                            {displayTitle}
                        </h3>
                    </div>
                )}

                <LogoMarquee speed={speed} direction="right" pauseOnHover={true}>
                    {technologies.map((tech, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 group relative"
                        >
                            <div className="flex items-center gap-4 px-8 py-4 bg-white dark:bg-dark border border-slate-200 dark:border-white/10 group-hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5">
                                {tech.logo ? (
                                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                                        <img
                                            src={tech.logo}
                                            alt={tech.name}
                                            className="w-full h-full object-contain opacity-70 group-hover:opacity-100"
                                        />
                                    </div>
                                ) : tech.icon && (
                                    <div
                                        className="text-slate-600 dark:text-white/60 group-hover:scale-110 transition-transform duration-300"
                                        style={{ color: tech.color }}
                                    >
                                        {tech.icon}
                                    </div>
                                )}
                                <div>
                                    <div className="text-sm md:text-base font-black text-slate-900 dark:text-white uppercase tracking-tight">
                                        {tech.name}
                                    </div>
                                    {tech.category && (
                                        <div className="text-[8px] font-mono text-slate-400 dark:text-white/40 uppercase tracking-wider">
                                            {tech.category}
                                        </div>
                                    )}
                                </div>
                                {/* Accent line */}
                                <div
                                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-500"
                                    style={{ backgroundColor: tech.color || '#145D90' }}
                                />
                            </div>
                        </div>
                    ))}
                </LogoMarquee>
            </div>
        </section>
    );
};

export default TechMarquee;

