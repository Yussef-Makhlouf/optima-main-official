import React from 'react';
import { TechCategory } from '../../types';

interface TechStackGridProps {
    techStack: TechCategory[];
    title?: string;
}

const TechStackGrid: React.FC<TechStackGridProps> = ({
    techStack,
    title = "Technology Stack"
}) => {
    return (
        <section className="py-24 md:py-40 bg-white dark:bg-dark transition-colors relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 grid-bg opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-12 h-[1px] bg-primary"></div>
                            <span className="text-[10px] md:text-xs font-mono font-bold text-primary uppercase tracking-[0.4em]">TECHNICAL_ARCHITECTURE</span>
                        </div>
                        <h3 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-tight">
                            {title}
                        </h3>
                    </div>
                    <div className="hidden lg:block text-right">
                        <div className="text-[10px] font-mono text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-2">System Protocol</div>
                        <div className="text-sm font-bold text-primary dark:text-secondary font-mono">0x7A_TECH_SPEC_FINAL</div>
                    </div>
                </div>

                {/* Tech Categories */}
                <div className="space-y-32">
                    {techStack.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="relative">
                            {/* Category Header */}
                            <div className="mb-12 flex items-baseline gap-6">
                                <span className="text-5xl md:text-6xl font-black text-primary/10 select-none">0{categoryIndex + 1}</span>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-2">
                                        {category.category}
                                    </h4>
                                    {category.description && (
                                        <p className="text-sm md:text-base text-slate-500 dark:text-gray-400 font-light max-w-xl">
                                            {category.description}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Tech Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                {category.technologies.map((tech, techIndex) => (
                                    <div
                                        key={techIndex}
                                        className="group relative p-8 bg-slate-50/30 dark:bg-surface/10 backdrop-blur-md border border-slate-200 dark:border-white/5 hover:border-primary/50 transition-all duration-500 cursor-default hud-bracket-tl-sm hud-bracket-br-sm overflow-hidden"
                                    >
                                        {/* Decorative HUD Elements */}
                                        <div className="absolute top-3 right-3 text-[7px] font-mono text-slate-300 dark:text-white/10 group-hover:text-primary/40 transition-colors uppercase tracking-widest">
                                            {tech.name.substring(0, 3)} // CATEGORY_{categoryIndex + 1}
                                        </div>

                                        {/* Logo / Icon & Name */}
                                        <div className="flex flex-col gap-6 mb-6">
                                            <div className="flex items-center justify-between">
                                                {tech.logo ? (
                                                    <div className="w-12 h-12 relative">
                                                        <img
                                                            src={tech.logo}
                                                            alt={tech.name}
                                                            className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 opacity-60 group-hover:opacity-100"
                                                        />
                                                    </div>
                                                ) : tech.icon ? (
                                                    <div className="text-primary group-hover:scale-110 transition-transform duration-500">
                                                        {tech.icon}
                                                    </div>
                                                ) : null}
                                                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent ml-4"></div>
                                            </div>

                                            <div className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter group-hover:text-primary transition-colors">
                                                {tech.name}
                                            </div>
                                        </div>

                                        {/* Benefit Description */}
                                        {tech.description && (
                                            <div className="relative">
                                                <p className="text-xs md:text-sm text-slate-500 dark:text-gray-400 leading-relaxed font-light border-l border-primary/20 pl-4 group-hover:border-primary transition-colors duration-500">
                                                    {tech.description}
                                                </p>
                                            </div>
                                        )}

                                        {/* Ambient Glow on Hover */}
                                        <div
                                            className="absolute -bottom-12 -right-12 w-24 h-24 blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full"
                                            style={{ backgroundColor: tech.color || '#145D90' }}
                                        />

                                        {/* Bottom Accent Line */}
                                        <div
                                            className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-700"
                                            style={{ backgroundColor: tech.color || '#145D90' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStackGrid;
