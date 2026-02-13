import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n, t } = useTranslation('common');

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
    };

    const isRTL = i18n.language === 'ar';

    return (
        <button
            onClick={toggleLanguage}
            className="relative group px-4 py-2 border border-slate-200 dark:border-white/10 hover:border-secondary rounded-sm transition-all duration-300 overflow-hidden"
            aria-label={t('accessibility.languageSwitcher')}
        >
            {/* Background Animation */}
            <div className="absolute inset-0 bg-secondary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

            {/* HUD Brackets */}
            <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-2 h-2 border-t border-l border-secondary/30 group-hover:border-secondary transition-colors`}></div>
            <div className={`absolute bottom-0 ${isRTL ? 'left-0' : 'right-0'} w-2 h-2 border-b border-r border-secondary/30 group-hover:border-secondary transition-colors`}></div>

            {/* Language Text */}
            <div className={`relative flex items-center space-x-2 font-mono text-xs font-bold tracking-wider z-10 ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <span className={`transition-colors ${i18n.language === 'en' ? 'text-secondary' : 'text-slate-500 dark:text-gray-400'}`}>
                    EN
                </span>
                <span className="text-slate-300 dark:text-gray-600">|</span>
                <span className={`transition-colors ${i18n.language === 'ar' ? 'text-secondary' : 'text-slate-500 dark:text-gray-400'}`}>
                    AR
                </span>
            </div>
        </button>
    );
};

export default LanguageSwitcher;
