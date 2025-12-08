import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SideInterface = () => {
    const [activeSection, setActiveSection] = useState('TOP');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const height = window.innerHeight;

            // Simple scroll detection logic
            if (scrollY < height * 0.5) setActiveSection('TOP');
            else if (scrollY < height * 1.5) setActiveSection('PHILOSOPHY');
            else if (scrollY < height * 2.5) setActiveSection('NEWS');
            else if (scrollY < height * 3.5) setActiveSection('SERVICE');
            else if (scrollY < height * 4.5) setActiveSection('WORKS');
            else setActiveSection('CONTACT');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = ['TOP', 'PHILOSOPHY', 'NEWS', 'SERVICE', 'WORKS', 'CONTACT'];

    return (
        <>
            {/* Left Side - Social & Info */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="fixed left-2 md:left-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-8 z-40 mix-blend-multiply scale-75 md:scale-100 origin-left"
            >
                <div className="w-[1px] h-24 bg-gray-300"></div>
                <div className="writing-vertical-rl text-xs font-bold tracking-[0.3em] text-gray-400 rotate-180">
                    FOLLOW US
                </div>
                <div className="flex flex-col gap-4">
                    {/* Twitter/X Icon */}
                    <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-ikemen-gold hover:text-ikemen-gold transition-all duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    {/* Instagram Icon */}
                    <a href="#" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-ikemen-gold hover:text-ikemen-gold transition-all duration-300">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                </div>
                <div className="w-[1px] h-24 bg-gray-300"></div>
            </motion.div>

            {/* Right Side - Section Indicator */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="fixed right-2 md:right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-end gap-6 z-40 mix-blend-multiply scale-75 md:scale-100 origin-right"
            >
                {sections.map((section, index) => (
                    <div key={section} className="flex items-center gap-4 group cursor-pointer">
                        <span className={`text-[10px] font-mono tracking-widest transition-all duration-300 ${activeSection === section ? 'text-ikemen-gold opacity-100 translate-x-0' : 'text-gray-400 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                            {section}
                        </span>
                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${activeSection === section ? 'bg-ikemen-gold scale-150' : 'bg-gray-300 group-hover:bg-ikemen-gold'}`}></div>
                    </div>
                ))}
                <div className="absolute right-[5px] top-0 bottom-0 w-[1px] bg-gray-200 -z-10"></div>
            </motion.div>
        </>
    );
};
