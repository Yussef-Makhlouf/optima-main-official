
import React from 'react';
import { Link } from 'react-router-dom';
import TeamGrid from '../../components/about/TeamGrid';
import SecureHandshakeCTA from '../../components/about/SecureHandshakeCTA';

const About: React.FC = () => {
    return (
        <div className="pt-32 bg-white dark:bg-dark transition-colors">
            {/* Immersive Typography Banner */}
            <section className="py-40 bg-slate-50 dark:bg-dark relative overflow-hidden transition-colors">
                <div className="absolute inset-0 grid-bg opacity-20"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex items-center space-x-4 mb-12">
                        <div className="w-12 h-[1px] bg-secondary"></div>
                        <span className="text-[10px] font-black text-secondary uppercase tracking-[0.6em]">OPTIMA Protocol</span>
                    </div>
                    <h1 className="text-7xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter mb-12 leading-[0.85] uppercase transition-colors">
                        Built for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Absolute.</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-slate-600 dark:text-gray-400 max-w-4xl font-light leading-snug transition-colors">
                        We operate at the intersection of technical excellence and strategic certainty. We build for enterprises that refuse to fail.
                    </p>
                </div>
            </section>

            {/* Grid-based Content Section */}
            <section className="py-40 bg-slate-50 dark:bg-surface/30 border-y border-slate-200 dark:border-white/5 transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                        <div className="lg:col-span-5 relative">
                            <div className="absolute -top-20 -left-20 w-full h-full bg-grid-slate-200 dark:bg-grid-white/[0.02] [mask-image:linear-gradient(0deg,white,transparent)]"></div>
                            <img src="/about.png" alt="Optima Philosophy" className="relative z-10 rounded-sm shadow-2xl shadow-primary/10 mb-12 grayscale hover:grayscale-0 transition-all duration-700" />

                            <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-primary mb-10">Core Philosophy</h2>
                            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none mb-10 transition-colors">Strategy is Engineering.</h3>
                            <p className="text-lg text-slate-500 dark:text-gray-500 font-light leading-relaxed mb-10 italic transition-colors">
                                OPTIMA Solutions was established to bridge the gap between corporate ambition and infrastructure reality. We move beyond trends to focus on long-term systemic stability.
                            </p>
                        </div>
                        <div className="lg:col-span-7 space-y-24">
                            <ValueBlock title="Redundancy" desc="Every system we architect includes failure tolerance as a baseline. Zero-downtime is not a goal; it is a standard." />
                            <ValueBlock title="Integrity" desc="Security is not a feature added later. It is baked into the very core of our modular architecture." />
                            <ValueBlock title="Scale" desc="We build for the future versions of your enterprise, ensuring your stack grows with your global reach." />
                        </div>
                    </div>
                </div>
            </section>

            {/* Industrial Numbers Section */}
            <section className="py-40 border-b border-slate-200 dark:border-white/5 transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div>
                            <div className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter transition-colors">99.99<span className="text-primary text-3xl">%</span></div>
                            <div className="text-[9px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.4em] transition-colors">Availability SLA</div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter transition-colors">24<span className="text-primary text-3xl">/7</span></div>
                            <div className="text-[9px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.4em] transition-colors">Network Operations</div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter transition-colors">150<span className="text-primary text-3xl">+</span></div>
                            <div className="text-[9px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.4em] transition-colors">Global Deployments</div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-4 tracking-tighter transition-colors">10<span className="text-primary text-3xl">+</span></div>
                            <div className="text-[9px] font-black text-slate-400 dark:text-gray-500 uppercase tracking-[0.4em] transition-colors">Year Partnerships</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <TeamGrid />

            {/* Final Call - Creative */}
            <SecureHandshakeCTA />
        </div>
    );
};

const ValueBlock: React.FC<{ title: string, desc: string }> = ({ title, desc }) => (
    <div className="border-l-2 border-primary/20 pl-10 group hover:border-secondary transition-colors duration-500">
        <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight group-hover:text-secondary transition-colors">{title}</h4>
        <p className="text-slate-500 dark:text-gray-400 text-lg font-light leading-relaxed max-w-2xl transition-colors">{desc}</p>
    </div>
);

export default About;
