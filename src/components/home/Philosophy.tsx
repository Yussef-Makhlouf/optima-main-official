import React from 'react';
import { useTranslation } from 'react-i18next';

const Philosophy: React.FC = () => {
    const { t, i18n } = useTranslation(['home']);
    const isRtl = i18n.language === 'ar';

    const principles = [
        {
            id: 'p1',
            code: 'PRIN_01',
            // title and description are now fetched via t() inside the render or mapped
            // Since we need to map them, we can either keep the structure and just use t() here
            // or iterate over keys. But let's keep the structure for icons and codes.
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            id: 'p2',
            code: 'PRIN_02',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            id: 'p3',
            code: 'PRIN_03',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            id: 'p4',
            code: 'PRIN_04',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative py-32 bg-white dark:bg-black overflow-hidden border-y border-slate-200 dark:border-white/5 transition-colors">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 mb-6">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className={`text-xs font-mono text-primary uppercase ${isRtl ? 'tracking-[0.2em]' : 'tracking-widest'}`}>{t('home:philosophy.tag')}</span>
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <h2 className={`text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase ${isRtl ? '' : 'tracking-tighter'}`}>
                        {t('home:philosophy.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t('home:philosophy.titleHighlight')}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                        {t('home:philosophy.subtitle')}
                    </p>
                </div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {principles.map((principle, index) => (
                        <div
                            key={principle.id}
                            className="group relative bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 md:p-10 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Corner Brackets */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 group-hover:border-primary transition-colors"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary/30 group-hover:border-secondary transition-colors"></div>

                            {/* Code Label */}
                            <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-300 dark:text-gray-700 tracking-widest">
                                {principle.code}
                            </div>

                            {/* Icon */}
                            <div className="mb-6 text-primary group-hover:text-secondary transition-colors duration-500">
                                {principle.icon}
                            </div>

                            {/* Content */}
                            <h3 className={`text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase ${isRtl ? '' : 'tracking-tight'}`}>
                                {t(`home:philosophy.items.${principle.id}.title`)}
                            </h3>
                            <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                                {t(`home:philosophy.items.${principle.id}.description`)}
                            </p>

                            {/* Hover Line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Statement */}
                <div className="mt-20 text-center">
                    <div className="inline-block relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-xl"></div>
                        <p className="relative text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            {t('home:philosophy.bottom')} <span className="text-primary">{t('home:philosophy.bottomHighlight')}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
