import React from 'react';
import { useTranslation } from 'react-i18next';
import { TEAM } from '../../data/content';

const TeamGrid: React.FC = () => {
    const { t } = useTranslation(['about']);
    return (
        <section className="py-32 bg-slate-100 dark:bg-black overflow-hidden relative border-y border-slate-200 dark:border-white/5 transition-colors">
            <div className="absolute inset-0 grid-bg opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20">
                    <h2 className="text-xs uppercase tracking-[0.4em] font-black text-primary mb-6">{t('about:team.tag')}</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase transition-colors">{t('about:team.title')}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TEAM.map((member, index) => (
                        <div key={member.id} className="group relative bg-white dark:bg-dark/50 border border-slate-200 dark:border-white/10 p-2 transition-all duration-300 hover:border-primary/50">
                            {/* Card Header */}
                            <div className="flex justify-between items-center mb-2 px-2 pt-2">
                                <span className="text-[9px] font-mono text-slate-400 dark:text-gray-500 tracking-widest uppercase">ID: {member.code}</span>
                                <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-secondary animate-pulse' : 'bg-primary animate-pulse'}`}></div>
                            </div>

                            {/* Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-slate-200 dark:bg-black/50">
                                <img
                                    src={member.image}
                                    alt={t(`about:team.members.${member.id}.name`)}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                                {/* Glitch Overlay on Hover */}
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-100 pointer-events-none"></div>
                            </div>

                            {/* Content */}
                            <div className="px-4 pb-6">
                                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-1 select-none">{t(`about:team.members.${member.id}.name`)}</h4>
                                <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">{t(`about:team.members.${member.id}.role`)}</div>
                                <p className="text-xs text-slate-500 dark:text-gray-400 font-mono leading-relaxed opacity-80 border-l border-slate-300 dark:border-white/10 pl-3">
                                    "{t(`about:team.members.${member.id}.bio`)}"
                                </p>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-slate-400 dark:border-white/20 group-hover:border-primary transition-colors"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-slate-400 dark:border-white/20 group-hover:border-secondary transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamGrid;
