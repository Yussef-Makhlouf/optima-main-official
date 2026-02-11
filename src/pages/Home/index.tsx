import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS, SERVICES, TechIllustrations } from '../../data/content';
import FAQ from '../../components/sections/FAQ';

import ClientTransmissions from '../../components/home/ClientTransmissions';
import InteractiveTerminal from '../../components/home/InteractiveTerminal';
import TechMarquee from '../../components/home/TechMarquee';
import Philosophy from '../../components/home/Philosophy';
import ClientLogos from '../../components/common/ClientLogos';
import { CLIENTS } from '../../data/content-marquee';

const Home: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const [systemStatus, setSystemStatus] = useState("STABLE");

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);

        const interval = setInterval(() => {
            setSystemStatus(Math.random() > 0.9 ? "OPTIMIZING" : "STABLE");
        }, 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="relative">
            {/* 1. Abnormal Hero Section */}
            <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden ">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 grid-bg opacity-30"></div>
                    <div className="absolute inset-0"></div>
                </div>
                <div className="scanline"></div>

                {/* Abstract HUD Decorative Elements - Hidden on small mobile */}
                <div className="absolute top-40 right-10 w-64 text-[10px] font-mono opacity-40 hidden xl:block z-10">
                    <div className="border-t border-secondary pt-4 mb-4">
                        <div className="flex justify-between dark:text-white"><span>[X_COORD]</span><span>{Math.floor(scrollY)}</span></div>
                        <div className="flex justify-between dark:text-white"><span>[Y_COORD]</span><span>{Math.floor(Math.random() * 100)}</span></div>
                        <div className="flex justify-between dark:text-white"><span>[SYS_STATUS]</span><span className="text-cyber font-bold">{systemStatus}</span></div>
                    </div>
                    <div className="h-20 bg-primary/5 border border-primary/20 p-2 overflow-hidden">
                        <div className="ticker-text whitespace-nowrap text-secondary">ARCHITECTING_THE_FUTURE_INFRASTRUCTURE_NOW_DEPLOYING_SYSTEM_v4.2.0</div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-10 xl:col-span-9">
                            <div className="flex items-center space-x-4 md:space-x-6 mb-8 md:mb-12">
                                <div className="w-12 md:w-16 h-[2px] bg-secondary animate-pulse"></div>
                                <span className="text-[9px] md:text-[11px] uppercase tracking-[0.6em] md:tracking-[0.8em] font-mono text-secondary">[ ARCHITECTURE.01 ]</span>
                            </div>

                            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white mb-8 md:mb-10 leading-[0.9] tracking-tighter uppercase transition-colors relative">
                                ENGINEERING <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-cyber bg-[length:200%_auto] animate-[gradient:8s_linear_infinite] glitch-hover">
                                    CERTAINTY.
                                </span>
                                <span className="absolute -top-10 -left-10 text-[10px] font-mono text-secondary/30 opacity-50 hidden md:block uppercase tracking-widest">INIT_PROTOCOL::GLOBAL_SCALE</span>
                            </h1>

                            <div className="max-w-2xl">
                                <p className="text-lg md:text-2xl text-slate-600 dark:text-gray-400 mb-10 md:mb-14 leading-relaxed font-light border-l-2 md:border-l-4 border-cyber pl-6 md:pl-10 transition-colors relative">
                                    OPTIMA Solutions designs resilient digital foundations for the world's most ambitious enterprises.
                                    <span className="block mt-4 text-[10px] md:text-xs font-mono uppercase tracking-widest text-primary">Target: Zero Downtime.</span>
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/contact" className="group relative px-8 md:px-12 py-5 md:py-7 bg-primary text-white font-mono font-bold tracking-[0.4em] text-[10px] md:text-[12px] overflow-hidden transition-all duration-500 shadow-xl shadow-primary/20 hud-bracket hud-bracket-tl hud-bracket-br text-center">
                                        <span className="relative z-10 uppercase">Initialize Connection</span>
                                        <div className="absolute inset-0 bg-secondary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                                    </Link>
                                    <Link to="/services" className="px-8 md:px-12 py-5 md:py-7 border border-slate-200 dark:border-white/10 hover:border-cyber text-slate-900 dark:text-white font-mono font-bold tracking-[0.4em] text-[10px] md:text-[12px] transition-all duration-500 uppercase backdrop-blur-md text-center">
                                        Capabilities.bin
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TechMarquee />
            {/* Abnormal Capabilities Layout */}
            <section className="py-24 md:py-40 relative bg-white dark:bg-dark transition-colors border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start mb-16 md:mb-32 gap-12">
                        <div className="max-w-2xl relative">
                            <h2 className="text-[10px] md:text-[12px] uppercase tracking-[0.6em] font-mono text-primary mb-8 md:mb-10 flex items-center">
                                <span className="w-8 md:w-12 h-[1px] bg-primary mr-4 md:mr-6"></span> [ SYS_OPS ]
                            </h2>
                            <h3 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-none uppercase">Modular <br />Stack.</h3>
                            <div className="absolute -right-10 md:-right-20 top-0 text-[60px] md:text-[100px] font-black text-slate-100 dark:text-white/[0.02] select-none -z-10 uppercase">CAPABILITY</div>
                        </div>
                        <div className="max-w-xs p-6 md:p-8 border border-primary/20 bg-primary/5 hud-bracket hud-bracket-tr hud-bracket-bl">
                            <p className="text-slate-500 dark:text-gray-400 text-xs md:text-sm font-mono leading-relaxed uppercase">
                                Interoperable service modules designed for 24/7 mission-critical operational stability.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-slate-200 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                        {SERVICES.map((s, idx) => (
                            <div key={s.id} className={idx % 3 === 0 ? "md:col-span-12 lg:col-span-8" : "md:col-span-12 lg:col-span-4"}>
                                <Link to={`/services/${s.slug}`}>
                                    <SystemNode
                                        icon={s.icon}
                                        title={s.title}
                                        desc={s.description}
                                        code={s.technicalCode}
                                    />
                                </Link>
                            </div>
                        ))}
                        <div className="md:col-span-12 lg:col-span-8 relative min-h-[300px] group overflow-hidden">
                            <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/40 transition-colors duration-500 z-10"></div>
                            <div className="absolute inset-0 grid-bg opacity-30 z-20"></div>
                            <img
                                src="/services-hero.png"
                                alt="System Architecture"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute bottom-8 left-8 z-30">
                                <div className="text-[10px] font-mono text-cyber uppercase tracking-widest mb-2">System_Visualisation</div>
                                <div className="text-white text-xl font-bold uppercase tracking-tighter">Global_Network_Map</div>
                            </div>
                            {/* Decorative Corners */}
                            <div className="absolute top-0 right-0 p-4 z-30">
                                <div className="w-16 h-16 border-t font-mono text-[9px] text-white/50 border-r border-white/20 pt-2 pr-2 text-right">FIG_3.1</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Illustration Divider */}
            <div className="hidden md:block">
                <TechIllustrations.CircuitDivider />
            </div>

            {/* 4. Methodology Section - The Diagnostic View */}
            <section className="py-24 md:py-40 bg-slate-50 dark:bg-surface/30 border-b border-slate-200 dark:border-white/5 relative overflow-hidden transition-colors">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-primary/20 pb-10 gap-6">
                        <div>
                            <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] font-mono text-secondary mb-4 md:mb-6">[ DEPLOY_PROTOCOL ]</h2>
                            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase transition-colors">Engineered Flow.</h3>
                        </div>
                        <div className="text-[10px] font-mono text-secondary animate-pulse uppercase tracking-widest">SYSTEM_CHECK: OK // VER_4.2</div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 relative z-10 bg-slate-200 dark:bg-white/10">
                        <DiagramStep
                            number="01"
                            title="Audit"
                            desc="Comprehensive analysis of current infrastructure security and performance bottlenecks."
                            onEnter={() => setActiveStep(0)}
                            isActive={activeStep === 0}
                        />
                        <DiagramStep
                            number="02"
                            title="Architect"
                            desc="Modular blueprints prioritizing scalability and zero-downtime migration paths."
                            onEnter={() => setActiveStep(1)}
                            isActive={activeStep === 1}
                        />
                        <DiagramStep
                            number="03"
                            title="Operate"
                            desc="Continuous CI/CD deployment with 24/7 global telemetry monitoring."
                            onEnter={() => setActiveStep(2)}
                            isActive={activeStep === 2}
                        />
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <Philosophy />

            {/* Client Logos Marquee */}
            <ClientLogos clients={CLIENTS} />

            {/* Ticker Banner */}
            <div className="bg-primary py-3 md:py-4 overflow-hidden border-y border-white/10">
                <div className="ticker-text whitespace-nowrap text-white font-mono text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase">
                    SECURE_DATA_TRANSFER_PROTOCOL_ACTIVE // GLOBAL_NODES_ONLINE // LATENCY: 12ms // OPTIMA_SOLUTIONS_v4 // SEC_VERIFIED: TRUE //
                </div>
            </div>

            {/* 5. Recent Projects */}
            <section className="py-24 md:py-40 bg-white dark:bg-dark transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 md:mb-24 gap-8">
                        <div>
                            <h2 className="text-[10px] md:text-[11px] font-mono text-primary uppercase tracking-[0.6em] mb-4 md:mb-6">[ ARCHIVES ]</h2>
                            <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase transition-colors leading-none">Impact Data.</h3>
                        </div>
                        <Link to="/projects" className="text-xs font-mono font-bold uppercase tracking-widest text-secondary hover:text-cyber transition-colors flex items-center group">
                            Explore_All_Units
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                        {PROJECTS.map(p => (
                            <Link to={`/projects/${p.slug}`} key={p.id} className="group relative aspect-[4/5] bg-white dark:bg-surface/10 overflow-hidden transition-all duration-700">
                                <div className="absolute inset-0 grid-bg opacity-10 group-hover:scale-125 transition-transform duration-1000"></div>
                                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div className="text-[9px] md:text-[10px] font-mono text-secondary tracking-[0.4em] uppercase">{p.client}</div>
                                        <div className="w-6 h-6 md:w-8 md:h-8 border border-primary/30 flex items-center justify-center text-[9px] md:text-[10px] font-mono text-primary">0{PROJECTS.indexOf(p) + 1}</div>
                                    </div>
                                    <div>
                                        <div className="text-[9px] md:text-[10px] font-mono text-cyber mb-4 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">RUNNING_STUDY_...</div>
                                        <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase mb-6 group-hover:text-primary transition-colors leading-none">{p.title}</h4>
                                        <div className="w-0 h-1 bg-secondary group-hover:w-full transition-all duration-700"></div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>



            {/* 8. Interactive Terminal */}
            <InteractiveTerminal />

            {/* 7. FAQ */}
            <FAQ />
            {/* 6. Client Transmissions */}
            <ClientTransmissions />

            {/* 9. Footer CTA */}
            <section className="relative py-32 md:py-60 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-dark transition-colors overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-30"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-8 text-center lg:text-left">
                            <h3 className="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 md:mb-12 uppercase leading-[0.85] transition-colors">
                                BUILD THE <br /><span className="text-primary italic">BACKBONE.</span>
                            </h3>
                            <p className="text-lg md:text-2xl text-slate-600 dark:text-gray-400 font-light leading-relaxed transition-colors max-w-2xl mx-auto lg:mx-0 border-l-0 lg:border-l-4 border-secondary pl-0 lg:pl-10">
                                Global scale requires infrastructure that adapts as fast as the market moves.
                                <span className="block mt-4 text-[10px] md:text-sm font-mono text-primary uppercase tracking-[0.2em]">[ CONNECTION_READY ]</span>
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex justify-center">
                            <Link to="/contact" className="group relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center border border-primary/20 rounded-full hover:border-cyber transition-all duration-700">
                                <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"></div>
                                <div className="absolute inset-3 md:inset-4 border border-secondary/10 rounded-full animate-[spin_15s_linear_infinite]"></div>
                                <div className="absolute inset-8 md:inset-10 border border-cyber/5 rounded-full animate-[spin_10s_linear_infinite_reverse]"></div>
                                <div className="text-center relative z-10">
                                    <span className="block text-[10px] md:text-[11px] font-mono tracking-[0.4em] md:tracking-[0.6em] text-slate-900 dark:text-white group-hover:text-cyber transition-colors uppercase font-bold">INITIATE</span>
                                    <span className="block text-[10px] md:text-[11px] font-mono tracking-[0.4em] md:tracking-[0.6em] text-slate-500 dark:text-gray-400 uppercase">PROTOCOL</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};



const SystemNode: React.FC<{ icon: React.ReactNode, title: string, desc: string, code: string }> = ({ icon, title, desc, code }) => (
    <div className={`group relative p-10 md:p-16 bg-white dark:bg-white/[0.02] hover:bg-slate-50 dark:hover:bg-white/[0.05] transition-all duration-700 h-full flex flex-col justify-between overflow-hidden`}>
        <div className="relative z-10">
            <div className="flex justify-between items-start mb-12 md:mb-16">
                <div className="text-primary group-hover:text-cyber group-hover:scale-110 transition-all duration-500 transform origin-left">
                    {icon}
                </div>
                <div className="text-[9px] md:text-[10px] font-mono text-slate-400 dark:text-gray-600 tracking-widest uppercase">{code}</div>
            </div>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500 leading-none">{title}</h4>
            <p className="text-base md:text-lg text-slate-500 dark:text-gray-500 font-light leading-relaxed max-w-sm transition-colors">
                {desc}
            </p>
        </div>
        <div className="mt-12 md:mt-20 flex items-center space-x-6 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 relative z-10">
            <span className="text-[10px] md:text-[11px] font-mono font-bold tracking-[0.4em] text-secondary uppercase">SYS_DOCS.v4</span>
            <div className="w-12 md:w-16 h-[1px] bg-secondary"></div>
        </div>
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/20 group-hover:border-cyber/50 transition-colors"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-primary/20 group-hover:border-cyber/50 transition-colors"></div>
    </div>
);

const DiagramStep: React.FC<{ number: string, title: string, desc: string, isActive: boolean, onEnter: () => void }> = ({ number, title, desc, isActive, onEnter }) => (
    <div
        className={`p-10 md:p-16 transition-all duration-700 relative overflow-hidden group cursor-default border-x border-transparent ${isActive ? 'bg-primary/5 dark:bg-primary/10 border-primary/40' : 'bg-white dark:bg-dark/40 hover:border-primary/20'}`}
        onMouseEnter={onEnter}
    >
        <div className={`absolute top-0 right-0 p-8 md:p-12 text-7xl md:text-9xl font-black transition-all duration-700 select-none ${isActive ? 'text-primary/10 dark:text-primary/20 scale-125 translate-x-5 md:translate-x-10' : 'text-slate-100 dark:text-white/[0.02]'}`}>{number}</div>
        <div className="relative z-10">
            <div className={`font-mono text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.6em] mb-6 md:mb-10 uppercase transition-colors duration-500 ${isActive ? 'text-cyber' : 'text-slate-400 dark:text-gray-500'}`}>PHASE_0{number}</div>
            <h4 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 uppercase tracking-tighter leading-none">{title}</h4>
            <p className={`text-base md:text-lg font-light leading-relaxed transition-colors duration-500 ${isActive ? 'text-slate-700 dark:text-gray-200' : 'text-slate-500 dark:text-gray-500'}`}>{desc}</p>
        </div>
        <div className={`absolute bottom-0 left-0 h-1 bg-cyber transition-all duration-700 ${isActive ? 'w-full' : 'w-0'}`}></div>
    </div>
);

export default Home;
