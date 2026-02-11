
import React from 'react';
import { Icons, TechIllustrations } from '../../data/content';

const Industries: React.FC = () => {
    return (
        <div className="pt-24 md:pt-32 min-h-screen transition-colors bg-white dark:bg-dark">
            {/* Page Header */}
            <section className="py-24 md:py-40 relative overflow-hidden grid-bg border-b border-slate-200 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex items-center space-x-4 mb-10">
                        <div className="w-12 h-[1px] bg-secondary"></div>
                        <span className="text-[10px] font-mono font-bold text-secondary uppercase tracking-[0.6em]">Sector_Vertical_Engineering</span>
                    </div>
                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 dark:text-white tracking-tighter mb-8 leading-none uppercase">Vertical <br /><span className="text-primary italic">Precision.</span></h1>
                    <p className="text-xl md:text-3xl text-slate-600 dark:text-gray-400 max-w-3xl font-light leading-relaxed border-l-4 border-cyber pl-8">
                        Deploying domain-specific infrastructure modules across mission-critical sectors with absolute architectural integrity.
                    </p>
                </div>
                <div className="absolute bottom-0 right-0 p-10 opacity-5 hidden lg:block">
                    <div className="text-[150px] font-black text-primary select-none rotate-90 origin-bottom-right uppercase">Industries</div>
                </div>
            </section>

            {/* Industry Sections */}
            <section className="py-24 md:py-40">
                <div className="max-w-7xl mx-auto px-6 space-y-40 md:space-y-60">

                    {/* Finance Section */}
                    <IndustryBlock
                        title="Finance & Banking"
                        icon={<Icons.Finance />}
                        id="finance"
                        tag="FIN_INFRA_v4"
                        description="In the high-stakes environment of global capital, latency is risk. We engineer ultra-low latency transaction environments that combine the agility of modern Fintech with the security of central bank systems."
                        points={[
                            { title: "Deterministic Performance", text: "Sub-millisecond packet processing for high-frequency trading and instant settlement protocols." },
                            { title: "Compliance Architecture", text: "Automated, immutable audit trails designed for strict banking regulations and real-time reporting." },
                            { title: "Crypto-Asset Security", text: "Hardware-backed signing environments and cold-storage integration for digital asset pioneers." }
                        ]}
                    >
                        <AbstractGraphic type="finance" />
                    </IndustryBlock>

                    {/* Healthcare Section */}
                    <IndustryBlock
                        title="Healthcare & BioTech"
                        icon={<Icons.Healthcare />}
                        id="healthcare"
                        tag="BIO_DATA_v2"
                        isReversed
                        description="Protecting the most sensitive data on earth while enabling global scientific cooperation. Our Bio-Cloud architectures support massive genetic research datasets and HIPAA-compliant delivery."
                        points={[
                            { title: "Genomic Computation", text: "Distributed parallel processing clusters for real-time DNA sequencing and protein folding simulations." },
                            { title: "Data Sovereignity", text: "Encrypted-at-rest storage architectures ensuring absolute patient privacy across international borders." },
                            { title: "Telemetry Platforms", text: "High-availability streams for remote medical interventions and IoT patient monitoring systems." }
                        ]}
                    >
                        <AbstractGraphic type="healthcare" />
                    </IndustryBlock>

                    {/* Logistics Section */}
                    <IndustryBlock
                        title="Logistics & Supply"
                        icon={<Icons.Logistics />}
                        id="logistics"
                        tag="LOG_AUTO_v9"
                        description="Transforming physical movement into digital clarity. We leverage real-time IoT telemetry and digital twin simulations to drive operational efficiency across the global supply chain."
                        points={[
                            { title: "Dynamic Digital Twins", text: "Virtual mirroring of your entire physical fleet for predictive maintenance and route optimization." },
                            { title: "Sensor Ecosystems", text: "Real-time tracking of cold-chain metrics, asset location, and vibration sensing for sensitive cargo." },
                            { title: "Autonomous Nodes", text: "Engineering the backend for automated warehouses and self-navigating freight infrastructure." }
                        ]}
                    >
                        <AbstractGraphic type="logistics" />
                    </IndustryBlock>

                </div>
            </section>
        </div>
    );
};

const IndustryBlock: React.FC<{ title: string, icon: React.ReactNode, id: string, tag: string, description: string, points: any[], isReversed?: boolean, children?: React.ReactNode }> = ({ title, icon, tag, description, points, isReversed, children }) => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-start">
        <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-primary/10 flex items-center justify-center text-secondary border border-primary/20 hud-bracket hud-bracket-tl hud-bracket-br shrink-0">
                    {icon}
                </div>
                <div>
                    <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-2 block">{tag}</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none">{title}</h2>
                </div>
            </div>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 font-light leading-relaxed mb-16 border-l-2 border-primary/20 pl-8 transition-colors">
                {description}
            </p>
            <div className="space-y-12">
                {points.map((p, i) => (
                    <div key={i} className="group relative">
                        <div className="absolute -left-8 md:-left-12 top-0 h-full w-[2px] bg-slate-200 dark:bg-white/5 group-hover:bg-primary transition-colors duration-500"></div>
                        <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight group-hover:text-secondary transition-colors leading-none">{p.title}</h4>
                        <p className="text-lg text-slate-500 dark:text-gray-500 font-light leading-relaxed">{p.text}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className={`lg:col-span-6 aspect-square bg-slate-50 dark:bg-dark/40 border border-slate-200 dark:border-white/5 relative flex items-center justify-center overflow-hidden hud-bracket hud-bracket-tr hud-bracket-bl ${isReversed ? 'lg:order-1' : ''}`}>
            <div className="absolute inset-0 grid-bg opacity-20"></div>
            <div className="absolute top-4 left-4 text-[10px] font-mono text-primary/40 uppercase tracking-widest hidden md:block">VISUAL_SCHEMA::UNIT_{title.substring(0, 3).toUpperCase()}</div>
            {children}
        </div>
    </div>
);

const AbstractGraphic: React.FC<{ type: 'finance' | 'healthcare' | 'logistics' }> = ({ type }) => {
    if (type === 'finance') {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <svg className="w-4/5 h-4/5 text-primary" viewBox="0 0 500 500" fill="none">
                    <defs>
                        <linearGradient id="grad-fin" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#145D90" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#56A5DD" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    {/* Central Core */}
                    <rect x="200" y="200" width="100" height="100" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
                    {/* Data Spikes */}
                    {[...Array(12)].map((_, i) => (
                        <line
                            key={i}
                            x1="250"
                            y1="250"
                            x2={250 + 180 * Math.cos(i * Math.PI / 6)}
                            y2={250 + 180 * Math.sin(i * Math.PI / 6)}
                            stroke="url(#grad-fin)"
                            strokeWidth="1"
                            strokeDasharray="10 20"
                            className="animate-[dash_10s_linear_infinite]"
                            style={{ animationDelay: `${i * 0.5}s` }}
                        />
                    ))}
                    {/* Rotating Rings */}
                    <circle cx="250" cy="250" r="140" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" className="animate-[spin_20s_linear_infinite]" />
                    <circle cx="250" cy="250" r="170" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 10" className="animate-[spin_30s_linear_infinite_reverse]" />
                    {/* Geometric Accents */}
                    <path d="M50 250 L250 50 L450 250 L250 450 Z" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                    <text x="255" y="245" fontSize="10" fill="currentColor" className="font-mono uppercase opacity-50">FIN_CORE</text>
                </svg>
            </div>
        );
    }
    if (type === 'healthcare') {
        return (
            <div className="w-full h-full flex items-center justify-center">
                <svg className="w-4/5 h-4/5 text-secondary" viewBox="0 0 500 500" fill="none">
                    {/* DNA Helix Abstraction */}
                    {[...Array(20)].map((_, i) => (
                        <React.Fragment key={i}>
                            <circle cx={150 + Math.sin(i * 0.5) * 60} cy={100 + i * 15} r="3" fill="currentColor" className="animate-pulse" />
                            <circle cx={350 - Math.sin(i * 0.5) * 60} cy={100 + i * 15} r="3" fill="currentColor" opacity="0.6" />
                            <line x1={150 + Math.sin(i * 0.5) * 60} y1={100 + i * 15} x2={350 - Math.sin(i * 0.5) * 60} y2={100 + i * 15} stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                        </React.Fragment>
                    ))}
                    {/* Pulse Overlay */}
                    <path d="M50 400 L150 400 L170 350 L190 450 L210 400 L450 400" stroke="#00FFCC" strokeWidth="2" strokeDasharray="800" className="animate-[pulse_4s_ease-in-out_infinite]" strokeLinecap="round" />
                    {/* Grid Accents */}
                    <circle cx="250" cy="250" r="220" stroke="currentColor" strokeWidth="0.5" strokeDasharray="20 20" opacity="0.1" />
                    <text x="255" y="100" fontSize="10" fill="currentColor" className="font-mono uppercase opacity-50">BIOMETRY::STREAM</text>
                </svg>
            </div>
        );
    }
    return (
        <div className="w-full h-full flex items-center justify-center">
            <svg className="w-4/5 h-4/5 text-dark dark:text-white" viewBox="0 0 500 500" fill="none">
                {/* Logistics Grid / Network */}
                <defs>
                    <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#smallGrid)" />
                {/* Moving Nodes */}
                {[...Array(6)].map((_, i) => (
                    <g key={i} className="animate-[float_6s_ease-in-out_infinite]" style={{ animationDelay: `${i * 1}s` }}>
                        <rect x={100 + i * 50} y={100 + i * 50} width="40" height="40" fill="#145D90" opacity="0.2" stroke="#56A5DD" strokeWidth="1" />
                        <circle cx={140 + i * 50} cy={100 + i * 50} r="4" fill="#00FFCC" />
                        <line x1={100 + i * 50} y1={100 + i * 50} x2={100 + i * 50 - 30} y2={100 + i * 50 - 30} stroke="#56A5DD" strokeWidth="0.5" strokeDasharray="2 2" />
                    </g>
                ))}
                {/* Vector Lines */}
                <path d="M50 50 L450 450 M50 450 L450 50" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
                <path d="M250 0 L250 500 M0 250 L500 250" stroke="#56A5DD" strokeWidth="1" strokeDasharray="5 15" opacity="0.4" />
                <text x="50" y="480" fontSize="10" fill="currentColor" className="font-mono uppercase opacity-50">LOG_VECTOR::V_09</text>
            </svg>
        </div>
    );
};

export default Industries;
