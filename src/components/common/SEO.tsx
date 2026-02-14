import React from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    ogUrl?: string;
    schema?: object;
    schemaType?: 'Organization' | 'ProfessionalService' | 'LocalBusiness' | 'Service' | 'FAQPage' | 'WebSite';
    serviceName?: string;
    serviceDescription?: string;
    priceRange?: string;
    ratingValue?: number;
    reviewCount?: number;
    faqs?: { question: string; answer: string }[];
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    canonical,
    ogImage,
    ogType = 'website',
    ogUrl,
    schema,
    schemaType = 'WebSite',
    serviceName,
    serviceDescription,
    priceRange,
    ratingValue,
    reviewCount,
    faqs
}) => {
    const siteName = 'OPTIMA Solutions';
    const defaultTitle = 'OPTIMA Solutions | Digital Infrastructure & Web Development';
    const defaultDescription = 'Premier digital agency specializing in web development, hosting solutions, web applications, and digital transformation services across the GCC region.';
    const defaultImage = 'https://optima-digital.com/og-image.jpg';
    const siteUrl = 'https://optima-digital.com';

    // Build organization schema
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "OPTIMA Solutions",
        "alternateName": "OPTIMA Digital Agency",
        "url": siteUrl,
        "logo": `${siteUrl}/logos/optima-01-dark-version.svg`,
        "description": defaultDescription,
        "foundingDate": "2018",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cairo",
            "addressCountry": "EG"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+20-10-1234-5678",
            "contactType": "customer service",
            "email": "info@optima-digital.com",
            "availableLanguage": ["English", "Arabic"]
        },
        "sameAs": [
            "https://www.linkedin.com/company/optima-solutions",
            "https://twitter.com/optima_solutions"
        ],
        "areaServed": [
            { "@type": "Country", "name": "Egypt" },
            { "@type": "Country", "name": "United Arab Emirates" },
            { "@type": "Country", "name": "Saudi Arabia" },
            { "@type": "Country", "name": "Qatar" },
            { "@type": "Country", "name": "Kuwait" },
            { "@type": "Country", "name": "Bahrain" },
            { "@type": "Country", "name": "Oman" }
        ],
        "serviceType": [
            "Web Development",
            "Web Application Development",
            "Managed Hosting",
            "Technical Support",
            
        ],
        "priceRange": "$$"
    };

    // Build service schema
    const buildServiceSchema = () => {
        if (!serviceName) return null;
        return {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": serviceName,
            "description": serviceDescription || description || defaultDescription,
            "provider": organizationSchema,
            "url": canonical || siteUrl,
            "image": ogImage || defaultImage,
            "priceRange": priceRange || "$$",
            ...(ratingValue && {
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": ratingValue,
                    "bestRating": 5,
                    "reviewCount": reviewCount || 0
                }
            })
        };
    };

    // Build FAQ schema
    const buildFAQSchema = () => {
        if (!faqs || faqs.length === 0) return null;
        return {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };
    };

    // Determine which schema to use
    let finalSchema: Record<string, unknown> = organizationSchema;
    if (schemaType === 'Service' || schemaType === 'ProfessionalService') {
        const serviceSchema = buildServiceSchema();
        if (serviceSchema) finalSchema = serviceSchema;
    } else if (schemaType === 'FAQPage') {
        const faqSchema = buildFAQSchema();
        if (faqSchema) finalSchema = faqSchema;
    } else if (schema) {
        finalSchema = schema as Record<string, unknown>;
    }

    return (
        <>
            {/* Title */}
            <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>

            {/* Meta Tags */}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={ogImage || defaultImage} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content={siteName} />
            {ogUrl && <meta property="og:url" content={ogUrl} />}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={ogImage || defaultImage} />

            {/* Hreflang */}
            <link rel="alternate" hreflang="en" href={canonical || siteUrl} />
            <link rel="alternate" hreflang="ar" href={`${canonical || siteUrl}/ar`} />
            <link rel="alternate" hreflang="x-default" href={siteUrl} />

            {/* JSON-LD Schema */}
            <script type="application/ld+json">
                {JSON.stringify(finalSchema)}
            </script>
        </>
    );
};

export default SEO;