
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import projectsData from '../../data/projects.json';
import BrandDecoration from '../../components/common/BrandDecoration';
import TechRadar from '../../components/detail/TechRadar';
import DeviceShowcase from '../../components/detail/DeviceShowcase';
import ScreenshotViewer from '../../components/detail/ScreenshotViewer';

// Import WebGL interactive graphics
import InteractiveSphere from '../../components/common/InteractiveSphere';
import InteractiveTorus from '../../components/common/InteractiveTorus';
import InteractiveCrystal from '../../components/common/InteractiveCrystal';
import InteractiveOrbs from '../../components/common/InteractiveOrbs';

// Map github projects with full analyzed datasets
const GITHUB_PROJECTS = projectsData.repos.filter((repo: any) => 
    repo.analysis && 
    repo.analysis.tech_stack && 
    repo.analysis.tech_stack.length > 0 &&
    repo.name !== 'Mac' &&
    repo.name !== 'optima-studio-generate-content'
).map((repo: any) => ({
    id: repo.name,
    slug: repo.name,
    client: repo.name.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    title: repo.description || '',
    longDescription: repo.analysis.portfolio_summary || repo.description || '',
    challenge: repo.description || '',
    solution: repo.analysis.problem_solved || '',
    strengths: repo.analysis.strengths || [],
    techStack: repo.analysis.tech_stack || [],
    stars: repo.stars || 0,
    forks: repo.forks || 0,
    watchers: repo.watchers || 0,
    issues: repo.open_issues || 0,
    size_kb: repo.size_kb || 0,
    default_branch: repo.default_branch || 'main',
    category: repo.category || 'Web App',
    language: repo.language || 'TypeScript',
    homepage: repo.homepage || '',
    clone_url: repo.clone_url || '',
    html_url: repo.url || repo.html_url || ''
}));

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const { t } = useTranslation(['projects', 'common']);
    const project = GITHUB_PROJECTS.find(p => p.slug === slug);

    const [copied, setCopied] = useState(false);
    const [systemTelemetry, setSystemTelemetry] = useState({ cpu: 12, temp: 42 });

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!project) {
            navigate('/projects');
        }

        // Live telemetry simulations
        const interval = setInterval(() => {
            setSystemTelemetry({
                cpu: Math.floor(Math.random() * 25) + 5,
                temp: Math.floor(Math.random() * 10) + 38
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [project, navigate, slug]);

    if (!project) return null;

    const nextProject = GITHUB_PROJECTS[(GITHUB_PROJECTS.indexOf(project) + 1) % GITHUB_PROJECTS.length];

    const handleCopyClone = () => {
        if (project.clone_url) {
            navigator.clipboard.writeText(`git clone ${project.clone_url}`);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="pt-24 md:pt-32 min-h-screen bg-white dark:bg-dark transition-colors overflow-hidden">
            {/* Schematic Header */}
            <section className="relative py-24 md:py-40 overflow-hidden bg-slate-50 dark:bg-dark border-b border-slate-200 dark:border-white/5 transition-colors">
                <div className="absolute inset-0 grid-bg opacity-30"></div>
                <BrandDecoration />

                {/* 3D WebGL background shape matching category */}
                <div className="absolute inset-0 z-0 opacity-40 pointer-events-none flex items-center justify-center">
                    {project.category === 'Frontend' && <InteractiveSphere />}
                    {project.category === 'Backend' && <InteractiveTorus />}
                    {project.category === 'Full Stack' && <InteractiveCrystal />}
                    {!['Frontend', 'Backend', 'Full Stack'].includes(project.category) && <InteractiveOrbs />}
                </div>

                {/* Radial Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/5 dark:bg-primary/10 blur-[60px] md:blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <Link to="/projects" className="inline-flex items-center space-x-3 text-secondary text-[10px] md:text-xs font-black tracking-[0.4em] mb-10 md:mb-12 hover:-translate-x-2 transition-transform duration-300">
                        <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        <span>{t('projects:detail.backToArchives')}</span>
                    </Link>

                    {/* HUD Coordinates Display */}
                    <div className="absolute top-10 right-6 text-right font-mono text-[9px] text-secondary/60 hidden md:block">
                        <div>PORT: 3000 // LOC: GCC_NODE</div>
                        <div>SYS_CPU: {systemTelemetry.cpu}% // TEMP: {systemTelemetry.temp}°C</div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-end">
                        <div className="lg:col-span-8">
                            <div className="text-primary font-mono font-bold text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 md:mb-6">
                                {t('projects:detail.caseStudy')} // {project.category}
                            </div>
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-tight uppercase mb-8">
                                {t(`projects:items.${project.id}.title`, { defaultValue: project.client })}
                            </h1>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 md:px-4 py-1 border border-cyber text-cyber text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-cyber/5 select-none">
                                    {project.language}
                                </span>
                                <span className="px-3 md:px-4 py-1 border border-primary/40 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-widest bg-primary/5 select-none">
                                    {project.default_branch}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Metrics Telemetry Grid */}
            <section className="border-y border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-black/35 py-6">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <TelemetryMetric label="FILE SIZE" value={`${(project.size_kb).toLocaleString()} KB`} code="LOC.SIZE" />
                        <TelemetryMetric label="STARS" value={`★ ${project.stars}`} code="GIT.STAR" />
                        <TelemetryMetric label="FORKS" value={`⑂ ${project.forks}`} code="GIT.FORK" />
                        <TelemetryMetric label="OPEN ISSUES" value={`⊘ ${project.issues}`} code="GIT.ISSU" />
                        <TelemetryMetric label="PRIMARY LANGUAGE" value={project.language} code="SYS.LANG" />
                    </div>
                </div>
            </section>

            {/* Device Showcase / Live Environment Mockup */}
            <section className="py-12 bg-slate-100/50 dark:bg-dark border-b border-slate-200 dark:border-white/5">
                <DeviceShowcase url={project.homepage} title={project.id} />
            </section>

            {/* Content Architecture */}
            <section className="py-24 md:py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">

                        <div className="lg:col-span-8 space-y-20">
                            {/* Client Challenge */}
                            <div className="relative">
                                <h2 className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.4em] mb-8 flex items-center">
                                    <span className="w-6 md:w-8 h-[1px] bg-primary mr-4"></span> 01 / {t('projects:detail.challenge')}
                                </h2>
                                <div className="p-8 bg-white dark:bg-surface/30 border border-slate-200 dark:border-white/5 transition-colors rounded-sm relative">
                                    <div className="absolute top-0 right-0 p-2 font-mono text-[8px] text-secondary/30 select-none">DESCR.PRTCL</div>
                                    <p className="text-lg md:text-xl text-slate-600 dark:text-gray-300 font-light leading-relaxed">
                                        {t(`projects:items.${project.id}.challenge`, { defaultValue: project.challenge })}
                                    </p>
                                </div>
                            </div>

                            {/* Implemented Solution */}
                            <div>
                                <h2 className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.4em] mb-8 flex items-center">
                                    <span className="w-6 md:w-8 h-[1px] bg-primary mr-4"></span> 02 / {t('projects:detail.solution')}
                                </h2>
                                <div className="p-8 bg-primary/5 border border-primary/20 corner-accent transition-colors relative">
                                    <div className="absolute -top-4 -left-4 text-[40px] font-black text-primary/10 select-none">{t('projects:detail.architecture')}</div>
                                    <p className="text-xl md:text-2xl text-slate-900 dark:text-white font-medium leading-relaxed mb-6 tracking-tight uppercase">
                                        {project.solution}
                                    </p>
                                    <p className="text-base md:text-lg text-slate-600 dark:text-gray-400 font-light leading-relaxed">
                                        {t(`projects:items.${project.id}.longDescription`, { defaultValue: project.longDescription })}
                                    </p>
                                </div>
                            </div>

                            {/* Screenshots / Visual Schematics */}
                            <ScreenshotViewer title={project.id} />

                            {/* Core Strengths - Interactive Terminal display */}
                            {project.strengths && project.strengths.length > 0 && (
                                <div>
                                    <h2 className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.4em] mb-8 flex items-center">
                                        <span className="w-6 md:w-8 h-[1px] bg-primary mr-4"></span> 03 / SYSTEM STRENGTHS
                                    </h2>
                                    <div className="p-8 bg-slate-950 text-emerald-400 font-mono text-xs md:text-sm rounded-sm border border-emerald-950/50 shadow-inner space-y-4 max-h-[300px] overflow-y-auto">
                                        <div className="text-emerald-500/50 border-b border-emerald-950 pb-2 mb-2 flex justify-between select-none">
                                            <span>DIAGNOSTIC CORE // OK</span>
                                            <span>STRENGTHS_LOG.txt</span>
                                        </div>
                                        {project.strengths.map((str, idx) => (
                                            <div key={idx} className="flex items-start gap-3">
                                                <span className="text-cyber select-none">$ [SYS.STRGTH_{idx + 1}]:</span>
                                                <span className="text-slate-300 font-light">{str}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Technical Specifications Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-36 space-y-8">
                                {/* Tech Specs Panel */}
                                <div className="p-8 bg-slate-900 dark:bg-black text-white space-y-8 hud-bracket hud-bracket-tl hud-bracket-br relative overflow-hidden">
                                    <h5 className="font-mono font-bold text-secondary uppercase tracking-[0.3em] z-10 relative">
                                        {t('projects:detail.techSpecs')}
                                    </h5>
                                    
                                    <div className="relative z-10 -mx-4 -mt-4">
                                        <TechRadar techStack={project.techStack} />
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-2 relative z-10 mt-6">
                                        {project.techStack.map((tech: string) => (
                                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 hover:border-cyber text-slate-300 text-[10px] font-mono rounded-sm transition-colors uppercase">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Interactive Clone Protocol Panel */}
                                {project.clone_url && (
                                    <div className="p-6 border border-primary/20 bg-primary/5 rounded-sm">
                                        <div className="font-mono text-[9px] text-secondary uppercase tracking-widest mb-3 flex justify-between items-center">
                                            <span>CLONE PROTOCOL</span>
                                            <span className="text-cyber animate-pulse">ACTIVE</span>
                                        </div>
                                        <div 
                                            onClick={handleCopyClone}
                                            className="group/btn relative p-3 bg-black/50 hover:bg-black border border-white/10 hover:border-cyber/50 rounded-sm cursor-pointer transition-all duration-300 overflow-hidden flex items-center justify-between"
                                        >
                                            <code className="font-mono text-[10px] text-slate-300 select-all truncate pr-4">
                                                git clone {project.clone_url}
                                            </code>
                                            <div className="shrink-0 flex items-center gap-1.5 font-mono text-[8px] px-1.5 py-0.5 border border-primary/30 rounded-sm bg-primary/10 text-secondary group-hover/btn:text-cyber group-hover/btn:border-cyber">
                                                {copied ? (
                                                    <span className="text-cyber">[COPIED]</span>
                                                ) : (
                                                    <span>[COPY]</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Code Access CTA */}
                                <div className="flex flex-col gap-3">
                                    {project.homepage && (
                                        <a 
                                            href={project.homepage} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="w-full text-center px-6 py-4 bg-primary text-white font-mono font-bold tracking-[0.3em] text-[11px] uppercase transition-all duration-500 shadow-lg hover:shadow-primary/20 hover:bg-secondary rounded-sm border border-transparent hover:border-secondary"
                                        >
                                            ACCESS LIVE HOST
                                        </a>
                                    )}
                                    {project.html_url && (
                                        <a 
                                            href={project.html_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="w-full text-center px-6 py-4 border border-slate-200 dark:border-white/10 hover:border-cyber hover:text-cyber text-slate-850 dark:text-white font-mono font-bold tracking-[0.3em] text-[11px] uppercase transition-all duration-500 rounded-sm backdrop-blur-md"
                                        >
                                            VIEW CODE REPOSITORY
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA Next Project */}
            <section className="py-24 md:py-40 bg-slate-50 dark:bg-dark border-t border-slate-200 dark:border-white/5 transition-colors relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h3 className="text-[10px] md:text-xs font-mono font-bold text-secondary uppercase tracking-[0.5em] mb-12">
                        [ {t('projects:detail.nextDeployment')} ]
                    </h3>
                    <Link to={`/projects/${nextProject.slug}`} className="group inline-block">
                        <h4 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase group-hover:text-primary transition-all duration-700 leading-tight">
                            {t(`projects:items.${nextProject.id}.title`, { defaultValue: nextProject.client })}
                        </h4>
                        <div className="mt-12 w-24 h-[2px] bg-slate-300 dark:bg-white/10 mx-auto group-hover:w-full transition-all duration-700 group-hover:bg-primary"></div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

const TelemetryMetric: React.FC<{ label: string, value: string, code: string }> = ({ label, value, code }) => (
    <div className="p-4 bg-white dark:bg-surface/20 border border-slate-200/50 dark:border-white/[0.03] rounded-sm transition-all hover:border-primary/20 flex flex-col justify-between">
        <div className="flex justify-between items-center font-mono text-[8px] text-slate-400 dark:text-gray-600 mb-2 select-none">
            <span>{label}</span>
            <span>[{code}]</span>
        </div>
        <div className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter truncate uppercase font-display">
            {value}
        </div>
    </div>
);

export default ProjectDetail;
