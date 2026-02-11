
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
    Finance: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    Healthcare: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.423 3.977a6 6 0 00-8.485 0l-.938.938-.938-.938a6 6 0 00-8.485 8.485l.938.938 8.485 8.485 8.485-8.485.938-.938a6 6 0 000-8.485z" />
        </svg>
    ),
    Logistics: () => (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1" />
        </svg>
    ),
};

// --- Abnormal Illustrations ---
export const TechIllustrations = {
    CircuitDivider: () => (
        <svg className="w-full h-24 opacity-30" viewBox="0 0 1000 100" fill="none">
            <path d="M0 50H200L220 30H400L420 70H600L620 50H1000" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="200" cy="50" r="3" fill="currentColor" />
            <circle cx="220" cy="30" r="3" fill="currentColor" />
            <circle cx="420" cy="70" r="3" fill="currentColor" />
            <circle cx="620" cy="50" r="3" fill="currentColor" />
        </svg>
    ),
    PacketFlow: () => (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            {[...Array(10)].map((_, i) => (
                <div
                    key={i}
                    className="data-stream"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 5}s`
                    }}
                />
            ))}
        </div>
    )
};

export const SERVICES: ServiceInfo[] = [
    {
        id: 'hosting',
        slug: 'scalable-infrastructure',
        title: 'Scalable Infrastructure',
        tag: 'Infrastructure',
        icon: <Icons.Hosting />,
        description: "Our managed cloud ecosystems are built on the principles of high-availability and elastic redundancy.",
        longDescription: "In the modern enterprise landscape, downtime is catastrophic. OPTIMA Solutions provides a managed hosting environment that treats reliability as an engineering challenge, not just a promise. We leverage multi-cloud failover, global edge propagation, and tier-4 data center standards to ensure your application remains accessible 100% of the time, regardless of traffic surges or regional disruptions.",
        features: ["Distributed Load Balancing", "Multi-Region Redundancy", "Dedicated Security Layers", "99.99% Uptime SLA"],
        technicalSpecs: ["SOC2 Type II Compliant", "PCI-DSS Level 1", "Global CDN Nodes: 150+", "Bare-metal performance options"],
        technicalCode: "SYS_INFRA_RES_01",
        processSteps: [
            {
                number: "01",
                title: "Infrastructure Audit",
                description: "We analyze your current infrastructure, identify bottlenecks, and map out scalability requirements for your specific workload patterns.",
                icon: <Icons.Security />
            },
            {
                number: "02",
                title: "Architecture Design",
                description: "Our team designs a multi-region, fault-tolerant architecture with automated failover mechanisms and optimized resource allocation.",
                icon: <Icons.Network />
            },
            {
                number: "03",
                title: "Migration & Deployment",
                description: "Zero-downtime migration of your applications to the new infrastructure with comprehensive testing at each stage.",
                icon: <Icons.DigitalTransform />
            },
            {
                number: "04",
                title: "Monitoring & Optimization",
                description: "24/7 monitoring with real-time alerts, continuous performance optimization, and proactive scaling based on traffic patterns.",
                icon: <Icons.Scalability />
            }
        ],
        faqs: [
            {
                question: "What is your guaranteed uptime SLA?",
                answer: "We provide a 99.99% uptime SLA, which translates to less than 1 hour of downtime per year. Our multi-region architecture ensures automatic failover in case of any infrastructure issues."
            },
            {
                question: "How quickly can you scale during traffic spikes?",
                answer: "Our auto-scaling infrastructure can provision additional resources within seconds. We've successfully handled traffic increases of 1000% during client product launches and major campaigns."
            },
            {
                question: "Do you support hybrid cloud deployments?",
                answer: "Yes, we specialize in hybrid cloud architectures that seamlessly integrate on-premise infrastructure with cloud resources, providing the best of both worlds for security-sensitive workloads."
            },
            {
                question: "What security certifications do you maintain?",
                answer: "We maintain SOC2 Type II, PCI-DSS Level 1, ISO 27001, and HIPAA compliance. All data is encrypted at rest and in transit using AES-256-GCM encryption."
            }
        ],
        relatedProjects: ['stellaris-bank-core-infrastructure', 'aura-logistics-digital-twin']
    },
    {
        id: 'web-dev',
        slug: 'enterprise-platforms',
        title: 'Enterprise Platforms',
        tag: 'Engineering',
        icon: <Icons.WebDev />,
        description: "High-performance digital presence platforms engineered for corporate scale.",
        longDescription: "A corporate website is the digital front door of your organization. We build platforms that combine aesthetic authority with technical precision. Our engineering team focuses on performance-first frontends using modern frameworks (React, Next.js) integrated with headless CMS architectures. This results in blazing fast load times, superior SEO, and a design-system driven approach that scales across your entire digital portfolio.",
        features: ["Headless CMS Integration", "Performance-first Frontend", "Global Edge Propagation", "Strategic UI Roadmaps"],
        technicalSpecs: ["Web Vitals Optimization", "Accessibility (A11y) L3", "Internationalization (i18n)", "Static Site Generation"],
        technicalCode: "SYS_PLAT_ENG_02",
        processSteps: [
            {
                number: "01",
                title: "Discovery & Research",
                description: "Understanding your brand, audience, and business objectives through stakeholder interviews and competitive analysis.",
                icon: <Icons.Globe />
            },
            {
                number: "02",
                title: "Design System Creation",
                description: "Building a comprehensive design system with reusable components, ensuring consistency across all digital touchpoints.",
                icon: <Icons.WebDev />
            },
            {
                number: "03",
                title: "Development & Integration",
                description: "Implementing the frontend with modern frameworks, integrating with headless CMS, and optimizing for performance.",
                icon: <Icons.Hosting />
            },
            {
                number: "04",
                title: "Testing & Launch",
                description: "Comprehensive testing across devices and browsers, performance optimization, and smooth deployment to production.",
                icon: <Icons.Check />
            }
        ],
        faqs: [
            {
                question: "What CMS platforms do you work with?",
                answer: "We specialize in headless CMS solutions including Contentful, Sanity, Strapi, and WordPress (headless). We'll recommend the best fit based on your content management needs and team capabilities."
            },
            {
                question: "How do you ensure optimal performance?",
                answer: "We employ advanced techniques like code splitting, lazy loading, image optimization, static site generation, and CDN distribution. All our websites score 90+ on Google PageSpeed Insights."
            },
            {
                question: "Can you redesign an existing website?",
                answer: "Absolutely. We excel at modernizing legacy websites while preserving SEO rankings and migrating existing content. We ensure zero business disruption during the transition."
            }
        ],
        relatedProjects: ['neogen-bio-genomic-visualization']
    },
    {
        id: 'apps',
        slug: 'intelligent-workflow',
        title: 'Intelligent Workflow',
        tag: 'Applications',
        icon: <Icons.WebApp />,
        description: "Bespoke software solutions built to bridge legacy gaps and automate your business.",
        longDescription: "Complex business problems require architectural thinking. Our application development service focuses on creating custom tools that integrate with your existing enterprise systems. We specialize in building SaaS platforms, ERP extensions, and real-time data visualization dashboards that transform scattered spreadsheets into actionable, secure, and automated operational assets.",
        features: ["API Ecosystem Design", "Real-time Data Processing", "SaaS Infrastructure", "Legacy Modernization"],
        technicalSpecs: ["GraphQL & RESTful APIs", "Real-time WebSockets", "Encrypted Data Pipelines", "Kubernetes Orchestration"],
        technicalCode: "SYS_APP_DEV_03",
        processSteps: [
            {
                number: "01",
                title: "Requirements Analysis",
                description: "Deep dive into your business processes, pain points, and workflow bottlenecks to identify automation opportunities.",
                icon: <Icons.Network />
            },
            {
                number: "02",
                title: "System Architecture",
                description: "Designing scalable microservices architecture with API-first approach and integration plans for existing systems.",
                icon: <Icons.Hosting />
            },
            {
                number: "03",
                title: "Agile Development",
                description: "Iterative development with bi-weekly sprints, continuous integration, and regular stakeholder demonstrations.",
                icon: <Icons.DigitalTransform />
            },
            {
                number: "04",
                title: "Deployment & Training",
                description: "Containerized deployment, comprehensive documentation, and hands-on training for your team.",
                icon: <Icons.Check />
            }
        ],
        faqs: [
            {
                question: "How do you handle integration with legacy systems?",
                answer: "We've extensive experience with legacy system integration using APIs, database connectors, and middleware. We ensure data integrity and create robust error handling mechanisms."
            },
            {
                question: "What's your typical development timeline?",
                answer: "Most custom applications take 3-6 months from requirements to launch. We use agile methodology with 2-week sprints, allowing you to see progress and provide feedback continuously."
            },
            {
                question: "Do you provide ongoing maintenance?",
                answer: "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, feature enhancements, and 24/7 support SLAs tailored to your needs."
            }
        ],
        relatedProjects: ['neogen-bio-genomic-visualization', 'aura-logistics-digital-twin']
    }
];

export const TEAM = [
    {
        id: 't1',
        name: 'Yussef_Makhlouf',
        role: 'Chief Architect',
        bio: 'Former infrastructure lead at massive-scale fintech. Specializes in zero-downtime migration strategies.',
        code: 'ARCH_LEAD_01',
        image: '/about.png' // Utilizing existing asset as placeholder if needed, or specific team images
    },
    {
        id: 't2',
        name: 'Eslam_Hussien',
        role: 'Head of Engineering',
        bio: ' rigorous focus on code quality and automated testing pipelines. 15+ years in systems programming.',
        code: 'ENG_HEAD_02',
        image: '/about.png'
    },
    {
        id: 't3',
        name: 'Mohamed_Hosny',
        role: 'Security Ops',
        bio: 'Dedicated to proactive threat modeling and defensive architecture. Certified CISSP.',
        code: 'SEC_OPS_03',
        image: '/about.png'
    },
    {
        id: 't4',
        name: 'Mahmoud_Taha',
        role: 'Product Strategy',
        bio: 'Bridging the gap between technical capability and business objectives. Data-driven decision making.',
        code: 'PROD_STRAT_04',
        image: '/about.png'
    }
];


export const PROJECTS: ProjectInfo[] = [
    {
        id: 'p1',
        slug: 'stellaris-bank-core-infrastructure',
        client: 'Stellaris Bank',
        title: 'Core Banking Infrastructure',
        description: 'A complete overhaul of their high-frequency transaction environment using cloud-native architectures.',
        longDescription: 'Stellaris Bank faced critical bottlenecks during peak trading hours. We redesigned their core infrastructure from the ground up, implementing a private cloud environment that utilizes distributed ledgers and microservices to handle over 100,000 transactions per second with sub-millisecond latency.',
        challenge: "Scaling legacy monolithic architectures to support modern high-frequency trading demands without sacrificing security or uptime.",
        solution: "Transition to a zero-trust, microservices-based cloud architecture with automated scaling and real-time fraud detection pipelines.",
        impact: "99% reduction in transaction latency, 100% uptime during record-breaking traffic events, and enhanced regulatory compliance visibility.",
        tags: ['Cloud', 'Security', 'FinTech'],
        color: '#145D90',
        gallery: [
            {
                url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
                title: 'Trading Dashboard',
                description: 'Real-time trading interface with microsecond latency'
            },
            {
                url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
                title: 'Analytics Platform',
                description: 'Advanced data visualization and reporting'
            },
            {
                url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
                title: 'Security Console',
                description: 'Zero-trust security monitoring dashboard'
            }
        ],
        techStack: [
            {
                category: 'Infrastructure',
                technologies: [
                    { name: 'Kubernetes', color: '#326CE5' },
                    { name: 'Docker', color: '#2496ED' },
                    { name: 'AWS', color: '#FF9900' },
                    { name: 'Terraform', color: '#7B42BC' }
                ]
            },
            {
                category: 'Backend',
                technologies: [
                    { name: 'Node.js', color: '#339933' },
                    { name: 'GraphQL', color: '#E10098' },
                    { name: 'PostgreSQL', color: '#4169E1' },
                    { name: 'Redis', color: '#DC382D' }
                ]
            },
            {
                category: 'Security',
                technologies: [
                    { name: 'OAuth 2.0', color: '#145D90' },
                    { name: 'AES-256', color: '#56A5DD' },
                    { name: 'TLS 1.3', color: '#145D90' }
                ]
            }
        ],
        timeline: [
            {
                date: 'Q1 2024',
                title: 'Discovery & Planning',
                description: 'Infrastructure audit and architecture design',
                status: 'completed'
            },
            {
                date: 'Q2 2024',
                title: 'Development',
                description: 'Microservices implementation and security integration',
                status: 'completed'
            },
            {
                date: 'Q3 2024',
                title: 'Testing & Migration',
                description: 'Load testing and zero-downtime migration',
                status: 'completed'
            },
            {
                date: 'Q4 2024',
                title: 'Launch & Optimization',
                description: 'Production deployment and performance tuning',
                status: 'completed'
            }
        ]
    },
    {
        id: 'p2',
        slug: 'neogen-bio-genomic-visualization',
        client: 'NeoGen Bio',
        title: 'Genomic Data Visualization',
        description: 'A custom web application allowing real-time collaboration on petabyte-scale genetic sequencing data.',
        longDescription: 'NeoGen Bio needed a way for researchers across four continents to collaborate on massive genomic datasets. We developed a custom web application that streams data segments on-demand, allowing researchers to visualize and annotate complex DNA strands in real-time through a secure browser interface.',
        challenge: "Rendering and collaborating on petabyte-scale data files over standard internet connections without data loss or significant lag.",
        solution: "A bespoke data-segmentation engine that streams only visible segments to the browser, combined with a WebSocket-driven collaboration layer.",
        impact: "Researchers reduced analysis time by 40% and enabled the first global real-time collaboration on the Human Genome v4 project.",
        tags: ['Web App', 'BioTech', 'Big Data'],
        color: '#56A5DD'
    },
    {
        id: 'p3',
        slug: 'aura-logistics-digital-twin',
        client: 'Aura Logistics',
        title: 'Supply Chain Digital Twin',
        description: 'End-to-end digital transformation of their global logistics network using IoT and real-time dashboards.',
        longDescription: 'Aura Logistics operated with a fragmented view of their global fleet. We implemented an IoT-integrated digital twin platform that provides a real-time, 3D visualization of their entire supply chain, from container temperatures in the Atlantic to truck locations in Berlin.',
        challenge: "Consolidating thousands of disparate data points from third-party shippers, internal GPS units, and environmental sensors into a single source of truth.",
        solution: "Development of a unified data lake integrated with a WebGL-based 3D globe visualization tool and automated alerting systems.",
        impact: "Optimized route efficiency by 15%, reduced inventory shrinkage by 22%, and provided clients with real-time transparency for the first time.",
        tags: ['Transformation', 'IoT', 'Logistics'],
        color: '#162427'
    }
];

export const TESTIMONIALS = [
    {
        id: 't1',
        client: 'Stellaris Bank',
        role: 'CTO',
        text: "OPTIMA's infrastructure redesign reduced our transaction latency by 99%. They don't just write code; they architect resilience.",
        location: "London, UK",
        encrypted: "SECURE_TRANSMISSION_VERIFIED"
    },
    {
        id: 't2',
        client: 'NeoGen Bio',
        role: 'Head of Research',
        text: "The genomic visualization platform allows us to collaborate in real-time on datasets that used to take days to transfer.",
        location: "Boston, USA",
        encrypted: "BIO_DATA_STREAM_ACTIVE"
    },
    {
        id: 't3',
        client: 'Aura Logistics',
        role: 'Director of Ops',
        text: "We now have complete visibility over our global fleet. The digital twin implementation is a game-changer for our efficiency.",
        location: "Berlin, DE",
        encrypted: "LOGISTICS_NET_ONLINE"
    },
    {
        id: 't4',
        client: 'CyberDyne Systems',
        role: 'Lead Engineer',
        text: "Their security protocols are unmatched. We've seen a 0% breach rate since implementing their zero-trust architecture.",
        location: "Silicon Valley, USA",
        encrypted: "SYS_SECURITY_MAX"
    }
];

