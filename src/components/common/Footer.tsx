
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 dark:bg-dark border-t border-slate-200 dark:border-primary/10 pt-24 pb-12 transition-colors relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link to="/" className="flex items-center space-x-3 mb-8 group">
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-primary rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-lg shadow-primary/20"></div>
                                <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
                            </div>
                            <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tighter uppercase transition-colors">Optima<span className="text-secondary">Solutions</span></span>
                        </Link>
                        <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed max-w-sm mb-10 transition-colors">
                            Engineered for global scale. Architecting the resilient digital foundations that power the next generation of enterprise giants.
                        </p>
                        <div className="flex space-x-4">
                            {['LN', 'GH', 'TW', 'IG'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 border border-slate-300 dark:border-white/10 flex items-center justify-center text-[10px] font-mono text-slate-400 hover:border-primary hover:text-primary transition-all duration-300">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-slate-900 dark:text-white font-black mb-8 text-[11px] uppercase tracking-[0.4em] transition-colors border-l-2 border-primary pl-4">System</h4>
                        <ul className="space-y-4 text-sm font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 transition-colors">
                            <li><Link to="/services" className="hover:text-primary transition-colors">/Capabilities</Link></li>
                            <li><Link to="/projects" className="hover:text-primary transition-colors">/Archives</Link></li>
                            <li><Link to="/industries" className="hover:text-primary transition-colors">/Verticals</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">/Protocol</Link></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-slate-900 dark:text-white font-black mb-8 text-[11px] uppercase tracking-[0.4em] transition-colors border-l-2 border-primary pl-4">Global</h4>
                        <address className="not-italic text-sm font-mono uppercase tracking-widest text-slate-500 dark:text-gray-400 space-y-4 transition-colors">
                            <p>TX-HQ: 01_Enterprise_Plaza</p>
                            <p>LDN: 50_Innovation_Way</p>
                            <p>SG: 88_Marina_Blvd</p>
                            <p className="pt-4 text-secondary">partnerships@optima.solutions</p>
                        </address>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-4">
                        <h4 className="text-slate-900 dark:text-white font-black mb-8 text-[11px] uppercase tracking-[0.4em] transition-colors border-l-2 border-primary pl-4">Telemetry_Feed</h4>
                        <p className="text-sm text-slate-500 dark:text-gray-400 mb-6 font-light">Join 12,000+ engineers receiving our monthly technical updates.</p>
                        <form className="relative" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="ENTER_EMAIL"
                                className="w-full bg-white dark:bg-white/[0.02] border border-slate-300 dark:border-white/10 p-5 text-xs font-mono text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-colors pr-16"
                            />
                            <button className="absolute right-0 top-0 h-full px-6 text-primary hover:text-secondary transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 dark:border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 dark:text-gray-500 uppercase tracking-widest transition-colors font-mono font-bold space-y-6 md:space-y-0 text-center md:text-left">
                    <p>© 2024 OPTIMA Solutions Group // SYS_VER: 4.2.0-STABLE</p>
                    <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                        <a href="#" className="hover:text-primary transition-colors">[PRIVACY]</a>
                        <a href="#" className="hover:text-primary transition-colors">[TERMS]</a>
                        <a href="#" className="hover:text-primary transition-colors">[SEC_COMPLIANCE]</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
