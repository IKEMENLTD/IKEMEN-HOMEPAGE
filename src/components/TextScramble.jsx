import { useEffect, useState, useRef } from 'react';

const chars = '!<>-_\\/[]{}—=+*^?#________';

export const TextScramble = ({ text, duration = 1000, delay = 0, onComplete, className }) => {
    const [displayText, setDisplayText] = useState('');
    const frameRequest = useRef();

    useEffect(() => {
        let frame = 0;
        let startTimeout;
        const queue = [];

        for (let i = 0; i < text.length; i++) {
            const from = Math.random() < 0.5 ? '' : chars[Math.floor(Math.random() * chars.length)];
            const to = text[i];
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            queue.push({ from, to, start, end });
        }

        const update = () => {
            let output = '';
            let complete = 0;

            for (let i = 0; i < queue.length; i++) {
                let { from, to, start, end, char } = queue[i];
                if (frame >= end) {
                    complete++;
                    output += to;
                } else if (frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = chars[Math.floor(Math.random() * chars.length)];
                        queue[i].char = char;
                    }
                    output += `<span class="opacity-50">${char}</span>`;
                } else {
                    output += from;
                }
            }

            setDisplayText(output);

            if (complete === queue.length) {
                if (onComplete) onComplete();
            } else {
                frameRequest.current = requestAnimationFrame(update);
                frame++;
            }
        };

        if (delay > 0) {
            startTimeout = setTimeout(() => {
                update();
            }, delay);
        } else {
            update();
        }

        return () => {
            cancelAnimationFrame(frameRequest.current);
            clearTimeout(startTimeout);
        };
    }, [text, delay]);

    return (
        <span
            className={className}
            dangerouslySetInnerHTML={{ __html: displayText }}
        />
    );
};
