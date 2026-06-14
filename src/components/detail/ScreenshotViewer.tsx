import React from 'react';
import { motion } from 'framer-motion';

interface ScreenshotViewerProps {
    title: string;
}

const ScreenshotViewer: React.FC<ScreenshotViewerProps> = ({ title }) => {
    // Generate abstract placeholder boxes since we don't have actual screenshot URLs in json
    const placeholders = [
        { id: 1, title: 'DASHBOARD_UI', delay: 0.1, size: 'col-span-12 md:col-span-8 row-span-2' },
        { id: 2, title: 'ANALYTICS_PANEL', delay: 0.2, size: 'col-span-12 md:col-span-4' },
        { id: 3, title: 'SYS_CONFIG', delay: 0.3, size: 'col-span-12 md:col-span-4' },
        { id: 4, title: 'DATA_TABLE', delay: 0.4, size: 'col-span-12 md:col-span-6' },
        { id: 5, title: 'USER_FLOW', delay: 0.5, size: 'col-span-12 md:col-span-6' },
    ];

    return (
        <div className="w-full">
            <div className="font-mono text-[10px] text-secondary tracking-[0.4em] mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-secondary mr-4"></span>
                VISUAL_SCHEMATICS // {title}
            </div>

            <div className="grid grid-cols-12 gap-4 auto-rows-[200px]">
                {placeholders.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: item.delay, duration: 0.5 }}
                        className={`relative ${item.size} group overflow-hidden bg-slate-900/40 dark:bg-black/40 border border-slate-200 dark:border-white/5 rounded-sm flex flex-col items-center justify-center cursor-crosshair hover:border-cyber/50 transition-colors`}
                    >
                        {/* Abstract grid background inside card */}
                        <div className="absolute inset-0 opacity-10" 
                             style={{ backgroundImage: 'linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                        </div>
                        
                        <div className="z-10 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyber transition-all">
                            <svg className="w-5 h-5 text-slate-500 group-hover:text-cyber transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <span className="z-10 font-mono text-[9px] text-slate-400 group-hover:text-white uppercase tracking-widest">{item.title}</span>
                        
                        {/* Scanline effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber/5 to-transparent h-[200%] -top-[100%] group-hover:animate-[scan_2s_linear_infinite] pointer-events-none opacity-0 group-hover:opacity-100"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ScreenshotViewer;
