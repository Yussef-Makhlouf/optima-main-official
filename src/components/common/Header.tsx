
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));
    const location = useLocation();
    const { t } = useTranslation('common');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    const navItems = [
        { label: t('nav.home'), path: '/' },
        { label: t('nav.services'), path: '/services' },
        { label: t('nav.industries'), path: '/industries' },
        { label: t('nav.projects'), path: '/projects' },
        { label: t('nav.about'), path: '/about' },
        { label: t('nav.contact'), path: '/contact' },
    ];

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-dark/95 backdrop-blur-xl border-b border-primary/10 py-3' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            <img
                                src="/logos/optima-05-symbol-light.svg"
                                alt="Optima Symbol"
                                className="w-10 h-10 object-contain dark:hidden group-hover:scale-110 transition-transform duration-500 rounded-full border border-primary/10"
                            />
                            <img
                                src="/logos/optima-04-symbol-dark.svg"
                                alt="Optima Symbol"
                                className="w-10 h-10 object-contain hidden dark:block group-hover:scale-110 transition-transform duration-500 rounded-full border border-primary/10"
                            />
                        </div>
                        <span className="text-2xl font-display font-black tracking-[0.15em] text-slate-900 dark:text-white uppercase hidden md:block">O P T I M A</span>
                        <span className="text-2xl font-display font-black tracking-tighter text-slate-900 dark:text-white uppercase md:hidden">O</span>
                    </Link>

                    {/* Desktop Nav - Centered Pill */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <nav className="flex items-center p-1 bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 rounded-full shadow-lg shadow-primary/5">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`px-5 py-2 rounded-full text-[13px] uppercase tracking-widest font-bold transition-all duration-300  ${location.pathname === item.path
                                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                                        : 'text-slate-500 dark:text-gray-400 hover:text-primary dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <LanguageSwitcher />

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 transition-colors text-slate-500 dark:text-gray-400"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                            )}
                        </button>

                        {/* <Link
                            to="/contact"
                            className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-full text-[11px] font-bold transition-all duration-500 shadow-lg shadow-primary/20 hover:shadow-primary/40 tracking-widest"
                        >
                            {t('header.partnership')}
                        </Link> */}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-slate-500 dark:text-gray-400"
                        >
                            {isDark ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                            )}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-[70] focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <span className={`block w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`block w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Full Page Mobile Dropdown */}
            <div className={`fixed inset-0 z-[55] bg-white dark:bg-dark transition-all duration-700 ease-in-out lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 grid-bg opacity-10"></div>
                <div className="h-full flex flex-col justify-center px-8 relative z-10">
                    <div className="space-y-6">
                        {navItems.map((item, index) => (
                            <div
                                key={item.path}
                                className={`transition-all duration-500 delay-[${index * 100}ms] ${mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
                            >
                                <Link
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-4xl md:text-5xl font-display font-black uppercase tracking-tighter ${location.pathname === item.path ? 'text-primary' : 'text-slate-900 dark:text-white hover:text-secondary'}`}
                                >
                                    {item.label}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Footer Actions */}
                    <div className={`mt-12 flex items-center space-x-6 transition-all duration-500 delay-700 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <LanguageSwitcher />
                        {/* <Link
                            to="/contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm shadow-xl shadow-primary/20"
                        >
                            {t('header.partnership')}
                        </Link> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;