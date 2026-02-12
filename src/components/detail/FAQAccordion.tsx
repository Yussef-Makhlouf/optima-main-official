import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface FAQ {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqs: FAQ[];
    title?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({
    faqs,
    title
}) => {
    const { t } = useTranslation(['home']);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const displayTitle = title || t('home:faqAccordion.defaultTitle');

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 md:py-40 bg-slate-50 dark:bg-surface/20 transition-colors">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-[10px] md:text-xs font-mono font-bold text-secondary uppercase tracking-[0.5em] mb-4">
                        {t('home:faqAccordion.tag')}
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">
                        {displayTitle}
                    </h3>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 dark:border-white/10 bg-white dark:bg-dark overflow-hidden transition-all duration-300 hover:border-primary"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <div className="flex items-start gap-4 flex-1">
                                    <span className="text-primary font-mono text-xs font-bold mt-1">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h4 className="text-base md:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-primary transition-colors">
                                        {faq.question}
                                    </h4>
                                </div>

                                {/* Icon */}
                                <div className="ml-4 flex-shrink-0">
                                    <svg
                                        className={`w-5 h-5 text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 md:px-8 pb-6 pl-14 md:pl-16">
                                    <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                        <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </p>
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

export default FAQAccordion;
