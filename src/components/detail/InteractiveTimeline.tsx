import React from 'react';
import ProcessStep, { ProcessStepData } from './ProcessStep';

interface InteractiveTimelineProps {
    steps: ProcessStepData[];
    title?: string;
    subtitle?: string;
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({
    steps,
    title = "PROCESS_FLOW.v2",
    subtitle = "How We Deliver Excellence"
}) => {
    return (
        <section className="py-24 md:py-40 bg-white dark:bg-dark transition-colors relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-20 md:mb-32 text-center">
                    <div className="text-[10px] md:text-xs font-mono font-bold text-secondary uppercase tracking-[0.5em] mb-4">
                        [ {title} ]
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                        {subtitle}
                    </h2>
                </div>

                {/* Timeline Steps */}
                <div className="relative">
                    {steps.map((step, index) => (
                        <ProcessStep
                            key={index}
                            step={step}
                            index={index}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InteractiveTimeline;
