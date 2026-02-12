import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const RegionalPresence: React.FC = () => {
    const { t } = useTranslation(['contact']);

    const REGIONS = [
        { id: 'ksa', name: t('contact:regional.items.ksa.name'), city: t('contact:regional.items.ksa.city'), code: 'SA_R_01' },
        { id: 'uae', name: t('contact:regional.items.uae.name'), city: t('contact:regional.items.uae.city'), code: 'AE_AD_02' },
        { id: 'egy', name: t('contact:regional.items.egy.name'), city: t('contact:regional.items.egy.city'), code: 'EG_C_03' },
        { id: 'kwt', name: t('contact:regional.items.kwt.name'), city: t('contact:regional.items.kwt.city'), code: 'KW_KC_04' },
        { id: 'qat', name: t('contact:regional.items.qat.name'), city: t('contact:regional.items.qat.city'), code: 'QA_D_05' },
        { id: 'bHR', name: t('contact:regional.items.bHR.name'), city: t('contact:regional.items.bHR.city'), code: 'BH_M_06' },
        { id: 'omn', name: t('contact:regional.items.omn.name'), city: t('contact:regional.items.omn.city'), code: 'OM_M_07' },
    ];

    const [activeRegionId, setActiveRegionId] = useState('ksa');
    const activeRegion = REGIONS.find(r => r.id === activeRegionId) || REGIONS[0];

    return (
        <div className="border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-black p-1 transition-colors relative overflow-hidden group">
            <div className="absolute inset-0 grid-bg opacity-20"></div>

            {/* Header / Selector */}
            <div className="flex flex-wrap gap-1 p-2 border-b border-slate-200 dark:border-white/5 bg-white dark:bg-dark relative z-10">
                {REGIONS.map((region) => (
                    <button
                        key={region.id}
                        onClick={() => setActiveRegionId(region.id)}
                        className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all duration-300 border border-transparent ${activeRegion.id === region.id
                            ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                            : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-gray-400 hover:border-slate-300 dark:hover:border-white/20'
                            }`}
                    >
                        {region.name}
                    </button>
                ))}
            </div>

            {/* Map Container */}
            <div className="relative aspect-video w-full bg-slate-200 dark:bg-dark/50 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/10 text-white text-[10px] font-mono tracking-widest">
                    <span className="text-secondary mr-2">●</span>
                    {t('contact:regional.statusLive')} :: {activeRegion.city.toUpperCase()}
                </div>

                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/10 text-white text-[10px] font-mono tracking-widest">
                    ID: {activeRegion.code}
                </div>

                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                    title={`Map of ${activeRegion.city}, ${activeRegion.name}`}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(activeRegion.city + ', ' + activeRegion.name)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                ></iframe>

                {/* Overlay Effects */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 pointer-events-none border-[0.5px] border-white/5"></div>

                {/* Scanline */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] opacity-20"></div>
            </div>
        </div>
    );
};

export default RegionalPresence;
