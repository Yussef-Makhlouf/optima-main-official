
import React, { useState } from 'react';

const FAQ_DATA = [
    {
        question: "How do you ensure zero-downtime during infrastructure migration?",
        answer: "Our 'Shadow Infrastructure' protocol involves spinning up a parallel, identical environment alongside your legacy system. We use blue-green deployment strategies and real-time data replication to ensure that the final cutover happens in milliseconds, with zero service interruption to end-users."
    },
    {
        question: "What security compliance standards does OPTIMA Solutions adhere to?",
        answer: "OPTIMA Solutions is fully compliant with SOC2 Type II, PCI-DSS Level 1, and GDPR. Every architecture we deploy is built on a Zero-Trust framework, incorporating end-to-end encryption (AES-256) and hardware-backed security modules as baseline requirements."
    },
    {
        question: "Can your platforms handle seasonal traffic surges of 100x baseline?",
        answer: "Yes. Our 'Elastic Redundancy' architecture utilizes automated Kubernetes orchestration and global load balancing. Systems are configured to auto-scale across multiple geographic regions, ensuring performance remains stable even during extreme, unpredictable traffic events."
    },
    {
        question: "Do you offer custom API integrations for legacy ERP systems?",
        answer: "Our Engineering division specialized in 'Legacy Bridging'. we develop custom middleware and secure GraphQL layers that act as an interface between older mainframe systems (SAP, Oracle, COBOL-based) and modern cloud-native applications."
    },
    {
        question: "What is your response time for critical system alerts?",
        answer: "We operate a 24/7 Global Network Operations Center (GNOC). For critical tier-1 incidents, our SLA guarantees a 15-minute response time with active intervention from senior site-reliability engineers until the resolution is verified."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 md:py-40 bg-white dark:bg-dark transition-colors border-t border-slate-200 dark:border-white/5">
            <div className="max-w-4xl mx-auto px-6">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-[11px] font-mono text-secondary uppercase tracking-[0.6em] mb-6">[ SYSTEM_QUERIES ]</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-none">Frequently <br />Asked.</h3>
                </div>

                <div className="space-y-4">
                    {FAQ_DATA.map((item, index) => (
                        <div
                            key={index}
                            className={`border border-slate-200 dark:border-white/5 transition-all duration-500 overflow-hidden ${openIndex === index ? 'bg-slate-50 dark:bg-primary/5 border-primary/20' : 'bg-white dark:bg-transparent'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 md:p-8 flex items-center justify-center text-left group focus:outline-none"
                            >
                                <div className="flex-grow">
                                    <span className="text-lg md:text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                                        {item.question}
                                    </span>
                                </div>
                                <div className={`w-8 h-8 flex items-center justify-center border border-slate-300 dark:border-white/10 text-primary transition-transform duration-500 ${openIndex === index ? 'rotate-180 bg-primary text-white' : ''}`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                                </div>
                            </button>
                            <div
                                className={`transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                            >
                                <div className="p-6 md:p-8 pt-0 text-slate-500 dark:text-gray-400 font-light leading-relaxed text-base md:text-lg border-t border-slate-100 dark:border-white/5 mt-2">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-1 h-12 bg-primary/20 shrink-0"></div>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
