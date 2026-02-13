
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import RegionalPresence from '../../components/contact/RegionalPresence';
import TrustedPartners from '../../components/contact/TrustedPartners';
import BrandDecoration from '../../components/common/BrandDecoration';


const Contact: React.FC = () => {
    const { t } = useTranslation(['contact', 'common']);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
        interest: 'Consultation'
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(t('contact:form.successMessage'));
    };

    return (
        <div className="relative min-h-screen pt-32 pb-32 overflow-hidden bg-slate-50 dark:bg-black transition-colors">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
            <BrandDecoration />
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-primary/5 to-transparent rounded-bl-full pointer-events-none"></div>

            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-secondary/5 to-transparent rounded-tr-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Contact Info Column */}
                    <div className="lg:col-span-5 flex flex-col h-full">
                        <div className="mb-12">
                            <div className="inline-flex items-center space-x-2 mb-4">
                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                <span className="text-xs font-mono text-primary uppercase tracking-widest">{t('common:status.online')}</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter transition-colors leading-[0.9]">
                                {t('contact:hero.title')} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t('contact:hero.titleHighlight')}</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 leading-relaxed font-light transition-colors border-l-2 border-primary/20 pl-6">
                                {t('contact:hero.subtitle')}
                            </p>
                        </div>

                        <div className="space-y-12 flex-grow">
                            {/* Support Hubs */}
                            <div className="relative group">
                                <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <h3 className="text-xs font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.3em] mb-6 flex items-center">
                                    <span className="w-8 h-[1px] bg-slate-300 dark:bg-white/10 mr-4"></span>
                                    {t('contact:info.locationsTitle')}
                                </h3>
                                <div className="space-y-4 font-mono text-sm">
                                    <div className="flex items-center space-x-4">
                                        <span className="text-secondary">01 ::</span>
                                        <span className="text-slate-700 dark:text-gray-300">Austin, Texas (HQ)</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-secondary">02 ::</span>
                                        <span className="text-slate-700 dark:text-gray-300">London, UK</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-secondary">03 ::</span>
                                        <span className="text-slate-700 dark:text-gray-300">Singapore</span>
                                    </div>
                                </div>
                            </div>

                            {/* Direct Contact */}
                            <div>
                                <h3 className="text-xs font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.3em] mb-6 flex items-center">
                                    <span className="w-8 h-[1px] bg-slate-300 dark:bg-white/10 mr-4"></span>
                                    {t('contact:info.contactTitle')}
                                </h3>
                                <div className="space-y-2">
                                    <a href="mailto:partnerships@optima.solutions" className="block text-xl md:text-2xl font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">
                                        partnerships@optima.solutions
                                    </a>
                                    <p className="text-slate-500 dark:text-gray-500 font-mono">+1 (800) OPTIMA-IT</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="lg:col-span-7 mt-12 lg:mt-0">
                        <div className="relative">
                            {/* Decorative Form Background */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-primary via-secondary to-primary opacity-20 blur-lg rounded-sm"></div>

                            <form onSubmit={handleSubmit} className="relative bg-white dark:bg-black/80 backdrop-blur-xl p-8 md:p-12 border border-slate-200 dark:border-white/10 shadow-2xl">
                                {/* HUD Corners */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/50"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary/50"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary/50"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/50"></div>

                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="group space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-primary transition-colors">{t('contact:form.nameLabel')}</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 p-4 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-white/10 transition-all font-mono text-sm placeholder:text-slate-300 dark:placeholder:text-gray-700"
                                                placeholder={t('contact:form.namePlaceholder')}
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="group space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-primary transition-colors">{t('contact:form.emailLabel')}</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 p-4 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-white/10 transition-all font-mono text-sm placeholder:text-slate-300 dark:placeholder:text-gray-700"
                                                placeholder={t('contact:form.emailPlaceholder')}
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="group space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-primary transition-colors">{t('contact:form.companyLabel')}</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 p-4 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-white/10 transition-all font-mono text-sm placeholder:text-slate-300 dark:placeholder:text-gray-700"
                                            placeholder={t('contact:form.companyPlaceholder')}
                                            value={formState.company}
                                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                        />
                                    </div>

                                    <div className="group space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-primary transition-colors">{t('contact:form.interestLabel')}</label>
                                        <div className="relative">
                                            <select
                                                className="w-full bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 p-4 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-white/10 transition-all font-mono text-sm appearance-none cursor-pointer"
                                                value={formState.interest}
                                                onChange={(e) => setFormState({ ...formState, interest: e.target.value })}
                                            >
                                                <option>{t('contact:form.options.hosting')}</option>
                                                <option>{t('contact:form.options.transformation')}</option>
                                                <option>{t('contact:form.options.webapp')}</option>
                                                <option>{t('contact:form.options.consultation')}</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="group space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-primary transition-colors">{t('contact:form.messageLabel')}</label>
                                        <textarea
                                            required
                                            rows={4}
                                            className="w-full bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 p-4 text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:bg-white dark:focus:bg-white/10 transition-all font-mono text-sm resize-none placeholder:text-slate-300 dark:placeholder:text-gray-700"
                                            placeholder={t('contact:form.messagePlaceholder')}
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full group relative overflow-hidden bg-slate-900 dark:bg-white text-white dark:text-black py-6 font-black uppercase tracking-[0.3em] hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-500 shadow-xl"
                                    >
                                        <span className="relative z-10 flex items-center justify-center space-x-4">
                                            <span>{t('contact:form.submitButton')}</span>
                                            <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </span>
                                        <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Trusted Partners Section */}
                <TrustedPartners />

                {/* Full-Width Regional Map Section */}
                <div className="mt-24">
                    <div className="mb-8">
                        <h3 className="text-xs font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.3em] mb-2 flex items-center justify-center">
                            <span className="w-12 h-[1px] bg-slate-300 dark:bg-white/10 mr-4"></span>
                            {t('contact:regional.title')}
                            <span className="w-12 h-[1px] bg-slate-300 dark:bg-white/10 ml-4"></span>
                        </h3>
                        <p className="text-center text-sm text-slate-500 dark:text-gray-400 font-mono">{t('contact:regional.subtitle')}</p>
                    </div>
                    <div className="relative border border-slate-200 dark:border-white/10 p-2 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
                        <RegionalPresence />
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-secondary"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-secondary"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
