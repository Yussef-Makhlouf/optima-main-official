import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface ProcessStepData {
    number: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface ProcessStepProps {
    step: ProcessStepData;
    index: number;
    isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, index, isLast = false }) => {
    const { i18n } = useTranslation();
    const isRtl = i18n.language === 'ar';
    const [isVisible, setIsVisible] = useState(false);
    const stepRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (stepRef.current) {
            observer.observe(stepRef.current);
        }

        return () => {
            if (stepRef.current) {
                observer.unobserve(stepRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={stepRef}
            className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className={`flex flex-col md:flex-row items-start gap-6 md:gap-8 ${isRtl ? 'md:flex-row-reverse' : ''}`}>
                {/* Number Circle */}
                <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-primary bg-white dark:bg-dark flex items-center justify-center relative z-10 transition-colors">
                        <span className="text-2xl md:text-3xl font-black text-primary">{step.number}</span>
                    </div>

                    {/* Connecting Line */}
                    {!isLast && (
                        <div className="absolute left-1/2 top-full w-0.5 h-24 md:h-32 -ml-px bg-gradient-to-b from-primary/40 to-transparent hidden md:block" />
                    )}
                </div>

                {/* Content */}
                <div className={`flex-1 pb-16 md:pb-24 ${isRtl ? 'text-right' : 'text-left'}`}>
                    <div className={`flex items-start gap-4 mb-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                        {step.icon && (
                            <div className="text-secondary mt-1">
                                {step.icon}
                            </div>
                        )}
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                            {step.title}
                        </h3>
                    </div>
                    <p className="text-base md:text-lg text-slate-600 dark:text-gray-400 leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProcessStep;
