import React from 'react';

interface LogoMarqueeProps {
    children: React.ReactNode;
    speed?: 'slow' | 'normal' | 'fast';
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
    className?: string;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({
    children,
    speed = 'normal',
    direction = 'left',
    pauseOnHover = true,
    className = ''
}) => {
    const speedClass = {
        slow: 'animate-marquee-slow',
        normal: 'animate-marquee',
        fast: 'animate-marquee-fast'
    }[speed];

    const directionClass = direction === 'right' ? 'flex-row-reverse' : '';

    return (
        <div className={`relative overflow-hidden group/marquee ${className}`}>
            {/* Side Fade Masks */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-white dark:from-dark to-transparent z-10 pointer-events-none transition-colors"></div>
            <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-white dark:from-dark to-transparent z-10 pointer-events-none transition-colors"></div>

            <div className={`flex w-max ${directionClass}`}>
                {/* First set of logos */}
                <div className={`flex items-center gap-12 md:gap-16 lg:gap-20 px-6 md:px-10 ${speedClass} ${pauseOnHover ? 'group-hover/marquee:pause-animation' : ''}`}>
                    {children}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className={`flex items-center gap-12 md:gap-16 lg:gap-20 px-6 md:px-10 ${speedClass} ${pauseOnHover ? 'group-hover/marquee:pause-animation' : ''}`} aria-hidden="true">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LogoMarquee;

