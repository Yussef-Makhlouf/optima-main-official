
import React from 'react';
import { ServiceInfo, ProjectInfo } from '../types';

export const COLORS = {
    primary: '#145D90',
    secondary: '#56A5DD',
    dark: '#162427',
    white: '#FFFFFF',
    gray: '#E2E8F0',
};

export const Icons = {
    Hosting: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
    ),
    WebDev: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
    ),
    Network: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
    ),
    WebApp: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
    ),
    DigitalTransform: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
    ),
    ArrowRight: () => (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
    ),
    Security: () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    ),
    Scalability: () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
    ),
    Globe: () => (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
    ),
    Check: () => (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
    ),
    WordPress: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a3 3 0 01-3-3v-4a3 3 0 016 0v4a3 3 0 01-3 3zM3 9a3 3 0 013-3h14a3 3 0 013 3v6a3 3 0 01-3 3H6a3 3 0 01-3-3V9z" />
        </svg>
    ),
    Domain: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
    ),
    Support: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
    ),
    Finance: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    Healthcare: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    ),
    Logistics: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    Construction: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
    ),
    RealEstate: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
    ),
    Sports: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    Technology: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    ),
    Marketing: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
    ),
    Education: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
    ),
    Ecommerce: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
    ),
};

export const SERVICES: any[] = [
    {
        id: 'web-dev',
        slug: 'professional-website-development',
        icon: <Icons.WebDev />,
        features: ["design", "responsive", "seo", "performance", "cms"],
        technicalCode: "SERVICE_WEB_01",
        technicalSpecs: ["tech", "vitals", "accessibility", "i18n"],
        processSteps: [
            { number: "01", key: "step1", icon: <Icons.Globe /> },
            { number: "02", key: "step2", icon: <Icons.WebDev /> },
            { number: "03", key: "step3", icon: <Icons.Hosting /> },
            { number: "04", key: "step4", icon: <Icons.Check /> }
        ],
        faqs: ["q1", "q2", "q3"],
        relatedProjects: ['uae-mma-federation', 'golden-moon-agency']
    },
    {
        id: 'web-apps',
        slug: 'custom-web-applications',
        icon: <Icons.WebApp />,
        features: ["custom", "api", "automation", "dashboard", "security"],
        technicalCode: "SERVICE_APPS_02",
        technicalSpecs: ["frontend", "backend", "auth", "realtime"],
        processSteps: [
            { number: "01", key: "step1", icon: <Icons.Network /> },
            { number: "02", key: "step2", icon: <Icons.Hosting /> },
            { number: "03", key: "step3", icon: <Icons.DigitalTransform /> },
            { number: "04", key: "step4", icon: <Icons.Check /> }
        ],
        faqs: ["q1", "q2", "q3"],
        relatedProjects: ['technova-ai', 'artat-company']
    },
    {
        id: 'wordpress',
        slug: 'wordpress-migration',
        icon: <Icons.WordPress />,
        features: ["migration", "seo", "performance", "security", "modern"],
        technicalCode: "SERVICE_MIGRATION_03",
        technicalSpecs: ["stack", "migration", "speed"],
        processSteps: [
            { number: "01", key: "step1", icon: <Icons.Security /> },
            { number: "02", key: "step2", icon: <Icons.WebDev /> },
            { number: "03", key: "step3", icon: <Icons.Hosting /> },
            { number: "04", key: "step4", icon: <Icons.Check /> }
        ],
        faqs: ["q1", "q2", "q3", "q4"],
        relatedProjects: ['Ghanpha-interior', 'raf-construction']
    },
    {
        id: 'hosting',
        slug: 'managed-hosting',
        icon: <Icons.Hosting />,
        features: ["uptime", "backup", "security", "cdn", "ssl"],
        technicalCode: "SERVICE_HOSTING_04",
        technicalSpecs: ["server", "monitoring", "support"],
        processSteps: [
            { number: "01", key: "step1", icon: <Icons.Security /> },
            { number: "02", key: "step2", icon: <Icons.Hosting /> },
            { number: "03", key: "step3", icon: <Icons.Network /> },
            { number: "04", key: "step4", icon: <Icons.Scalability /> }
        ],
        faqs: ["q1", "q2", "q3"],
        relatedProjects: ['emmar-elevators', 'uae-mma-federation']
    },
    {
        id: 'domain',
        slug: 'domain-email-management',
        icon: <Icons.Domain />,
        features: ["domain", "email", "forwarding", "dns", "privacy"],
        technicalCode: "SERVICE_DOMAIN_05",
        technicalSpecs: ["mail", "protection"],
        processSteps: [
            { number: "01", key: "step1", icon: <Icons.Globe /> },
            { number: "02", key: "step2", icon: <Icons.Security /> },
            { number: "03", key: "step3", icon: <Icons.Hosting /> },
            { number: "04", key: "step4", icon: <Icons.Check /> }
        ],
        faqs: ["q1", "q2"],
        relatedProjects: ['tarmeez-tech', 'golden-moon-agency']
    },
    {
        id: 'support',
        slug: 'technical-support',
        icon: <Icons.Support />,
        features: ["maintenance", "monitoring", "backup", "updates", "consulting"],
        technicalCode: "SERVICE_SUPPORT_06",
        technicalSpecs: ["response", "hours"],
        processSteps: [
            { number: "01", key: "step1", icon: <Icons.Security /> },
            { number: "02", key: "step2", icon: <Icons.Network /> },
            { number: "03", key: "step3", icon: <Icons.DigitalTransform /> },
            { number: "04", key: "step4", icon: <Icons.Scalability /> }
        ],
        faqs: ["q1", "q2"],
        relatedProjects: ['tarmeez-tech', 'emmar-elevators']
    }
];

export const TEAM = [
    {
        id: 't1',
        name: 'Yussef_Makhlouf',
        role: 'Founder & CTO',
        bio: 'Web development expert with years of experience building digital platforms for the GCC market. Specialized in Next.js and React.',
        code: 'ARCH_LEAD_01',
        image: '/about.png'
    },
    {
        id: 't2',
        name: 'Eslam_Hussien',
        role: 'Head of Engineering',
        bio: 'Software engineering specialist building scalable systems. Extensive experience in Node.js and MongoDB.',
        code: 'ENG_HEAD_02',
        image: '/about.png'
    },
    {
        id: 't3',
        name: 'Mohamed_Hosny',
        role: 'Project Manager',
        bio: 'Technical project management expert ensuring on-time delivery. Ensures client satisfaction and quality execution.',
        code: 'SEC_OPS_03',
        image: '/about.png'
    },
    {
        id: 't4',
        name: 'Mahmoud_Taha',
        role: 'Product Strategy',
        bio: 'Specializes in turning technical visions into successful strategies. Bridges technology and business objectives.',
        code: 'PROD_STRAT_04',
        image: '/about.png'
    },
    {
        id: 't5',
        name: 'Momen_Ahmed',
        role: 'UI/UX Designer',
        bio: 'Experience in modern user interface and exceptional user experience design. Combines beauty with functionality.',
        code: 'UI_UX_05',
        image: '/about.png'
    },
    {
        id: 't6',
        name: 'Mohamed_Fahmy',
        role: 'Head of Sales',
        bio: 'Sales and business development expert with a focus on the GCC market. Dedicated to building strong client partnerships and driving digital growth.',
        code: 'SALES_HEAD_06',
        image: '/about.png'
    }
];

export const PROJECTS: ProjectInfo[] = [
    {
        id: 'p1',
        slug: 'uae-mma-federation',
        client: 'UAE MMA Federation',
        title: 'Official Federation Website',
        description: 'Design and development of the official federation website.',
        longDescription: 'We are proud to develop the official website for the UAE MMA Federation in Abu Dhabi. The website provides a seamless user experience and displays all federation events professionally.',
        challenge: 'Need for an official website that reflects the federation\'s stature and provides comprehensive information.',
        solution: 'We designed and built a comprehensive website including event pages, player registration system, federation news, and electronic ticketing system.',
        impact: 'Increase in monthly visitors, improved user experience, and efficient event management system.',
        tags: ['Web Dev', 'Sports', 'Portal'],
        color: '#145D90',
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=800',
                title: 'Federation Homepage',
                description: 'Modern homepage with event showcase'
            },
            {
                url: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=800',
                title: 'Event Calendar',
                description: 'Upcoming events and championships'
            }
        ],
        techStack: [
            {
                category: 'Frontend',
                description: 'Modern responsive frontend for better user experience.',
                technologies: [
                    {
                        name: 'Next.js',
                        description: 'React framework for production.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                        color: '#000000'
                    },
                    {
                        name: 'React',
                        description: 'UI library for building interfaces.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                        color: '#61DAFB'
                    },
                    {
                        name: 'TailwindCSS',
                        description: 'Utility-first CSS framework.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
                        color: '#06B6D4'
                    }
                ]
            },
            {
                category: 'Backend',
                description: 'Robust backend for content management.',
                technologies: [
                    {
                        name: 'Node.js',
                        description: 'JavaScript runtime for server.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                        color: '#339933'
                    },
                    {
                        name: 'MongoDB',
                        description: 'NoSQL database for flexible content.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                        color: '#47A248'
                    }
                ]
            }
        ],
        timeline: [
            {
                date: 'Q1 2024',
                title: 'Discovery',
                description: 'Requirements gathering and planning',
                status: 'completed'
            },
            {
                date: 'Q2 2024',
                title: 'Development',
                description: 'Design and implementation',
                status: 'completed'
            },
            {
                date: 'Q3 2024',
                title: 'Launch',
                description: 'Testing and deployment',
                status: 'completed'
            }
        ]
    },
    {
        id: 'p2',
        slug: 'technova-ai',
        client: 'TECHNOVA',
        title: 'AI Products Showcase Platform',
        description: 'Platform for showcasing AI products and solutions.',
        longDescription: 'We provided TECHNOVA with a comprehensive digital solution that showcases their innovations in artificial intelligence in an innovative and professional manner.',
        challenge: 'Need for a modern platform to showcase AI products and company solutions.',
        solution: 'We built an advanced platform that displays products in an attractive way with an interactive system.',
        impact: 'Improved digital brand image, increased product interest, and successful digital transformation.',
        tags: ['Web Dev', 'AI', 'Design'],
        color: '#56A5DD',
        techStack: [
            {
                category: 'Frontend',
                description: 'Interactive frontend for product showcase.',
                technologies: [
                    {
                        name: 'Next.js',
                        description: 'React framework for production.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                        color: '#000000'
                    },
                    {
                        name: 'React',
                        description: 'UI library for building interfaces.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                        color: '#61DAFB'
                    },
                    {
                        name: 'TailwindCSS',
                        description: 'Utility-first CSS framework.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
                        color: '#06B6D4'
                    }
                ]
            }
        ]
    },
    {
        id: 'p3',
        slug: 'artat-company',
        client: 'Artat Company',
        title: 'Livestock Management System',
        description: 'Comprehensive management system for horse farms.',
        longDescription: 'We are proud to develop a comprehensive management system for horse farms and livestock for Artat Company. The system includes all necessary functions for efficient farm management.',
        challenge: 'Need for an integrated system for managing horse farms and livestock.',
        solution: 'We built a comprehensive livestock management system including horse management, veterinary records, and inventory.',
        impact: 'Improved farm management efficiency, time and effort savings, improved tracking and statistics.',
        tags: ['Web App', 'Agriculture', 'Management'],
        color: '#162427',
        techStack: [
            {
                category: 'Full Stack',
                description: 'Complete solution for farm management.',
                technologies: [
                    {
                        name: 'React',
                        description: 'Frontend framework for dashboard.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                        color: '#61DAFB'
                    },
                    {
                        name: 'Node.js',
                        description: 'Backend API development.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                        color: '#339933'
                    },
                    {
                        name: 'MongoDB',
                        description: 'Database for farm data.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                        color: '#47A248'
                    }
                ]
            }
        ]
    },
    {
        id: 'p4',
        slug: 'raf-construction',
        client: 'raf Construction',
        title: 'Project Management Platform',
        description: 'Platform for showcasing construction projects.',
        longDescription: 'We provided raf Construction with an integrated digital platform that showcases their construction projects and manages projects professionally.',
        challenge: 'Need for a platform to showcase company projects and manage projects digitally.',
        solution: 'We designed a comprehensive platform that showcases projects and reflects professionalism.',
        impact: 'Improved company image, ease of showcasing work to new clients.',
        tags: ['Web Dev', 'Construction', 'Portfolio'],
        color: '#145D90',
        techStack: [
            {
                category: 'Frontend',
                description: 'Modern frontend for portfolio showcase.',
                technologies: [
                    {
                        name: 'Next.js',
                        description: 'React framework for production.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                        color: '#000000'
                    },
                    {
                        name: 'React',
                        description: 'UI library.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                        color: '#61DAFB'
                    },
                    {
                        name: 'TailwindCSS',
                        description: 'Utility-first CSS framework.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
                        color: '#06B6D4'
                    }
                ]
            }
        ]
    },
    {
        id: 'p5',
        slug: 'Ghanpha-interior',
        client: 'Ghanpha Interior Design',
        title: 'Digital Portfolio',
        description: 'Professional digital portfolio for interior design.',
        longDescription: 'We provided Ghanpha Interior Design with an innovative digital portfolio that showcases their designs in an artistic and professional manner.',
        challenge: 'Need for a digital portfolio to showcase company work attractively.',
        solution: 'We designed a professional digital portfolio with gallery integration.',
        impact: 'Increase in potential clients, improved digital image.',
        tags: ['Web Dev', 'Design', 'Portfolio'],
        color: '#56A5DD',
        techStack: [
            {
                category: 'Frontend',
                description: 'Gallery-focused frontend.',
                technologies: [
                    {
                        name: 'Next.js',
                        description: 'React framework.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                        color: '#000000'
                    },
                    {
                        name: 'React',
                        description: 'UI library.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                        color: '#61DAFB'
                    },
                    {
                        name: 'TailwindCSS',
                        description: 'CSS framework.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
                        color: '#06B6D4'
                    }
                ]
            }
        ]
    },
    {
        id: 'p6',
        slug: 'golden-moon-agency',
        client: 'Golden Moon Agency',
        title: 'Digital Marketing Agency Website',
        description: 'Website for digital marketing agency.',
        longDescription: 'We provided Golden Moon Agency in Jeddah with a digital website that reflects creative creativity and attracts clients.',
        challenge: 'Need for a website that reflects the agency\'s creativity.',
        solution: 'We designed a creative website with animations.',
        impact: 'Improved digital image, increase in client inquiries.',
        tags: ['Web Dev', 'Marketing', 'Design'],
        color: '#162427',
        techStack: [
            {
                category: 'Frontend',
                description: 'Creative frontend with animations.',
                technologies: [
                    {
                        name: 'Next.js',
                        description: 'React framework.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                        color: '#000000'
                    },
                    {
                        name: 'React',
                        description: 'UI library.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                        color: '#61DAFB'
                    },
                    {
                        name: 'TailwindCSS',
                        description: 'CSS framework.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
                        color: '#06B6D4'
                    }
                ]
            }
        ]
    },
    {
        id: 'p7',
        slug: 'emmar-elevators',
        client: 'Emmar Elevators',
        title: 'Company Platform & Admin Dashboard',
        description: 'Company website with administrative dashboard.',
        longDescription: 'We provided Emmar Elevators with an integrated digital platform including the official website and administrative dashboard.',
        challenge: 'Need for company website and administrative dashboard.',
        solution: 'We designed a professional website with admin dashboard.',
        impact: 'Improved operational efficiency, ease of project management.',
        tags: ['Web Dev', 'Admin', 'Dashboard'],
        color: '#145D90',
        techStack: [
            {
                category: 'Full Stack',
                description: 'Complete solution with admin panel.',
                technologies: [
                    {
                        name: 'Next.js',
                        description: 'React framework.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
                        color: '#000000'
                    },
                    {
                        name: 'React',
                        description: 'Frontend framework.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                        color: '#61DAFB'
                    },
                    {
                        name: 'Node.js',
                        description: 'Backend API.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                        color: '#339933'
                    }
                ]
            }
        ]
    },
    {
        id: 'p8',
        slug: 'tarmeez-tech',
        client: 'Tarmeez Tech',
        title: 'Software Development Projects',
        description: 'Joint software development projects.',
        longDescription: 'We work with Tarmeez Tech in a strategic partnership to develop advanced software solutions.',
        challenge: 'Developing innovative software solutions.',
        solution: 'Strategic collaboration in software projects.',
        impact: 'Successful ongoing partnership, multiple successful projects.',
        tags: ['Web App', 'Software', 'Development'],
        color: '#56A5DD',
        techStack: [
            {
                category: 'Development',
                description: 'Various technologies for different projects.',
                technologies: [
                    {
                        name: 'React',
                        description: 'Frontend framework.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
                        color: '#61DAFB'
                    },
                    {
                        name: 'Node.js',
                        description: 'Backend runtime.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
                        color: '#339933'
                    },
                    {
                        name: 'MongoDB',
                        description: 'Database.',
                        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
                        color: '#47A248'
                    }
                ]
            }
        ]
    }
];

export const TESTIMONIALS = [
    {
        id: 't1',
        client: 'UAE MMA Federation',
    },
    {
        id: 't2',
        client: 'TECHNOVA',
    },
    {
        id: 't3',
        client: 'Artat Company',
    },
    {
        id: 't4',
        client: 'raf Construction',
    }
];

export const TechIllustrations = {
    PacketFlow: () => (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <svg className="w-full h-full opacity-20 text-primary" viewBox="0 0 800 600" preserveAspectRatio="none">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path d="M0 300 C 200 100, 600 500, 800 300" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                <circle r="4" fill="#00FFCC">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M0 300 C 200 100, 600 500, 800 300" />
                </circle>
                <path d="M0 400 C 300 500, 500 100, 800 200" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                <circle r="3" fill="#56A5DD">
                    <animateMotion dur="6s" repeatCount="indefinite" path="M0 400 C 300 500, 500 100, 800 200" />
                </circle>
            </svg>
        </div>
    )
};

