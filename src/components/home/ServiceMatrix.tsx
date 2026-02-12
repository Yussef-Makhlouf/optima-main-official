
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/content';

const ServiceMatrix: React.FC = () => {
    const [activeService, setActiveService] = useState<string | null>(null);

    return (
        <section className="py-32 bg-slate-50 dark:bg-dark relative overflow-hidden border-y border-primary/10">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary/5 -skew-x-12 transform origin-bottom-left"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <h2 className="text-[10px] md:text-[11px] uppercase tracking-[0.6em] font-mono text-primary mb-6 flex items-center">
                            <span className="w-2 h-2 bg-primary mr-2 animate-pulse"></span>
                            [ ACTIVE_MODULES ]
                        </h2>
                        <h3 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-tight">
                            Infrastructure <br /> Matrix.
                        </h3>
                    </div>
                    <div className="text-right hidden md:block">
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-1">Total Capacity</div>
                        <div className="text-3xl font-black text-secondary">100<span className="text-sm align-top">%</span></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            className={`relative group transition-all duration-500 ease-out ${activeService === service.id ? 'md:col-span-2' : ''}`}
                            onMouseEnter={() => setActiveService(service.id)}
                            onMouseLeave={() => setActiveService(null)}
                        >
                            <Link to={`/services/${service.slug}`} className="block h-full min-h-[400px] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-cyber/50 transition-colors relative overflow-hidden flex flex-col justify-between p-8 md:p-12">

                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Header */}
                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="text-secondary group-hover:text-cyber transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                    <div className="text-[9px] font-mono text-slate-400 group-hover:text-primary transition-colors uppercase tracking-widest">
                                        {service.technicalCode}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10 mt-auto">
                                    <h4 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase mb-4 leading-tight group-hover:translate-x-2 transition-transform duration-300">
                                        {service.title}
                                    </h4>

                                    <div className={`overflow-hidden transition-all duration-500 ${activeService === service.id ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                        <p className="text-sm text-slate-600 dark:text-gray-400 font-mono leading-relaxed mb-6 border-l-2 border-secondary pl-4">
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.features?.slice(0, 3).map((feature, i) => (
                                                <span key={i} className="text-[9px] uppercase tracking-wider px-2 py-1 bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-gray-300">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Collapsed state hint */}
                                    <div className={`transition-all duration-500 ${activeService === service.id ? 'opacity-0 h-0 hidden' : 'opacity-100 mt-4'}`}>
                                        <div className="h-[1px] w-full bg-slate-200 dark:bg-white/10 mb-4"></div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[9px] uppercase font-bold text-slate-400">Expand_Node</span>
                                            <span className="text-secondary text-lg">+</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-2 h-2 bg-cyber shadow-[0_0_10px_rgba(86,165,221,0.5)] animate-ping"></div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceMatrix;
