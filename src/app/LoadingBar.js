import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useGlitch } from 'react-powerglitch';

function LoadingBar({ glitchRef }) {
    const containerRef = useRef(null);
    const [barsVisible, setBarsVisible] = useState(0);
    const totalBars = 26;
    const imageWidth = 16;
    const glitch = useGlitch();
    
    const borderColor = '#D4000A';
    const borderThickness = '5px';

    useEffect(() => {
        const timer = setTimeout(() => {
            glitch.startGlitch();
        }, 1000);

        return () => {
            clearTimeout(timer);
            glitch.stopGlitch();
        };
    }, []);

    useEffect(() => {
        if (barsVisible < totalBars) {
            const timeout = setTimeout(() => {
                setBarsVisible(barsVisible + 1);
            }, 35);

            return () => clearTimeout(timeout);
        }
    }, [barsVisible]);

    return (
        <div ref={glitchRef} className="inline-block relative" style={{ width: '545px' }}>
        <div
            className="relative flex items-center justify-center bg-transparent w-full h-16 border-blue-demon-red max-w-543px"
            style={{
                borderWidth: borderThickness,
                borderColor: borderColor,
            }}
        >
            {Array.from({ length: barsVisible }).map((_, idx) => (
                <Image
                    key={idx}
                    src="/bar.svg"
                    alt="Bar"
                    layout="fixed"
                    width={15}
                    height={16}
                    className={`absolute top-1/2 transform -translate-y-1/2`}
                    style={{ left: `${(9 + (idx) * (imageWidth + 4))}px` }}
                />
            ))}
        </div>
        </div>
    );
}

export default LoadingBar;
