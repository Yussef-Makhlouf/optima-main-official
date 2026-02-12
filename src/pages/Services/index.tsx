import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SERVICES } from '../../data/content';
import ClientLogos from '../../components/common/ClientLogos';
import { CLIENTS } from '../../data/content-marquee';

const Services: React.FC = () => {
    const { t } = useTranslation(['services', 'common']);
    return (
        <div className="pt-32 bg-white dark:bg-dark transition-colors">
            {/* Architectural Banner */}
            <section className="py-24 bg-slate-50 dark:bg-dark relative overflow-hidden grid-bg border-b border-slate-200 dark:border-white/5 mb-32 transition-colors">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex items-center space-x-4 mb-10">
                        <div className="w-12 h-[1px] bg-primary"></div>
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">{t('services:page.tag')}</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-none uppercase">{t('services:page.title')}</h1>
                    <p className="text-2xl text-slate-600 dark:text-gray-400 max-w-3xl font-light leading-relaxed">
                        {t('services:page.subtitle')}
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6">
                <div className="space-y-60">
                    <div className="space-y-60">
                        <ModuleSection
                            {...SERVICES[0]}
                            image="/hosted.png"
                            t={t}
                        />
                        <ModuleSection
                            {...SERVICES[1]}
                            image="/web-development.jpeg"
                            isReversed
                            t={t}
                        />
                        <ModuleSection
                            {...SERVICES[2]}
                            image="/web-development1.png"
                            t={t}
                        />
                    </div>
                </div>
            </div>

            {/* Client Logos Marquee */}
            <ClientLogos clients={CLIENTS} title={t('services:page.clientsTitle')} />

            {/* Engagement Models */}
            <section className="py-40 mt-40 bg-slate-50 dark:bg-surface/20 border-t border-slate-200 dark:border-white/5 transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-24 flex flex-col lg:flex-row justify-between items-end gap-8">
                        <h3 className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">{t('services:page.engagementTitle')}</h3>
                        <p className="text-slate-500 dark:text-gray-500 max-w-sm text-sm font-light">
                            {t('services:page.engagementSubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-1 bg-slate-200 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                        <div className="md:col-span-4 bg-white dark:bg-dark p-12 transition-colors">
                            <EngagementCard name={t('services:page.engagementCards.audit.name')} price={t('services:page.engagementCards.audit.price')} desc={t('services:page.engagementCards.audit.description')} t={t} />
                        </div>
                        <div className="md:col-span-4 bg-primary p-12 relative overflow-hidden shadow-2xl shadow-primary/20">
                            <div className="absolute top-0 right-0 p-4 text-[10px] font-black text-white/40 tracking-widest uppercase rotate-90 origin-top-right translate-y-8">RECOMMENDED</div>
                            <EngagementCard name={t('services:page.engagementCards.project.name')} price={t('services:page.engagementCards.project.price')} desc={t('services:page.engagementCards.project.description')} featured t={t} />
                        </div>
                        <div className="md:col-span-4 bg-white dark:bg-dark p-12 transition-colors">
                            <EngagementCard name={t('services:page.engagementCards.managed.name')} price={t('services:page.engagementCards.managed.price')} desc={t('services:page.engagementCards.managed.description')} t={t} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ModuleSection: React.FC<{ id: string, slug: string, tag: string, icon: React.ReactNode, features: string[], isReversed?: boolean, technicalCode: string, image: string, t: any }> = ({ id, slug, tag, icon, features, isReversed, technicalCode, image, t }) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
        <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
            <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-secondary">
                    {icon}
                </div>
                <div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">{t(`services:services.${id}.tag`)}</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase transition-colors">{t(`services:services.${id}.title`)}</h2>
                </div>
            </div>
            <p className="text-lg text-slate-600 dark:text-gray-400 font-light leading-relaxed mb-12 border-l border-primary/20 pl-6 transition-colors">
                {t(`services:services.${id}.description`)}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mb-10">
                {features.map((f, i) => (
                    <div key={i} className="flex items-center space-x-3 text-[11px] text-slate-600 dark:text-gray-300 font-black uppercase tracking-widest">
                        <div className="w-1 h-1 bg-secondary rounded-full"></div>
                        <span>{t(`services:services.${id}.features.${f}`)}</span>
                    </div>
                ))}
            </div>
            <Link to={`/services/${slug}`} className="inline-block py-4 px-10 border border-primary/30 text-primary text-[10px] font-black tracking-[0.4em] uppercase hover:bg-primary hover:text-white transition-all duration-300">
                {t('services:page.viewDocs')}
            </Link>
        </div>
        <div className={`lg:col-span-6 aspect-square bg-slate-50 dark:bg-dark/40 border border-slate-200 dark:border-white/5 relative flex items-center justify-center overflow-hidden corner-accent transition-colors ${isReversed ? 'lg:order-1' : ''} group`}>
            <img src={image} alt={t(`services:services.${id}.title`)} className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 grid-bg opacity-10"></div>
            <div className="absolute top-8 left-8 text-[10px] font-black text-slate-400 dark:text-white/10 tracking-[0.5em] z-10 mix-blend-difference">{technicalCode}</div>
            <div className="w-3/4 h-3/4 border border-primary/30 p-8 flex flex-col justify-center relative z-10 backdrop-blur-sm bg-slate-900/30">
                <div className="h-1 w-full bg-primary/10 mb-8 overflow-hidden">
                    <div className="h-full bg-secondary w-1/4 animate-[slide_3s_infinite]"></div>
                </div>
                <div className="space-y-4 text-center">
                    <div className="text-7xl font-black text-white/20 uppercase select-none">{id.charAt(0)}</div>
                    <div className="h-4 bg-white/10 w-full"></div>
                    <div className="h-4 bg-white/10 w-5/6 mx-auto"></div>
                </div>
            </div>
        </div>
    </div>
);

const EngagementCard: React.FC<{ name: string, price: string, desc: string, featured?: boolean, t: any }> = ({ name, price, desc, featured, t }) => (
    <div className="h-full flex flex-col justify-between">
        <div>
            <h4 className={`text-2xl font-black mb-2 uppercase tracking-tight ${featured ? 'text-white' : 'text-slate-900 dark:text-white'}`}>{name}</h4>
            <div className={`text-[10px] font-black uppercase tracking-[0.4em] mb-8 ${featured ? 'text-white/60' : 'text-primary'}`}>{price}</div>
            <p className={`text-sm font-light leading-relaxed mb-10 ${featured ? 'text-white/80' : 'text-slate-500 dark:text-gray-400'}`}>{desc}</p>
        </div>
        <button className={`w-full py-5 text-[10px] font-black tracking-[0.4em] transition-all duration-500 uppercase ${featured ? 'bg-white text-primary hover:bg-dark hover:text-white' : 'border border-primary/40 text-primary hover:bg-primary hover:text-white'}`}>
            {t('common:buttons.inquire')}
        </button>
    </div>
);

export default Services;
