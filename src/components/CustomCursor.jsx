import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-[#06b6d4] rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#06b6d4]"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 0.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 500, damping: 28 }}
            />
            {/* Trailing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border border-[#06b6d4] rounded-full pointer-events-none z-[9998] opacity-50"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.8 : 1,
                    opacity: isHovering ? 0.8 : 0.3,
                    backgroundColor: isHovering ? 'rgba(6,182,212, 0.1)' : 'rgba(6,182,212, 0)',
                    borderColor: isHovering ? '#06b6d4' : '#06b6d4',
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            />
        </>
    );
};
