
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../../data/content';
import ImageGallery from '../../components/detail/ImageGallery';
import TechStackGrid from '../../components/detail/TechStackGrid';
// Removed AnimatedCounter import as it was unused in original file or will be unused now? 
// Actually it was imported but not used in the original snippet I viewed (or passed to a child). 
// Wait, MetricBox was defined in the file.
// I'll keep the import if it's there, but I don't see it used in the snippet I viewed (lines 1-173). 
// Ah, MetricBox is defined at the bottom.
// I'll just keep the imports as they were, adding useTranslation.

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const { t } = useTranslation(['projects', 'common']);
    const project = PROJECTS.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!project) {
            navigate('/projects');
        }
    }, [project, navigate, slug]);

    if (!project) return null;

    const nextProject = PROJECTS[(PROJECTS.indexOf(project) + 1) % PROJECTS.length];

    return (
        <div className="pt-24 md:pt-32 min-h-screen bg-white dark:bg-dark transition-colors">
            {/* Schematic Header */}
            <section className="relative py-24 md:py-40 overflow-hidden bg-slate-50 dark:bg-dark border-b border-slate-200 dark:border-white/5 transition-colors">
                <div className="absolute inset-0 grid-bg opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/5 dark:bg-primary/10 blur-[60px] md:blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link to="/projects" className="inline-flex items-center space-x-3 text-secondary text-[10px] md:text-xs font-black tracking-[0.4em] mb-10 md:mb-12 hover:-translate-x-2 transition-transform duration-300">
                        <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        <span>{t('projects:detail.backToArchives')}</span>
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
                        <div className="lg:col-span-8">
                            <div className="text-primary font-mono font-bold text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 md:mb-6">{t('projects:detail.caseStudy')} // {project.client}</div>
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight uppercase mb-8">{t(`projects:items.${project.id}.title`)}</h1>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 md:px-4 py-1 border border-primary/40 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Architecture */}
            <section className="py-24 md:py-40 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">

                        <div className="lg:col-span-8 space-y-24 md:space-y-32">
                            {/* Client Challenge */}
                            <div>
                                <h2 className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.4em] mb-10 md:mb-12 flex items-center">
                                    <span className="w-6 md:w-8 h-[1px] bg-primary mr-4"></span> 01 / {t('projects:detail.challenge')}
                                </h2>
                                <div className="p-8 md:p-10 bg-white dark:bg-surface/30 border border-slate-200 dark:border-white/5 transition-colors">
                                    <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 font-light leading-relaxed">
                                        {t(`projects:items.${project.id}.challenge`)}
                                    </p>
                                </div>
                            </div>

                            {/* Implemented Solution */}
                            <div>
                                <h2 className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.4em] mb-10 md:mb-12 flex items-center">
                                    <span className="w-6 md:w-8 h-[1px] bg-primary mr-4"></span> 02 / {t('projects:detail.solution')}
                                </h2>
                                <div className="p-8 md:p-10 bg-primary/5 border border-primary/20 corner-accent transition-colors relative">
                                    <div className="absolute -top-4 -left-4 text-[40px] font-black text-primary/10 select-none">{t('projects:detail.architecture')}</div>
                                    <p className="text-xl md:text-2xl text-slate-900 dark:text-white font-medium leading-relaxed mb-8 relative z-10 uppercase tracking-tight">
                                        {t(`projects:items.${project.id}.solution`)}
                                    </p>
                                    <p className="text-base md:text-xl text-slate-600 dark:text-gray-400 font-light leading-relaxed relative z-10">
                                        {t(`projects:items.${project.id}.longDescription`)}
                                    </p>
                                </div>
                            </div>

                            {/* Impact Metrics */}
                            <div>
                                <h2 className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.4em] mb-10 md:mb-12 flex items-center">
                                    <span className="w-6 md:w-8 h-[1px] bg-primary mr-4"></span> 03 / {t('projects:detail.impact')}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-slate-200 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                                    <MetricBox label={t('projects:detail.metrics.efficiency')} value="99.9%" />
                                    <MetricBox label={t('projects:detail.metrics.uptime')} value="100%" />
                                    <MetricBox label={t('projects:detail.metrics.latency')} value="40%" />
                                </div>
                            </div>
                        </div>

                        {/* Technical Specifications Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-40 space-y-8 md:space-y-12">
                                <div className="p-8 md:p-10 bg-slate-900 dark:bg-black text-white space-y-8 hud-bracket hud-bracket-tl hud-bracket-br">
                                    <h5 className="text-[10px] font-mono font-bold text-secondary uppercase tracking-[0.3em]">{t('projects:detail.techSpecs')}</h5>
                                    <ul className="space-y-6">
                                        {[
                                            t('projects:detail.tech_items.distributed'),
                                            t('projects:detail.tech_items.encryption'),
                                            t('projects:detail.tech_items.zeroTrust'),
                                            t('projects:detail.tech_items.telemetry'),
                                            t('projects:detail.tech_items.pci')
                                        ].map(item => (
                                            <li key={item} className="flex items-start space-x-4">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0"></div>
                                                <span className="text-[11px] font-bold uppercase tracking-tight">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Visual Representation Graphic */}
                                <div className="hidden md:flex aspect-square bg-white dark:bg-dark border border-slate-200 dark:border-white/5 items-center justify-center transition-colors relative overflow-hidden">
                                    <div className="absolute inset-0 grid-bg opacity-10"></div>
                                    <div className="w-3/4 h-3/4 border-2 border-primary/20 animate-pulse flex items-center justify-center">
                                        <div className="w-1/2 h-1/2 border border-secondary/20 rotate-45"></div>
                                        <span className="absolute text-[80px] font-black text-slate-100 dark:text-white/5 uppercase select-none">{project.client.charAt(0)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Image Gallery Section */}
            {project.gallery && project.gallery.length > 0 && (
                <ImageGallery
                    images={project.gallery}
                    title={t('projects:detail.projectShowcase')}
                />
            )}

            {/* Tech Stack Section */}
            {project.techStack && project.techStack.length > 0 && (
                <TechStackGrid
                    techStack={project.techStack}
                    title={t('projects:detail.techUsed')}
                />
            )}

            {/* CTA Next Project */}
            <section className="py-24 md:py-40 bg-slate-50 dark:bg-dark border-t border-slate-200 dark:border-white/5 transition-colors">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h3 className="text-[10px] md:text-xs font-mono font-bold text-secondary uppercase tracking-[0.5em] mb-12">[ {t('projects:detail.nextDeployment')} ]</h3>
                    <Link to={`/projects/${nextProject.slug}`} className="group inline-block">
                        <h4 className="text-3xl sm:text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter uppercase group-hover:text-primary transition-all duration-700 leading-tight">
                            {t(`projects:items.${nextProject.id}.title`)}
                        </h4>
                        <div className="mt-12 w-24 h-[2px] bg-slate-300 dark:bg-white/10 mx-auto group-hover:w-full transition-all duration-700 group-hover:bg-primary"></div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

const MetricBox: React.FC<{ label: string, value: string }> = ({ label, value }) => (
    <div className="p-8 md:p-12 bg-white dark:bg-dark transition-colors text-center">
        <div className="text-4xl md:text-5xl font-black text-secondary mb-4 tracking-tighter">{value}</div>
        <div className="text-[9px] md:text-[10px] text-slate-500 dark:text-gray-500 uppercase tracking-widest font-mono font-bold">{label}</div>
    </div>
);

export default ProjectDetail;
