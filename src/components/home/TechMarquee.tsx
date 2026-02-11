
import React from 'react';

const TECH_STACK = [
    "REACT", "TYPESCRIPT", "NODE.JS", "GRAPHQL", "KUBERNETES", "AWS", "DOCKER", "TERRAFORM", "NEXT.JS", "TAILWIND", "REDIS", "POSTGRESQL", "PYTHON", "GO", "RUST"
];

const TechMarquee: React.FC = () => {
    return (
        <div className="py-12 bg-slate-100 dark:bg-black overflow-hidden relative border-y border-slate-200 dark:border-white/5">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-100 dark:from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-100 dark:from-black to-transparent z-10"></div>

            <div className="flex animate-marquee whitespace-nowrap">
                {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                    <div key={i} className="mx-8 md:mx-16 flex items-center group cursor-default">
                        <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-300 to-slate-100 dark:from-white/20 dark:to-white/5 group-hover:from-primary group-hover:to-secondary transition-all duration-500 uppercase tracking-tighter">
                            {tech}
                        </span>
                        <div className="w-2 h-2 bg-primary/20 rounded-full ml-16 md:ml-32"></div>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default TechMarquee;
