import React from 'react';
import { motion } from 'framer-motion';

interface DeviceShowcaseProps {
    url?: string;
    title: string;
}

const DeviceShowcase: React.FC<DeviceShowcaseProps> = ({ url, title }) => {
    return (
        <div className="relative w-full max-w-5xl mx-auto py-12">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative bg-slate-900 rounded-t-xl rounded-b-md shadow-2xl shadow-black/50 overflow-hidden border border-slate-800"
            >
                {/* Mac Window Header */}
                <div className="h-8 bg-slate-950 flex items-center px-4 border-b border-slate-800">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-1 text-center font-mono text-[9px] text-slate-500 tracking-widest uppercase">
                        {title} — DEV_ENV
                    </div>
                </div>

                {/* Window Content */}
                <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                    {url ? (
                        <iframe 
                            src={url} 
                            className="absolute inset-0 w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity duration-500"
                            title={`${title} preview`}
                            loading="lazy"
                        />
                    ) : (
                        <div className="absolute inset-0 grid-bg opacity-20 flex flex-col items-center justify-center">
                            <motion.div 
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-16 h-16 border-2 border-primary rounded-full mb-4 flex items-center justify-center"
                            >
                                <span className="w-8 h-8 bg-primary/20 rounded-full animate-ping"></span>
                            </motion.div>
                            <span className="font-mono text-xs text-primary tracking-[0.3em]">SYSTEM_STANDBY</span>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Base shadow/reflection */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-10 bg-primary/5 blur-2xl rounded-full pointer-events-none"></div>
        </div>
    );
};

export default DeviceShowcase;
