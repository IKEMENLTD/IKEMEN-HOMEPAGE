import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const SystemWidget = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="fixed bottom-8 left-8 hidden md:flex items-end gap-4 z-40 font-mono text-[10px] text-gray-400 select-none mix-blend-multiply"
        >
            {/* Animated Graph */}
            <div className="flex items-end gap-[2px] h-8">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1 bg-ikemen-gold"
                        animate={{ height: [4, 16, 8, 24, 12][i] }} // Initial height
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 0.5 + Math.random() * 0.5,
                            ease: "easeInOut"
                        }}
                        style={{ height: `${Math.random() * 20 + 4}px` }}
                    />
                ))}
            </div>

            {/* Info Block */}
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="tracking-widest">SYSTEM ONLINE</span>
                </div>
                <div className="flex gap-4 tracking-wider opacity-70">
                    <span>LOC: TOKYO, JP</span>
                    <span>{time.toLocaleTimeString('en-US', { hour12: false })}</span>
                </div>
            </div>
        </motion.div>
    );
};
