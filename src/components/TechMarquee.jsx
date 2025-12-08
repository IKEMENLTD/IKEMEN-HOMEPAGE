import { motion } from 'framer-motion';

const keywords = [
    "WEB DESIGN", "SYSTEM DEVELOPMENT", "UI/UX DESIGN", "DIGITAL MARKETING",
    "AI SOLUTIONS", "BRANDING", "MOBILE APPS", "CLOUD INFRASTRUCTURE",
    "WEB DESIGN", "SYSTEM DEVELOPMENT", "UI/UX DESIGN", "DIGITAL MARKETING",
    "AI SOLUTIONS", "BRANDING", "MOBILE APPS", "CLOUD INFRASTRUCTURE"
];

export const TechMarquee = () => {
    return (
        <div className="w-full py-4 bg-slate-900 overflow-hidden border-y border-slate-800 relative z-30">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <motion.div
                className="flex flex-row flex-nowrap min-w-max"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {keywords.map((word, index) => (
                    <span key={index} className="text-cyan-400 font-mono text-sm md:text-base font-bold mx-4 md:mx-8 tracking-widest flex flex-row items-center">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2 md:mr-4 animate-pulse shrink-0"></span>
                        {word}
                    </span>
                ))}
                {keywords.map((word, index) => (
                    <span key={`dup-${index}`} className="text-cyan-400 font-mono text-sm md:text-base font-bold mx-4 md:mx-8 tracking-widest flex flex-row items-center">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2 md:mr-4 animate-pulse shrink-0"></span>
                        {word}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};
