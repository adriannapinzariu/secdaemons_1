"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles/Home.module.css';




export default function Home() {
    const containerRef = useRef(null);
    const [imageCount, setImageCount] = useState(0);
    const imageWidth = 16; 

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            const count = Math.ceil(containerWidth / imageWidth);
            setImageCount(count);
        }
    }, [containerRef]);
    
    const borderColor = '#D4000A';
    const borderThickness = '5px';

    return (
        

        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
            <div className="flex items-center justify-center">
                <Image src="/brand/logo.png" alt="Logo" className="max-w-full h-auto" width={500} height={500} />
            </div>
            <div
                ref={containerRef}
                className="relative flex items-center justify-center bg-transparent mt-5 w-full h-16 border-blue-demon-red max-w-lg"
                style={{
                    borderWidth: borderThickness,
                    borderColor: borderColor,
                }}
            >
                               {/* Dynamically render Image components */}
                               {Array.from({ length: 23 }).map((_, idx) => (
                    <Image
                        key={idx}
                        src="/bar.svg"
                        alt="Bar"
                        layout="fixed"
                        width={imageWidth}
                        height={16}
                        className={`absolute top-1/2 transform -translate-y-1/2`}
                        style={{ left: `${( 6 + (idx) * (imageWidth + 5))}px`}} 
                    />
                ))}
      
            </div>
        </main>
    );
}


