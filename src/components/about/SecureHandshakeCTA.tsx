import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Icons } from '../../data/content';

const SecureHandshakeCTA: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { t } = useTranslation(['about', 'common']);

    return (
        <section className="py-40 relative overflow-hidden bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-white/5 transition-colors">
            {/* Background Data Streams */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-[slide_3s_infinite]"></div>
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-[slide_4s_infinite_1s]"></div>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-[slide_5s_infinite_0.5s]"></div>
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-block mb-12">
                    <div className="flex items-center space-x-4 mb-6 justify-center">
                        <div className="w-12 h-[1px] bg-secondary"></div>
                        <span className="text-[10px] font-black text-secondary uppercase tracking-[0.6em]">{t('about:cta.tag')}</span>
                        <div className="w-12 h-[1px] bg-secondary"></div>
                    </div>
                </div>

                <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-16 tracking-tighter uppercase transition-colors leading-none">
                    {t('about:cta.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t('about:cta.titleHighlight')}</span><br />
                    {t('about:cta.titleSuffix')}
                </h2>

                <div
                    className="relative group inline-block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Link to="/contact">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                            {/* Rotating Outer Rings */}
                            <div className="absolute inset-0 border border-slate-300 dark:border-white/10 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-primary/50 transition-colors"></div>
                            <div className="absolute inset-4 border border-slate-300 dark:border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed group-hover:border-secondary/50 transition-colors"></div>

                            {/* Inner Core */}
                            <div className="absolute inset-16 bg-white dark:bg-dark border border-slate-200 dark:border-white/20 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110 shadow-2xl shadow-primary/20">
                                <div className="absolute inset-0 grid-bg opacity-20"></div>
                                <div className="flex flex-col items-center z-10 space-y-2">
                                    <div className={`text-4xl transition-all duration-500 ${isHovered ? 'text-secondary scale-125' : 'text-slate-400 dark:text-white/20'}`}>
                                        <Icons.Network />
                                    </div>
                                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${isHovered ? 'text-primary' : 'text-slate-400 dark:text-white/40'}`}>
                                        {isHovered ? t('about:cta.button.initialize') : t('about:cta.button.connect')}
                                    </span>
                                </div>
                            </div>

                            {/* Hover Particles/Glow */}
                            <div className={`absolute inset-0 rounded-full bg-primary/20 blur-3xl transition-opacity duration-700 ${isHovered ? 'opacity-50' : 'opacity-0'}`}></div>
                        </div>
                    </Link>

                    {/* Technical Labels */}
                    <div className="absolute top-1/2 -left-24 transform -translate-y-1/2 text-[9px] font-mono text-slate-400 dark:text-white/20 text-right hidden md:block">
                        <div>SECURE_LINK</div>
                        <div>ENCRYPTION_ON</div>
                    </div>
                    <div className="absolute top-1/2 -right-24 transform -translate-y-1/2 text-[9px] font-mono text-slate-400 dark:text-white/20 text-left hidden md:block">
                        <div>PORT_443</div>
                        <div>JIT_ACCESS</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecureHandshakeCTA;
