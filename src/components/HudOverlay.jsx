import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HudOverlay = () => {
    const { scrollYProgress } = useScroll();
    const scrollPercentage = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const [displayPercentage, setDisplayPercentage] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollPercentage.on("change", (latest) => {
            setDisplayPercentage(Math.round(latest));
        });
        return () => unsubscribe();
    }, [scrollPercentage]);

    return (
        <div className="fixed inset-0 pointer-events-none z-30 p-6 md:p-8 hidden md:block mix-blend-multiply">
            {/* Top Left Corner */}
            <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-gray-300/50"></div>

            {/* Top Right Corner */}
            <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-gray-300/50"></div>

            {/* Bottom Left Corner */}
            <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-gray-300/50"></div>

            {/* Bottom Right Corner */}
            <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-gray-300/50"></div>

            {/* Top Right: Audio Visualizer (Fake) */}
            <div className="absolute top-10 right-12 flex items-center gap-4">
                <div className="flex items-end gap-[3px] h-4">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-[2px] bg-ikemen-gold"
                            animate={{ height: [4, 12, 6, 16, 8][i % 5] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 0.3 + Math.random() * 0.4,
                                ease: "easeInOut",
                                delay: i * 0.1
                            }}
                            style={{ height: '4px' }}
                        />
                    ))}
                </div>
                <span className="text-[10px] font-mono text-gray-400 tracking-widest">AUDIO: ON</span>
            </div>

            {/* Bottom Right: Scroll Counter */}
            <div className="absolute bottom-10 right-12 flex flex-col items-end">
                <div className="text-4xl font-black text-gray-200 font-mono leading-none">
                    {displayPercentage.toString().padStart(2, '0')}<span className="text-sm text-ikemen-gold">%</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400 tracking-[0.3em]">SCROLL PROGRESS</span>
            </div>

            {/* Center Crosshair (Subtle) */}
            <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 opacity-20">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-ikemen-gold"></div>
                <div className="absolute left-1/2 top-0 h-full w-[1px] bg-ikemen-gold"></div>
            </div>
        </div>
    );
};
