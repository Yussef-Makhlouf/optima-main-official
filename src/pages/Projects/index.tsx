import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../../data/content';
import { Icons } from '../../data/content';
import TechMarquee from '../../components/common/TechMarquee';
import { TECHNOLOGIES } from '../../data/content-marquee';
import BrandDecoration from '../../components/common/BrandDecoration';


const Projects: React.FC = () => {
    const { t } = useTranslation(['projects']);

    return (
        <div className="pt-32 min-h-screen bg-white dark:bg-dark transition-colors">
            {/* Banner */}
            <section className="py-24 bg-slate-50 dark:bg-dark relative overflow-hidden grid-bg border-b border-slate-200 dark:border-white/5 transition-colors">
                <BrandDecoration />
                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 uppercase transition-colors">{t('projects:page.title')}</h1>
                    <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl font-light transition-colors">
                        {t('projects:page.description')}
                    </p>
                </div>
            </section>

            {/* Project Grid */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {PROJECTS.map((project, index) => (
                            <DetailedProjectCard key={project.id} {...project} index={index} t={t} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Marquee */}
            <TechMarquee technologies={TECHNOLOGIES} speed="normal" />

            {/* Industry Focus */}
            <section className="py-32 bg-slate-50 dark:bg-surface transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20">
                        <h2 className="text-xs uppercase tracking-[0.4em] font-black text-primary mb-6">{t('projects:page.verticals.tag')}</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase transition-colors">{t('projects:page.verticals.title')}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 border-l-2 border-primary bg-white dark:bg-dark/30 transition-colors">
                            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase transition-colors">{t('projects:page.verticals.finance.title')}</h4>
                            <p className="text-slate-500 dark:text-gray-400 text-sm font-light leading-relaxed transition-colors">{t('projects:page.verticals.finance.description')}</p>
                        </div>
                        <div className="p-8 border-l-2 border-primary bg-white dark:bg-dark/30 transition-colors">
                            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase transition-colors">{t('projects:page.verticals.biotech.title')}</h4>
                            <p className="text-slate-500 dark:text-gray-400 text-sm font-light leading-relaxed transition-colors">{t('projects:page.verticals.biotech.description')}</p>
                        </div>
                        <div className="p-8 border-l-2 border-primary bg-white dark:bg-dark/30 transition-colors">
                            <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 uppercase transition-colors">{t('projects:page.verticals.logistics.title')}</h4>
                            <p className="text-slate-500 dark:text-gray-400 text-sm font-light leading-relaxed transition-colors">{t('projects:page.verticals.logistics.description')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const DetailedProjectCard: React.FC<{ id: string, slug: string, client: string, tags: string[], index: number, t: any }> = ({ id, slug, client, tags, index, t }) => {
    // Helper to format tag key (e.g. "Web App" -> "web-app")
    const getTagKey = (tag: string) => tag.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className={`group flex flex-col ${index % 2 !== 0 ? 'lg:mt-24' : ''}`}>
            <Link to={`/projects/${slug}`} className="block">
                <div className="relative aspect-video bg-slate-100 dark:bg-dark mb-8 overflow-hidden border border-slate-200 dark:border-white/5 transition-colors corner-accent group-hover:shadow-2xl group-hover:shadow-primary/20">
                    <img src="/web-development2.png" alt={client} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 grid-bg opacity-30 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

                    <div className="absolute bottom-6 left-6 flex gap-2 z-10">
                        {tags.map(tag => (
                            <span key={tag} className="text-[10px] font-black text-white bg-primary/90 backdrop-blur-sm px-3 py-1 uppercase tracking-widest">{t(`projects:tags.${getTagKey(tag)}`)}</span>
                        ))}
                    </div>
                </div>
            </Link>
            <div className="space-y-4">
                <div className="text-[11px] font-black text-secondary uppercase tracking-[0.4em]">{client}</div>
                <Link to={`/projects/${slug}`}>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase group-hover:text-primary transition-colors duration-300 leading-tight">{t(`projects:items.${id}.title`)}</h3>
                </Link>
                <p className="text-slate-500 dark:text-gray-400 text-lg font-light leading-relaxed transition-colors">
                    {t(`projects:items.${id}.longDescription`)}
                </p>
                <Link to={`/projects/${slug}`} className="inline-flex items-center space-x-3 text-xs font-black tracking-[0.2em] text-slate-900 dark:text-white pt-4 group-hover:translate-x-2 transition-all duration-500 uppercase">
                    <span>{t('projects:page.viewProject')}</span>
                    <Icons.ArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default Projects;
