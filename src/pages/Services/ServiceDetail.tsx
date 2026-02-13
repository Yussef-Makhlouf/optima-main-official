
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SERVICES, TechIllustrations, PROJECTS } from '../../data/content';
import InteractiveTimeline from '../../components/detail/InteractiveTimeline';
import FAQAccordion from '../../components/detail/FAQAccordion';
import AnimatedCounter from '../../components/detail/AnimatedCounter';
import BrandDecoration from '../../components/common/BrandDecoration';


const ServiceDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation(['services', 'projects', 'common', 'home']);
    const isRtl = i18n.language === 'ar';

    const service = SERVICES.find(s => s.slug === slug);
    const [loadProgress, setLoadProgress] = useState(0);
    const [latencies, setLatencies] = useState<{ [key: string]: number }>({
        'Dubai': 12,
        'Abu Dhabi': 42,
        'Doha': 156,
        'Muscat': 88,
        'Jeddah': 112
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!service) {
            navigate('/services');
            return;
        }

        const interval = setInterval(() => {
            // Simulate latency jitter
            setLatencies(prev => {
                const next = { ...prev };
                Object.keys(next).forEach(key => {
                    const jitter = Math.floor(Math.random() * 5) - 2;
                    next[key] = Math.max(5, next[key] + jitter);
                });
                return next;
            });
        }, 2000);

        const progressInterval = setInterval(() => {
            setLoadProgress(prev => (prev >= 100 ? 100 : prev + 2));
        }, 20);

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, [service, navigate, slug]);

    if (!service) return null;

    // Localized data mapping
    const localizedTitle = t(`services:services.${service.id}.title`);
    const localizedLongDescription = t(`services:services.${service.id}.longDescription`);

    const localizedFeatures = service.features.map((featureKey: string) =>
        t(`services:services.${service.id}.features.${featureKey}`)
    );

    const localizedSpecs = service.technicalSpecs?.map((specKey: string) =>
        t(`services:services.${service.id}.technicalSpecs.${specKey}`)
    ) || [];

    const localizedProcessSteps = service.processSteps.map((step: any) => ({
        ...step,
        title: t(`services:services.${service.id}.process.${step.key}.title`),
        description: t(`services:services.${service.id}.process.${step.key}.description`)
    }));

    const localizedFaqs = service.faqs.map((faqKey: string) => ({
        question: t(`services:services.${service.id}.faqs.${faqKey}.question`),
        answer: t(`services:services.${service.id}.faqs.${faqKey}.answer`)
    }));

    return (
        <div className="pt-24 md:pt-32 min-h-screen bg-white dark:bg-dark transition-colors relative overflow-x-hidden">
            <TechIllustrations.PacketFlow />

            {/* Abnormal Schematic Header */}
            <section className="relative py-24 md:py-48 overflow-hidden bg-slate-50 dark:bg-dark border-b border-slate-200 dark:border-white/5 transition-colors">
                <div className="absolute inset-0 grid-bg opacity-30"></div>
                <BrandDecoration />
                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    <div className="flex flex-col lg:flex-row items-start justify-between gap-12 md:gap-16">
                        <div className="max-w-4xl relative">
                            <div className={`flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 ${isRtl ? 'md:space-x-reverse md:space-x-8' : 'md:space-x-8'} mb-10 md:mb-12`}>
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 flex items-center justify-center text-secondary rounded-sm border border-primary/20 hud-bracket hud-bracket-tl hud-bracket-br shrink-0">
                                    {service.icon}
                                </div>
                                <div>
                                    <div className="text-[10px] md:text-[11px] font-mono text-primary uppercase tracking-[0.6em] md:tracking-[0.8em] mb-2">{service.technicalCode}</div>
                                    <h1 className="text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-tight">{localizedTitle}</h1>
                                </div>
                            </div>
                            <p className={`text-xl md:text-3xl text-slate-600 dark:text-gray-400 font-light leading-relaxed max-w-2xl ${isRtl ? 'border-r-2 md:border-r-4 pr-6 md:pr-10' : 'border-l-2 md:border-l-4 pl-6 md:pl-10'} border-cyber transition-colors`}>
                                {localizedLongDescription}
                            </p>
                        </div>

                        <div className="lg:w-80 w-full space-y-6">
                            <div className="p-6 md:p-8 bg-primary/5 border border-primary/20 hud-bracket hud-bracket-tr hud-bracket-bl">
                                <div className="text-[10px] font-mono text-secondary mb-4 uppercase tracking-widest">{t('services:page.initStatus')}</div>
                                <div className="h-2 bg-slate-200 dark:bg-white/5 w-full mb-3 overflow-hidden rounded-full">
                                    <div className="h-full bg-cyber transition-all duration-300" style={{ width: `${loadProgress}%` }}></div>
                                </div>
                                <div className="flex justify-between text-[9px] font-mono text-slate-400">
                                    <span>SYSCK_RUNNING</span>
                                    <span>{loadProgress}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Stats Section */}
            <section className="py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-surface/20 dark:to-dark transition-colors border-y border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[10px] md:text-xs font-mono font-bold text-secondary uppercase tracking-[0.5em] mb-4">
                            [ {t('services:page.metricsTag')} ]
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                            {t('services:page.metricsTitle')}
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { val: 99.99, dec: 2, suf: "%", tag: t('services:page.stats.uptime') },
                            { val: 150, suf: "+", tag: t('services:page.stats.nodes') },
                            { val: 24, suf: "/7", tag: t('services:page.stats.support') },
                            { val: 100, suf: "%", tag: t('services:page.stats.secure') }
                        ].map((stat, i) => (
                            <div key={i} className="p-8 md:p-10 bg-white dark:bg-surface/30 border border-slate-200 dark:border-white/5 text-center group hover:border-primary transition-all duration-300">
                                <AnimatedCounter end={stat.val} decimals={stat.dec} suffix={stat.suf} className="text-4xl md:text-5xl font-black text-secondary mb-4" />
                                <div className="text-[10px] md:text-xs text-slate-600 dark:text-gray-400 uppercase tracking-widest font-bold">{stat.tag}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capability Modules */}
            <section className="py-24 md:py-40 bg-white dark:bg-dark transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 dark:bg-white/5 border border-slate-200 dark:border-white/5 mb-24 md:mb-40">
                        {localizedFeatures.map((feature, i) => (
                            <div key={i} className="p-8 md:p-12 bg-white dark:bg-surface/20 group hover:bg-primary transition-all duration-500 relative">
                                <div className="text-secondary font-mono text-[10px] md:text-[11px] tracking-widest uppercase mb-8 md:mb-10 group-hover:text-white/60 transition-colors">MOD_0{i + 1}</div>
                                <h4 className="text-slate-900 dark:text-white font-black text-xl md:text-2xl uppercase tracking-tight mb-6 group-hover:text-white transition-colors leading-tight">{feature}</h4>
                                <div className="w-8 h-1 bg-cyber group-hover:bg-white group-hover:w-full transition-all duration-500"></div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                        <div className="lg:col-span-8">
                            <div className={`flex items-center space-x-6 ${isRtl ? 'space-x-reverse' : ''} mb-12 md:mb-16`}>
                                <h2 className="text-[10px] md:text-[12px] font-mono font-bold text-primary uppercase tracking-[0.4em] md:tracking-[0.6em]">TECHNICAL_READOUT.v4</h2>
                                <div className="flex-grow h-px bg-primary/10"></div>
                            </div>
                            <div className="space-y-8 md:space-y-10">
                                {localizedSpecs.map((spec: string, i: number) => (
                                    <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-100 dark:border-white/5 pb-8 md:pb-10 group transition-all duration-300 gap-4 sm:gap-0">
                                        <span className="text-slate-500 dark:text-gray-400 font-light text-xl md:text-2xl italic transition-colors uppercase tracking-tight">
                                            {spec.split(':')[0]}
                                        </span>
                                        <div className={`flex items-center space-x-4 md:space-x-6 ${isRtl ? 'space-x-reverse' : ''}`}>
                                            <span className="text-slate-900 dark:text-white font-mono font-bold uppercase tracking-widest text-xs md:text-sm group-hover:text-cyber transition-colors">
                                                {spec.split(':')[1] || 'STABLE'}
                                            </span>
                                            <div className="w-2 h-2 bg-cyber rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4 space-y-8">
                            <div className="bg-primary p-10 md:p-12 relative overflow-hidden flex flex-col justify-between hud-bracket hud-bracket-tl hud-bracket-br min-h-[350px] md:min-h-[400px]">
                                <div className="relative z-10">
                                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-6 md:mb-8 leading-tight">
                                        {t('services:page.engageTitle1')} <br /> {t('services:page.engageTitle2')}
                                    </h3>
                                    <p className="text-white/70 font-light leading-relaxed mb-10 text-base md:text-lg uppercase">
                                        {t('services:page.engageSubtitle')}
                                    </p>
                                </div>
                                <Link to="/contact" className="relative z-10 w-full py-5 md:py-6 bg-white text-primary text-center font-mono font-bold tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-[11px] uppercase hover:bg-cyber hover:text-white transition-all duration-500 shadow-2xl">
                                    {t('services:page.configure')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <InteractiveTimeline
                steps={localizedProcessSteps}
                title={t('services:page.processTag')}
                subtitle={t('services:page.processTitle')}
            />

            {/* FAQ Section */}
            <FAQAccordion
                faqs={localizedFaqs}
                title={t('services:page.faqTitle')}
            />

            {/* Related Projects */}
            <section className="py-24 md:py-40 bg-white dark:bg-dark transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-[10px] md:text-xs font-mono font-bold text-secondary uppercase tracking-[0.5em] mb-4">
                            [ {t('services:page.projectsTag')} ]
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                            {t('services:page.projectsTitle')}
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {service.relatedProjects?.map((projectSlug: string) => {
                            const project = PROJECTS.find(p => p.slug === projectSlug);
                            if (!project) return null;

                            const localizedProjTitle = t(`projects:items.${project.id}.title`);
                            const localizedProjDesc = t(`projects:items.${project.id}.description`);

                            return (
                                <Link
                                    key={project.slug}
                                    to={`/projects/${project.slug}`}
                                    className="group block p-8 md:p-10 bg-slate-50 dark:bg-surface/20 border border-slate-200 dark:border-white/10 hover:border-primary transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="text-xs font-mono text-secondary uppercase tracking-widest">
                                            {project.client}
                                        </div>
                                    </div>
                                    <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">
                                        {localizedProjTitle}
                                    </h4>
                                    <p className="text-slate-600 dark:text-gray-400 mb-6 line-clamp-3">
                                        {localizedProjDesc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 border border-primary/40 text-primary text-[9px] font-black uppercase tracking-widest">
                                                {t(`projects:tags.${tag.toLowerCase()}`)}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-6 w-12 h-[2px] bg-slate-300 dark:bg-white/10 group-hover:w-full transition-all duration-500 group-hover:bg-primary" />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* GCC Map Section */}
            <section className="py-24 md:py-40 bg-slate-50 dark:bg-surface/30 border-y border-slate-200 dark:border-white/5 overflow-hidden relative transition-colors">
                <div className="absolute inset-0 grid-bg opacity-10"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16 md:mb-24">
                        <h4 className="text-[10px] md:text-[11px] font-mono font-bold text-secondary uppercase tracking-[0.6em] md:tracking-[0.8em] mb-4">[ {t('home:signalHub.tag')} ]</h4>
                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">{t('home:signalHub.title')}</h3>
                    </div>

                    <div className="relative h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden border border-white/5 shadow-2xl rounded-sm">
                        <div className="absolute inset-0 z-0">
                            <img src="/gcc-map.jpeg" alt="GCC Network Map" className="w-full h-full object-cover opacity-60 dark:opacity-80" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-surface via-transparent to-slate-50 dark:to-surface opacity-60 md:opacity-40"></div>
                            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                <div className="w-full h-[2px] bg-cyber/20 absolute top-0 animate-scanline"></div>
                            </div>
                        </div>

                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 800 600">
                            {[
                                { x: 535, y: 320, id: 'Dubai' },
                                { x: 510, y: 345, id: 'Abu Dhabi' },
                                { x: 470, y: 305, id: 'Doha' },
                                { x: 385, y: 155, id: 'Kuwait City' },
                                { x: 140, y: 360, id: 'Jeddah' },
                                { x: 620, y: 460, id: 'Muscat' }
                            ].map((node, i) => (
                                <g key={node.id}>
                                    <path d={`M 410 325 L ${node.x} ${node.y}`} stroke="currentColor" className="text-secondary/40 dark:text-cyber/30" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
                                    <circle r="3" fill="currentColor" className="text-cyber shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                                        <animateMotion dur={`${1 + i * 0.4}s`} repeatCount="indefinite" path={`M 410 325 L ${node.x} ${node.y}`} />
                                    </circle>
                                </g>
                            ))}
                        </svg>

                        <div className="absolute left-[410px] top-[325px] -translate-x-1/2 -translate-y-1/2 w-28 h-28 flex items-center justify-center z-20">
                            <div className="absolute inset-0 bg-secondary/30 rounded-full animate-pulse opacity-20"></div>
                            <div className="w-14 h-14 bg-primary border-2 border-white dark:border-dark rounded-sm flex flex-col items-center justify-center rotate-45 shadow-[0_0_40px_rgba(20,93,144,0.5)] relative overflow-hidden group">
                                <div className="absolute inset-0 bg-cyber opacity-30"></div>
                                <div className="-rotate-45 flex flex-col items-center">
                                    <span className="text-white font-mono font-bold text-[9px] leading-none tracking-tighter">RIYADH</span>
                                    <span className="text-white/70 font-mono text-[7px] mt-0.5">الرياض</span>
                                </div>
                            </div>
                        </div>

                        {[
                            { x: 'left-[535px]', y: 'top-[320px]', name: 'Dubai', ar: 'دبي' },
                            { x: 'left-[510px]', y: 'top-[345px]', name: 'Abu Dhabi', ar: 'أبوظبي' },
                            { x: 'left-[470px]', y: 'top-[305px]', name: 'Doha', ar: 'الدوحة' },
                            { x: 'left-[385px]', y: 'top-[155px]', name: 'Kuwait City', ar: 'الكويت' },
                            { x: 'left-[140px]', y: 'top-[360px]', name: 'Jeddah', ar: 'جدة' },
                            { x: 'left-[620px]', y: 'top-[460px]', name: 'Muscat', ar: 'مسقط' }
                        ].map((region) => (
                            <div key={region.name} className={`absolute ${region.x} ${region.y} -translate-x-1/2 -translate-y-1/2 group z-30 p-2 cursor-pointer`}>
                                <div className="flex flex-col items-center">
                                    <div className="w-3 h-3 bg-secondary group-hover:bg-cyber transition-all duration-300 rounded-full shadow-[0_0_20px_rgba(86,165,221,0.6)] border-2 border-white dark:border-dark group-hover:scale-125"></div>
                                    <div className={`mt-3 bg-white/95 dark:bg-surface/95 backdrop-blur-xl border border-slate-200 dark:border-white/20 px-4 py-2 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-500 min-w-[120px] shadow-2xl relative`}>
                                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/95 dark:bg-surface/95 rotate-45 border-l border-t border-slate-200 dark:border-white/20"></div>
                                        <div className="flex justify-between items-center mb-1.5 gap-4">
                                            <span className="font-mono text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-tight">{region.name}</span>
                                            <span className="font-mono text-[8px] text-primary/80 font-bold">{region.ar}</span>
                                        </div>
                                        <div className="font-mono text-[11px] font-black text-secondary group-hover:text-cyber transition-colors flex items-center justify-between border-t border-slate-100 dark:border-white/5 pt-1.5">
                                            <span className="text-[9px] text-slate-400">PING_LAT</span>
                                            <span className="text-slate-900 dark:text-white">{latencies[region.name] || '24'}ms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
