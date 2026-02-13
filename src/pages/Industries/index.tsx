import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Icons, PROJECTS } from '../../data/content';
import BrandDecoration from '../../components/common/BrandDecoration';
import InteractiveOrbs from '../../components/common/InteractiveOrbs';
import InteractiveSphere from '../../components/common/InteractiveSphere';

// Industry data with all 8 industries from locale
const INDUSTRIES = [
    {
        key: 'construction',
        icon: <Icons.Construction />,
        gradient: 'from-amber-500 to-orange-600',
        accentColor: '#F59E0B',
    },
    {
        key: 'realestate',
        icon: <Icons.RealEstate />,
        gradient: 'from-emerald-500 to-teal-600',
        accentColor: '#10B981',
    },
    {
        key: 'sports',
        icon: <Icons.Sports />,
        gradient: 'from-rose-500 to-pink-600',
        accentColor: '#F43F5E',
    },
    {
        key: 'ai',
        icon: <Icons.Technology />,
        gradient: 'from-violet-500 to-purple-600',
        accentColor: '#8B5CF6',
    },
    {
        key: 'marketing',
        icon: <Icons.Marketing />,
        gradient: 'from-cyan-500 to-blue-600',
        accentColor: '#06B6D4',
    },
    {
        key: 'healthcare',
        icon: <Icons.Healthcare />,
        gradient: 'from-red-500 to-rose-600',
        accentColor: '#EF4444',
    },
    {
        key: 'education',
        icon: <Icons.Education />,
        gradient: 'from-indigo-500 to-blue-600',
        accentColor: '#6366F1',
    },
    {
        key: 'ecommerce',
        icon: <Icons.Ecommerce />,
        gradient: 'from-lime-500 to-green-600',
        accentColor: '#84CC16',
    },
];

// Statistics data
const STATS = [
    { key: 'stats.projects', value: '150+', suffix: '' },
    { key: 'stats.clients', value: '50+', suffix: '' },
    { key: 'stats.experience', value: '8+', suffix: ' years' },
    { key: 'stats.satisfaction', value: '98', suffix: '%' },
];

// Related projects for each industry
const INDUSTRY_PROJECTS: Record<string, string[]> = {
    construction: ['raf-construction', 'ghonfa-interior'],
    sports: ['uae-mma-federation'],
    ai: ['technova-ai'],
    marketing: ['golden-moon-agency'],
    realestate: [],
    healthcare: [],
    education: [],
    ecommerce: [],
};

const Industries: React.FC = () => {
    const { t, i18n } = useTranslation(['industries', 'common']);
    const isRTL = i18n.language === 'ar';
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        industry: '',
        message: '',
    });

    // SEO Meta tags - Update document head
    useEffect(() => {
        // Update page title
        document.title = `${t('industries:page.title')} | OPTIMA Solutions`;

        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.name = 'description';
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', t('industries:page.seo.description'));

        // Add keywords meta tag
        let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', t('industries:page.seo.keywords'));

        // Open Graph tags
        const ogTags = [
            { property: 'og:title', content: `${t('industries:page.title')} | OPTIMA Solutions` },
            { property: 'og:description', content: t('industries:page.seo.description') },
            { property: 'og:type', content: 'website' },
        ];

        ogTags.forEach(tag => {
            let el = document.querySelector(`meta[property="${tag.property}"]`) as HTMLMetaElement | null;
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute('property', tag.property);
                document.head.appendChild(el);
            }
            el.setAttribute('content', tag.content);
        });

        return () => {
            // Cleanup is handled by React but we restore default title on unmount
            document.title = 'OPTIMA Solutions | Digital Infrastructure';
        };
    }, [t, i18n.language]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(t('contact:form.successMessage'));
    };

    return (
        <div className="pt-24 md:pt-32 min-h-screen transition-colors bg-white dark:bg-dark">
            {/* Page Header - Redesigned */}
            <section className="py-24 md:py-40 relative overflow-hidden grid-bg border-b border-slate-200 dark:border-white/5">
                <BrandDecoration />

                {/* Background Effects */}
                <div className="absolute inset-0 opacity-30 pointer-events-none hidden lg:block">
                    <InteractiveSphere />
                </div>

                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''} space-x-4 mb-10`}>
                        <div className="w-12 h-[1px] bg-secondary"></div>
                        <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-[0.6em]">{t('industries:page.tag')}</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-tight uppercase">
                        {t('industries:page.title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-cyber bg-[length:200%_auto] animate-[gradient:8s_linear_infinite]">
                            {t('industries:page.titleHighlight')}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 max-w-3xl font-light leading-relaxed border-l-4 border-cyber pl-8">
                        {t('industries:page.description')}
                    </p>
                </div>

                {/* Decorative Background Text */}
                <div className="absolute bottom-0 right-0 p-10 opacity-5 hidden lg:block">
                    <div className="text-[150px] font-black text-primary select-none rotate-90 origin-bottom-right uppercase">
                        {t('industries:page.title')}
                    </div>
                </div>
            </section>

            {/* Statistics Section - Redesigned */}
            <section className="py-20 md:py-28 bg-slate-50 dark:bg-black/50 border-b border-slate-200 dark:border-white/5 relative overflow-hidden">
                {/* Decorative gradient orbs */}
                <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {STATS.map((stat, index) => (
                            <div key={index} className="text-center group relative">
                                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                                <div className="relative">
                                    <div className="text-5xl md:text-6xl font-black text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm md:text-base font-mono text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                                        {t(`industries:${stat.key}`)}{stat.suffix}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Sections - Redesigned */}
            <section className="py-24 md:py-40">
                <div className="max-w-7xl mx-auto px-6 space-y-32 md:space-y-48">
                    {INDUSTRIES.map((industry, index) => (
                        <IndustryBlock
                            key={industry.key}
                            industryKey={industry.key}
                            icon={industry.icon}
                            gradient={industry.gradient}
                            accentColor={industry.accentColor}
                            isReversed={index % 2 === 1}
                            relatedProjects={INDUSTRY_PROJECTS[industry.key] || []}
                        />
                    ))}
                </div>
            </section>

            {/* Case Studies / Success Stories Section - Redesigned */}
            <section className="py-24 md:py-40 bg-slate-50 dark:bg-black/50 border-y border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 md:mb-24">
                        <div className={`flex items-center justify-center space-x-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                            <div className="w-16 h-[1px] bg-secondary"></div>
                            <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-[0.4em]">
                                {t('industries:caseStudies.tag')}
                            </span>
                            <div className="w-16 h-[1px] bg-secondary"></div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-6">
                            {t('industries:caseStudies.title')}
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
                            {t('industries:caseStudies.description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.slice(0, 6).map((project) => (
                            <div
                                key={project.id}
                                className="group relative bg-white dark:bg-black border border-slate-200 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100 dark:bg-white/5">
                                    {project.gallery?.[0] ? (
                                        <img
                                            src={project.gallery[0].url}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                                            <Icons.WebDev />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {project.tags.slice(0, 2).map((tag, i) => (
                                                <span key={i} className="text-[10px] font-mono uppercase tracking-wider bg-white/20 backdrop-blur-sm text-white px-2 py-1">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase mb-2 group-hover:text-primary transition-colors">
                                        {project.client}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-gray-400 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    <Link
                                        to={`/projects/${project.slug}`}
                                        className={`inline-flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
                                    >
                                        {t('common:nav.projects')}
                                        <svg className={`w-4 h-4 ml-1 ${isRTL ? 'mr-1 ml-0 rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>

                                {/* HUD Corner Decorations */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link
                            to="/projects"
                            className="inline-flex items-center bg-slate-900 dark:bg-white text-white dark:text-black px-8 py-4 font-black uppercase tracking-[0.2em] hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-300"
                        >
                            {t('industries:caseStudies.viewAll')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Benefits Section - Redesigned */}
            <section className="py-24 md:py-40 relative overflow-hidden">
                {/* Background orbs */}
                <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none z-0 hidden lg:block">
                    <InteractiveOrbs />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <div>
                            <div className={`flex items-center space-x-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                <div className="w-12 h-[1px] bg-secondary"></div>
                                <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-[0.4em]">
                                    {t('industries:benefits.tag')}
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-8">
                                {t('industries:benefits.title')}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-gray-400 mb-10 font-light leading-relaxed">
                                {t('industries:benefits.description')}
                            </p>

                            <div className="space-y-6">
                                {[
                                    'benefits.points.0',
                                    'benefits.points.1',
                                    'benefits.points.2',
                                    'benefits.points.3',
                                ].map((key, index) => (
                                    <div key={index} className={`flex items-start group ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-1 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <Icons.Check />
                                        </div>
                                        <div className="ml-4 group-hover:translate-x-2 transition-transform duration-300">
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                                                {t(`industries:${key}.title`)}
                                            </h4>
                                            <p className="text-sm text-slate-500 dark:text-gray-400">
                                                {t(`industries:${key}.text`)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-sm blur-2xl"></div>
                            <div className="relative bg-white dark:bg-black border border-slate-200 dark:border-white/10 p-8 md:p-12">
                                {/* Decorative HUD corners */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/50"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-secondary/50"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-secondary/50"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary/50"></div>

                                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-8 text-center">
                                    {t('industries:benefits.ctaTitle')}
                                </h3>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="group space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-primary transition-colors">
                                                {t('contact:form.nameLabel')}
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-all font-mono text-sm"
                                                value={formState.name}
                                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="group space-y-2">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-primary transition-colors">
                                                {t('contact:form.emailLabel')}
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-all font-mono text-sm"
                                                value={formState.email}
                                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="group space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-primary transition-colors">
                                            {t('contact:form.companyLabel')}
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-all font-mono text-sm"
                                            value={formState.company}
                                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                        />
                                    </div>

                                    <div className="group space-y-2">
                                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-focus-within:text-primary transition-colors">
                                            {t('industries:benefits.industryLabel')}
                                        </label>
                                        <select
                                            className="w-full bg-slate-50 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 p-3 text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-all font-mono text-sm appearance-none cursor-pointer"
                                            value={formState.industry}
                                            onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                                        >
                                            <option value="">{t('industries:benefits.selectIndustry')}</option>
                                            {INDUSTRIES.map((ind) => (
                                                <option key={ind.key} value={ind.key}>
                                                    {t(`industries:${ind.key}.title`)}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full group relative overflow-hidden bg-slate-900 dark:bg-white text-white dark:text-black py-4 font-black uppercase tracking-[0.2em] hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all duration-500"
                                    >
                                        <span className="relative z-10 flex items-center justify-center">
                                            {t('industries:benefits.submit')}
                                        </span>
                                        <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Creative CTA Banner - Completely Redesigned */}
            <CreativeCTABanner />
        </div>
    );
};

// Creative CTA Banner Component
const CreativeCTABanner: React.FC = () => {
    const { t } = useTranslation(['industries', 'common']);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-32 md:py-48 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-dark dark:via-slate-900 dark:to-dark">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 grid-bg opacity-20"></div>

            {/* Decorative Data Streams */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent animate-[slide_3s_infinite]"></div>
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-[slide_4s_infinite_1s]"></div>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-[slide_5s_infinite_0.5s]"></div>
            </div>

            {/* Floating Orb Effects */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <div className="inline-flex items-center space-x-4 mb-8 justify-center">
                    <div className="w-12 h-[1px] bg-secondary"></div>
                    <span className="text-[10px] font-black text-secondary uppercase tracking-[0.6em]">{t('industries:cta.tag')}</span>
                    <div className="w-12 h-[1px] bg-secondary"></div>
                </div>

                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase transition-colors leading-tight">
                    {t('industries:cta.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-cyber">{t('industries:cta.titleHighlight')}</span>
                </h2>

                <p className="text-xl text-gray-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
                    {t('industries:cta.description')}
                </p>

                {/* Interactive CTA Button */}
                <div
                    className="relative inline-block"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Link to="/contact">
                        <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
                            {/* Rotating Outer Rings */}
                            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-primary/50 transition-colors"></div>
                            <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed group-hover:border-secondary/50 transition-colors"></div>
                            <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>

                            {/* Inner Core */}
                            <div className="absolute inset-16 bg-gradient-to-br from-primary to-secondary border border-white/20 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110 shadow-2xl shadow-primary/30">
                                <div className="absolute inset-0 grid-bg opacity-30"></div>
                                <div className="flex flex-col items-center z-10 space-y-3">
                                    <div className={`text-5xl transition-all duration-500 ${isHovered ? 'text-white scale-125' : 'text-white/60'}`}>
                                        <Icons.Network />
                                    </div>
                                    <span className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${isHovered ? 'text-white' : 'text-white/80'}`}>
                                        {isHovered ? t('industries:cta.button.initialize') : t('industries:cta.button.connect')}
                                    </span>
                                </div>
                            </div>

                            {/* Hover Glow */}
                            <div className={`absolute inset-0 rounded-full bg-primary/30 blur-3xl transition-opacity duration-700 ${isHovered ? 'opacity-60' : 'opacity-0'}`}></div>
                        </div>
                    </Link>

                    {/* Technical Labels */}
                    <div className="absolute top-1/2 -left-28 transform -translate-y-1/2 text-[9px] font-mono text-white/20 text-right hidden md:block">
                        <div>SECURE_LINK</div>
                        <div>ENCRYPTION_ON</div>
                        <div>24/7_SUPPORT</div>
                    </div>
                    <div className="absolute top-1/2 -right-28 transform -translate-y-1/2 text-[9px] font-mono text-white/20 text-left hidden md:block">
                        <div>PORT_443</div>
                        <div>JIT_ACCESS</div>
                        <div>SSL_TLS</div>
                    </div>
                </div>

                {/* Secondary CTA */}
                <div className="mt-16">
                    <Link
                        to="/projects"
                        className="inline-flex items-center text-white/60 hover:text-white text-sm font-bold uppercase tracking-[0.3em] transition-colors duration-300 group"
                    >
                        <span>{t('industries:cta.projects')}</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </section>
    );
};

interface IndustryBlockProps {
    industryKey: string;
    icon: React.ReactNode;
    gradient: string;
    accentColor: string;
    isReversed: boolean;
    relatedProjects: string[];
}

const IndustryBlock: React.FC<IndustryBlockProps> = ({
    industryKey,
    icon,
    gradient,
    accentColor,
    isReversed,
    relatedProjects
}) => {
    const { t } = useTranslation(['industries', 'common']);
    const { i18n } = useTranslation('common');
    const isRTL = i18n.language === 'ar';

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start group">
            <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : ''}`}>
                <div className={`flex flex-col md:flex-row items-start md:items-center ${isRTL ? 'md:flex-row-reverse' : ''} space-y-4 md:space-y-0 md:space-x-6 mb-8`}>
                    <div
                        className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${gradient} flex items-center justify-center text-white border-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                        {icon}
                    </div>
                    <div>
                        <span
                            className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] mb-2 block"
                            style={{ color: accentColor }}
                        >
                            {t(`industries:${industryKey}.tag`)}
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-tight group-hover:text-primary transition-colors">
                            {t(`industries:${industryKey}.title`)}
                        </h2>
                    </div>
                </div>

                <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 font-light leading-relaxed mb-10 border-l-2 pl-6 transition-colors" style={{ borderColor: accentColor }}>
                    {t(`industries:${industryKey}.description`)}
                </p>

                <div className="space-y-6">
                    {[
                        `industries:${industryKey}.points.0`,
                        `industries:${industryKey}.points.1`,
                        `industries:${industryKey}.points.2`,
                    ].map((key, index) => (
                        <div key={index} className="group/point relative pl-8">
                            <div
                                className="absolute left-0 top-2 w-3 h-3 rounded-full"
                                style={{ backgroundColor: accentColor }}
                            ></div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight group-hover/point:translate-x-2 transition-transform">
                                {t(`${key}.title`)}
                            </h4>
                            <p className="text-base text-slate-500 dark:text-gray-500 font-light leading-relaxed">
                                {t(`${key}.text`)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Related Projects Link */}
                {relatedProjects.length > 0 && (
                    <div className="mt-10 pt-8 border-t border-slate-200 dark:border-white/10">
                        <Link
                            to="/projects"
                            className={`inline-flex items-center text-sm font-bold uppercase tracking-wider transition-colors hover:gap-2 group/link ${isRTL ? 'flex-row-reverse' : ''}`}
                            style={{ color: accentColor }}
                        >
                            {t('industries:page.relatedProjects')}
                            <svg className={`w-4 h-4 ml-1 ${isRTL ? 'mr-1 ml-0 rotate-180' : ''} group-hover/link:translate-x-1 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>

            <div className={`lg:col-span-7 aspect-square md:aspect-[4/3] lg:aspect-square bg-slate-50 dark:bg-dark/40 border border-slate-200 dark:border-white/5 relative flex items-center justify-center overflow-hidden group-hover:border-primary/30 transition-colors duration-500 ${isReversed ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 grid-bg opacity-20"></div>

                {/* Abstract Visual */}
                <AbstractVisual type={industryKey} accentColor={accentColor} />

                {/* Corner Label */}
                <div className="absolute top-4 left-4 text-[10px] font-mono text-primary/40 uppercase tracking-widest hidden md:block">
                    SECTOR :: {industryKey.toUpperCase().substring(0, 4)}
                </div>

                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        </div>
    );
};

const AbstractVisual: React.FC<{ type: string; accentColor: string }> = ({ type, accentColor }) => {
    const colors = {
        primary: '#145D90',
        secondary: '#56A5DD',
        accent: accentColor,
    };

    return (
        <div className="w-full h-full flex items-center justify-center p-8">
            <svg className="w-4/5 h-4/5" viewBox="0 0 400 400" fill="none">
                <defs>
                    <linearGradient id={`grad-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={colors.accent} stopOpacity="0.8" />
                        <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.2" />
                    </linearGradient>
                </defs>

                {type === 'construction' && (
                    <>
                        <rect x="50" y="200" width="300" height="150" stroke={colors.accent} strokeWidth="1" opacity="0.3" />
                        <rect x="100" y="150" width="200" height="200" stroke={colors.accent} strokeWidth="1" opacity="0.3" />
                        <rect x="150" y="100" width="100" height="250" stroke={colors.accent} strokeWidth="1" opacity="0.3" fill={`${colors.accent}10`} />
                        <line x1="50" y1="350" x2="350" y2="350" stroke={colors.accent} strokeWidth="2" />
                        <line x1="50" y1="200" x2="350" y2="200" stroke={colors.primary} strokeWidth="0.5" strokeDasharray="5 5" />
                        <text x="60" y="380" fontSize="10" fill={colors.primary} className="font-mono uppercase opacity-50">CONSTRUCT::VECTOR</text>
                    </>
                )}

                {type === 'realestate' && (
                    <>
                        <path d="M50 350 L200 150 L350 350 Z" stroke={colors.accent} strokeWidth="1" opacity="0.3" />
                        <rect x="80" y="250" width="80" height="100" stroke={colors.accent} strokeWidth="1" opacity="0.3" fill={`${colors.accent}10`} />
                        <rect x="180" y="200" width="80" height="150" stroke={colors.accent} strokeWidth="1" opacity="0.3" fill={`${colors.accent}10`} />
                        <rect x="280" y="180" width="60" height="170" stroke={colors.accent} strokeWidth="1" opacity="0.3" fill={`${colors.accent}10`} />
                        <line x1="50" y1="350" x2="350" y2="350" stroke={colors.accent} strokeWidth="2" />
                        <text x="60" y="380" fontSize="10" fill={colors.primary} className="font-mono uppercase opacity-50">PROPERTY::GRID</text>
                    </>
                )}

                {type === 'sports' && (
                    <>
                        <circle cx="200" cy="200" r="120" stroke={colors.accent} strokeWidth="1" opacity="0.3" />
                        <circle cx="200" cy="200" r="80" stroke={colors.accent} strokeWidth="1" opacity="0.3" />
                        <circle cx="200" cy="200" r="40" stroke={colors.accent} strokeWidth="2" opacity="0.5" fill={`${colors.accent}10`} />
                        <line x1="80" y1="200" x2="320" y2="200" stroke={colors.primary} strokeWidth="0.5" strokeDasharray="5 5" />
                        <line x1="200" y1="80" x2="200" y2="320" stroke={colors.primary} strokeWidth="0.5" strokeDasharray="5 5" />
                        <text x="60" y="380" fontSize="10" fill={colors.primary} className="font-mono uppercase opacity-50">ARENA::STADIUM</text>
                    </>
                )}

                {type === 'ai' && (
                    <>
                        <circle cx="200" cy="200" r="30" stroke={colors.accent} strokeWidth="2" className="animate-pulse" />
                        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                            <React.Fragment key={i}>
                                <circle
                                    cx={200 + 100 * Math.cos(angle * Math.PI / 180)}
                                    cy={200 + 100 * Math.sin(angle * Math.PI / 180)}
                                    r="8"
                                    fill={colors.accent}
                                    opacity="0.5"
                                    className="animate-pulse"
                                    style={{ animationDelay: `${i * 0.2}s` }}
                                />
                                <line
                                    x1={200 + 30 * Math.cos(angle * Math.PI / 180)}
                                    y1={200 + 30 * Math.sin(angle * Math.PI / 180)}
                                    x2={200 + 100 * Math.cos(angle * Math.PI / 180)}
                                    y2={200 + 100 * Math.sin(angle * Math.PI / 180)}
                                    stroke={colors.accent}
                                    strokeWidth="0.5"
                                    opacity="0.3"
                                />
                            </React.Fragment>
                        ))}
                        <text x="60" y="380" fontSize="10" fill={colors.primary} className="font-mono uppercase opacity-50">NEURAL::NETWORK</text>
                    </>
                )}

                {type === 'marketing' && (
                    <>
                        {[50, 100, 150, 200, 250, 300, 350].map((y, i) => (
                            <line
                                key={i}
                                x1="50"
                                y1={y}
                                x2="350"
                                y2={y}
                                stroke={colors.accent}
                                strokeWidth={i === 3 ? 2 : 0.5}
                                opacity={i === 3 ? 0.8 : 0.2}
                            />
                        ))}
                        {[50, 100, 150, 200, 250, 300, 350].map((x, i) => (
                            <line
                                key={i}
                                x1={x}
                                y1="50"
                                x2={x}
                                y2="350"
                                stroke={colors.accent}
                                strokeWidth={i === 3 ? 2 : 0.5}
                                opacity={i === 3 ? 0.8 : 0.2}
                            />
                        ))}
                        <circle cx="200" cy="200" r="25" stroke={colors.accent} strokeWidth="2" fill={`${colors.accent}20`} />
                        <text x="60" y="380" fontSize="10" fill={colors.primary} className="font-mono uppercase opacity-50">DIGITAL::MATRIX</text>
                    </>
                )}

                {type === 'healthcare' && (
                    <>
                        <path d="M200 80 L280 320 L120 320 Z" stroke={colors.accent} strokeWidth="1" opacity="0.3" fill={`${colors.accent}10`} />
                        <line x1="150" y1="250" x2="250" y2="250" stroke={colors.accent} strokeWidth="2" />
                        <line x1="165" y1="220" x2="235" y2="220" stroke={colors.accent} strokeWidth="2" />
                        <line x1="180" y1="190" x2="220" y2="190" stroke={colors.accent} strokeWidth="2" />
                        <path d="M180 160 Q200 140 220 160" stroke={colors.accent} strokeWidth="2" fill="none" />
                        <text x="60" y="380" fontSize="10" fill={colors.primary} className="font-mono uppercase opacity-50">MEDICAL::CARE</text>
                    </>
                )}

                {type === 'education' && (
                    <>
                        <path d="M200 50 L200 150 M200 150 L150 250 M200 150 L250 250" stroke={colors.accent} strokeWidth="2" opacity="0.5" />
                        <circle cx="200" cy="50" r="20" stroke={colors.accent} strokeWidth="1" fill={`${colors.accent}20`} />
                        <circle cx="150" cy="250" r="15" stroke={colors.accent} strokeWidth="1" fill={`${colors.accent}10`} />
                        <circle cx="250" cy="250" r="15" stroke={colors.accent} strokeWidth="1" fill={`${colors.accent}10`} />
                        <rect x="50" y="300" width="300" height="40" stroke={colors.primary} strokeWidth="0.5" opacity="0.3" />
                        <text x="60" y="380" fontSize="10" fill={colors.primary} className="font-mono uppercase opacity-50">KNOWLEDGE::TREE</text>
                    </>
                )}

                {type === 'ecommerce' && (
                    <>
                        <rect x="100" y="100" width="200" height="200" stroke={colors.accent} strokeWidth="1" opacity="0.3" fill={`${colors.accent}10`} />
                        <rect x="120" y="130" width="160" height="30" stroke={colors.accent} strokeWidth="1" opacity="0.5" />
                        <rect x="120" y="180" width="160" height="20" stroke={colors.accent} strokeWidth="1" opacity="0.3" />
                        <rect x="120" y="220" width="100" height="20" stroke={colors.accent} strokeWidth="1" opacity="0.3" />
                        <path d="M240 220 L280 220 L280 260 L240 260 Z" stroke={colors.accent} strokeWidth="1" fill={`${colors.accent}30`} />
                        <circle cx="260" cy="240" r="8" stroke={colors.accent} strokeWidth="1" />
                        <text x="60" y="380" fontSize="10" fill={colors.primary} className="font-mono uppercase opacity-50">STORE::FRONT</text>
                    </>
                )}
            </svg>
        </div>
    );
};

export default Industries;
