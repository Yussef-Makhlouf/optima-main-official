import React from 'react';

const BrandDecoration: React.FC<{ className?: string }> = ({ className = "absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none z-0" }) => (
    <div className={className}>
        <img
            src="/logos/optima-05-symbol-light.svg"
            className="w-[300px] md:w-[500px] lg:w-[700px] h-auto dark:hidden animate-[spin_120s_linear_infinite]"
            alt=""
        />
        <img
            src="/logos/optima-04-symbol-dark.svg"
            className="w-[300px] md:w-[500px] lg:w-[700px] h-auto hidden dark:block animate-[spin_120s_linear_infinite]"
            alt=""
        />
    </div>
);

export default BrandDecoration;
