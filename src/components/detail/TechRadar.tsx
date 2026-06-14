import React from 'react';
import { motion } from 'framer-motion';

interface TechRadarProps {
    techStack: string[];
}

const TechRadar: React.FC<TechRadarProps> = ({ techStack }) => {
    // Generate fixed angles for items
    const getPosition = (index: number, total: number, radius: number) => {
        const angle = (index / total) * Math.PI * 2;
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
        };
    };

    return (
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-slate-900/50 dark:bg-black/50 border border-primary/10 rounded-sm">
            {/* Radar Grid Lines */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="absolute w-[200px] h-[200px] border border-primary rounded-full" />
                <div className="absolute w-[300px] h-[300px] border border-primary rounded-full" />
                <div className="absolute w-[400px] h-[400px] border border-primary rounded-full" />
                <div className="absolute w-full h-[1px] bg-primary" />
                <div className="absolute h-full w-[1px] bg-primary" />
            </div>

            {/* Scanning line */}
            <motion.div 
                className="absolute top-1/2 left-1/2 w-[200px] h-[200px] border-t border-cyber rounded-full origin-top-left pointer-events-none"
                style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0, 240, 255, 0.2) 90deg, transparent 90deg)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Central Node */}
            <div className="absolute w-16 h-16 bg-primary/20 backdrop-blur-md border border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.5)]">
                <span className="font-mono text-[9px] text-white font-bold tracking-widest text-center uppercase">CORE<br/>SYS</span>
            </div>

            {/* Orbiting Tech Nodes */}
            {techStack.slice(0, 12).map((tech, i) => {
                const isInner = i % 2 === 0;
                const radius = isInner ? 100 : 150;
                const pos = getPosition(i, Math.min(12, techStack.length), radius);
                
                return (
                    <motion.div
                        key={tech}
                        className="absolute z-20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1, x: pos.x, y: pos.y }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 50 }}
                        whileHover={{ scale: 1.2, zIndex: 30 }}
                    >
                        <div className="group relative flex flex-col items-center justify-center cursor-crosshair">
                            <div className={`w-3 h-3 rounded-full ${isInner ? 'bg-cyber shadow-[0_0_10px_#00f0ff]' : 'bg-primary shadow-[0_0_10px_#0047FF]'} mb-2`} />
                            <span className="absolute top-4 w-max px-2 py-1 bg-black/80 border border-white/10 text-[9px] font-mono text-white rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                {tech}
                            </span>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default TechRadar;
