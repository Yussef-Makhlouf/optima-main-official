import React from 'react';

export interface TechItem {
    name: string;
    icon?: React.ReactNode;
    color?: string;
}

export interface TechCategory {
    category: string;
    technologies: TechItem[];
}

interface TechStackGridProps {
    techStack: TechCategory[];
    title?: string;
}

const TechStackGrid: React.FC<TechStackGridProps> = ({
    techStack,
    title = "Technology Stack"
}) => {
    return (
        <section className="py-24 md:py-32 bg-white dark:bg-dark transition-colors">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <h2 className="text-[10px] md:text-xs font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4 flex items-center">
                        <span className="w-8 h-[1px] bg-primary mr-4" /> TECHNICAL_ARCHITECTURE
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                        {title}
                    </h3>
                </div>

                {/* Tech Categories */}
                <div className="space-y-16">
                    {techStack.map((category, categoryIndex) => (
                        <div key={categoryIndex}>
                            <div className="mb-8">
                                <h4 className="text-secondary font-mono text-xs uppercase tracking-widest font-bold">
                                    {category.category}
                                </h4>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {category.technologies.map((tech, techIndex) => (
                                    <div
                                        key={techIndex}
                                        className="group relative p-6 bg-slate-50 dark:bg-surface/20 border border-slate-200 dark:border-white/5 hover:border-primary transition-all duration-300 cursor-default"
                                    >
                                        {/* Icon */}
                                        {tech.icon && (
                                            <div className="mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                                                {tech.icon}
                                            </div>
                                        )}

                                        {/* Tech Name */}
                                        <div className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                                            {tech.name}
                                        </div>

                                        {/* Accent Line */}
                                        <div
                                            className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500"
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
