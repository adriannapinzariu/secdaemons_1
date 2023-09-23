"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles/Home.module.css';




export default function Home() {
    const containerRef = useRef(null);
    const [barsVisible, setBarsVisible] = useState(0);
    const totalBars = 26;
    const imageWidth = 16;

    // Incrementally show bars
    useEffect(() => {
        if (barsVisible < totalBars) {
            const timeout = setTimeout(() => {
                setBarsVisible(barsVisible + 1);
            }, 35);  // Here, 100ms is the delay between showing each bar

            return () => clearTimeout(timeout);
        }
    }, [barsVisible]);
    const borderColor = '#D4000A';
    const borderThickness = '5px';

    return (
        

        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
            <div className="flex items-center justify-center">
                <Image src="/brand/logo.png" alt="Logo" className="max-w-full h-auto" width={500} height={500} />
            </div>
            <div
                ref={containerRef}
                className="relative flex items-center justify-center bg-transparent mt-5 w-full h-16 border-blue-demon-red max-w-543px"
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
        </main>
    );
}


