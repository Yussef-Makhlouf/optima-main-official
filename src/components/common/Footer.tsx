import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t, i18n } = useTranslation('common');
    const currentYear = new Date().getFullYear();
    const isRTL = i18n.language === 'ar';

    // Dynamic direction classes
    const direction = isRTL ? 'rtl' : 'ltr';
    const textAlign = isRTL ? 'text-right' : 'text-left';
    const textAlignCenter = 'text-center';
    const flexRow = isRTL ? 'flex-row-reverse' : 'flex-row';
    const flexRowReverse = isRTL ? 'flex-row' : 'flex-row-reverse';
    const justifyStart = isRTL ? 'justify-end' : 'justify-start';
    const justifyEnd = isRTL ? 'justify-start' : 'justify-end';
    const marginAuto = isRTL ? 'ml-auto mr-0' : 'mr-auto ml-0';
    const marginAutoOpposite = isRTL ? 'mr-auto ml-0' : 'ml-auto mr-0';
    const paddingStart = isRTL ? 'pr-4 pl-0' : 'pl-4 pr-0';
    const paddingEnd = isRTL ? 'pl-4 pr-0' : 'pr-4 pl-0';
    const borderStart = isRTL ? 'border-r-2 border-l-0' : 'border-l-2 border-r-0';
    const gapStart = isRTL ? 'gap-3' : 'gap-3';

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            name: 'X (Twitter)',
            url: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            url: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm0 2.16c-2.643 0-2.946.012-3.99.06-.795.036-1.226.17-1.512.28-.506.197-.886.436-1.22.77-.334.334-.573.714-.77 1.22-.11.286-.244.717-.28 1.512-.047 1.044-.059 1.347-.059 3.99v.151c0 2.643.012 2.946.06 3.99.036.795.17 1.226.28 1.512.197.506.436.886.77 1.22.334.334.714.573 1.22.77.286.11.717.244 1.512.28 1.044.047 1.347.059 3.99.059h.151c2.643 0 2.946-.012 3.99-.06.795-.036 1.226-.17 1.512-.28.506-.197.886-.436 1.22-.77.334-.334.573-.714.77-1.22.11-.286.244-.717.28-1.512.047-1.044.059-1.347.059-3.99v-.151c0-2.643-.012-2.946-.06-3.99-.036-.795-.17-1.226-.28-1.512-.197-.506-.436-.886-.77-1.22-.334-.334-.714-.573-1.22-.77-.286-.11-.717-.244-1.512-.28-1.044-.047-1.347-.059-3.99-.059H12.315zm-.96 5.86a2.98 2.98 0 110 5.96 2.98 2.98 0 010-5.96zm0-2.16a5.14 5.14 0 100 10.28 5.14 5.14 0 000-10.28zm5.228-3.003a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            name: 'GitHub',
            url: '#',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    const navLinks = [
        { key: 'services', path: '/services' },
        { key: 'projects', path: '/projects' },
        { key: 'industries', path: '/industries' },
        { key: 'about', path: '/about' },
    ];

    const officeLocations = [
        { key: 'hq', color: 'bg-secondary' },
        { key: 'london', color: 'bg-slate-400 dark:bg-slate-600' },
        { key: 'singapore', color: 'bg-slate-400 dark:bg-slate-600' },
    ];

    return (
        <footer
            dir={direction}
            className="bg-slate-50 dark:bg-dark border-t border-slate-200 dark:border-primary/10 pt-16 pb-8 transition-colors relative overflow-hidden"
            role="contentinfo"
            aria-label={t('footer.global')}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none"></div>

            {/* Decorative Gradient */}
            <div className={`absolute top-0 w-full h-px bg-gradient-to-${isRTL ? 'l' : 'r'} from-transparent via-primary/30 to-transparent ${isRTL ? 'right-0' : 'left-0'}`}></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Top Section: Tagline */}
                <div className={`${textAlignCenter} mb-16`}>
                    <h2 className={`text-xl md:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-${isRTL ? 'l' : 'r'} from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-300 dark:to-white max-w-4xl mx-auto leading-relaxed px-4`}>
                        {t('footer.tagline')}
                    </h2>
                    <div className={`w-24 h-1 bg-gradient-to-${isRTL ? 'l' : 'r'} from-primary to-secondary mx-auto mt-6 rounded-full`}></div>
                </div>

                {/* Main Content Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-16`}>

                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <Link
                            to="/"
                            className={`flex items-center gap-3 group w-fit transition-transform duration-500 hover:scale-105 ${flexRow}`}
                            aria-label="OPTIMA Home"
                        >
                            <img
                                src="/logos/optima-05-symbol-light.svg"
                                alt="OPTIMA"
                                className="h-14 md:h-16 w-auto dark:hidden rounded-full border-2 border-slate-200 dark:border-white/10 shadow-sm"
                            />
                            <img
                                src="/logos/optima-04-symbol-dark.svg"
                                alt="OPTIMA"
                                className="h-14 md:h-16 w-auto hidden dark:block rounded-full border-2 border-white/10 dark:border-white/20 shadow-sm"
                            />
                            <span className="text-2xl md:text-3xl font-bold tracking-wider text-slate-800 dark:text-white font-['Orbitron']">
                                <span className="text-primary">OPT</span>IMA
                            </span>
                        </Link>

                        <p className={`text-slate-500 dark:text-gray-400 text-base leading-relaxed transition-colors max-w-sm ${textAlign}`}>
                            {t('footer.description')}
                        </p>

                        {/* Social Links */}
                        <div className="pt-2">
                            <h5 className={`font-bold text-slate-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2 ${flexRow}`}>
                                <span className="w-8 h-px bg-primary/50"></span>
                                {t('footer.social')}
                                <span className="w-8 h-px bg-primary/50"></span>
                            </h5>
                            <div className={`flex gap-3 ${flexRow}`}>
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        aria-label={social.name}
                                        className="w-11 h-11 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-500 dark:text-gray-400 hover:bg-primary hover:border-primary hover:text-white dark:hover:bg-primary dark:hover:border-primary dark:hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-3">
                        <h4 className={`text-slate-900 dark:text-white font-black mb-6 text-[14px] uppercase tracking-[0.4em] transition-colors ${borderStart} ${paddingStart}`}>
                            {t('footer.servicesTitle')}
                        </h4>
                        <ul className={`space-y-4 text-sm font-medium text-slate-500 dark:text-gray-400 transition-colors`}>
                            {navLinks.map((link) => (
                                <li key={link.key} className={`${textAlign}`}>
                                    <Link
                                        to={link.path}
                                        className={`hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group ${flexRow}`}
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-primary transition-all duration-300"></span>
                                        {t(`nav.${link.key}`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Global Addresses */}
                    <div className="lg:col-span-4">
                        <h4 className={`text-slate-900 dark:text-white font-black mb-6 text-[14px] uppercase tracking-[0.4em] transition-colors ${borderStart} ${paddingStart}`}>
                            {t('footer.global')}
                        </h4>
                        <div className="space-y-5">
                            <address className={`not-italic text-sm text-slate-500 dark:text-gray-400 space-y-4 transition-colors`}>
                                {officeLocations.map((office, index) => (
                                    <div
                                        key={office.key}
                                        className={`flex items-start gap-3 ${flexRow}`}
                                    >
                                        <div className={`w-2 h-2 rounded-full ${office.color} mt-1.5 flex-shrink-0 ring-2 ring-white dark:ring-dark`}></div>
                                        <p className={`leading-relaxed flex-1 ${textAlign}`}>{t(`footer.office.${office.key}`)}</p>
                                    </div>
                                ))}
                            </address>

                            <div className="pt-5 border-t border-slate-200 dark:border-white/5">
                                <a
                                    href={`mailto:${t('footer.contact.partnerships')}`}
                                    className={`text-secondary hover:text-primary transition-colors text-sm font-medium inline-flex items-center gap-2 group ${flexRow}`}
                                >
                                    <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <span className="underline decoration-secondary/30 hover:decoration-primary underline-offset-4 transition-all break-all">
                                        {t('footer.contact.partnerships')}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Divider */}
                <div className="relative py-8">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-slate-200 dark:border-white/10"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="bg-slate-50 dark:bg-dark px-4">
                            <svg className={`w-6 h-6 text-primary/40 ${isRTL ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`flex flex-col md:flex-row justify-between items-center text-[11px] text-slate-400 dark:text-gray-500 uppercase tracking-widest transition-colors font-medium gap-4 md:gap-0`}>
                    <p className={`flex items-center gap-2 ${flexRow} order-1`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        {t('footer.copyright', { year: currentYear })}
                    </p>

                    <div className={`flex flex-wrap justify-center items-center gap-4 md:gap-6 ${flexRow} order-2`}>
                        <a href="#" className="hover:text-primary transition-colors duration-300 relative group">
                            {t('footer.legal.privacy')}
                            <span className={`absolute -bottom-1 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full ${isRTL ? 'right-0' : 'left-0'}`}></span>
                        </a>
                        <span className="text-slate-300 dark:text-white/10">|</span>
                        <a href="#" className="hover:text-primary transition-colors duration-300 relative group">
                            {t('footer.legal.terms')}
                            <span className={`absolute -bottom-1 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full ${isRTL ? 'right-0' : 'left-0'}`}></span>
                        </a>
                        <span className="text-slate-300 dark:text-white/10 hidden md:inline">|</span>
                        <span className="font-mono text-[10px] opacity-60 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-500/60 animate-pulse"></span>
                            OPTIMA v1.0
                        </span>
                    </div>
                </div>

                {/* Security Badge */}
                <div className="mt-8 flex justify-center items-center gap-2 text-[10px] text-slate-400 dark:text-gray-600 uppercase tracking-widest">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    {t('footer.secureTransmission')}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
