"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles/Home.module.css';
import { useGlitch } from 'react-powerglitch';
import LoadingBar from './LoadingBar';


export default function Home() {
    const containerRef = useRef(null);
    const [barsVisible, setBarsVisible] = useState(0);
    const totalBars = 26;
    const imageWidth = 16;
    const glitch = useGlitch();

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
    const borderColor = '#D4000A';
    const borderThickness = '5px';

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
            <div className="flex items-center justify-center relative">
            <Image src="/brand/logo.png" ref={glitch.ref} alt="Logo" width={500} height={500} />
            </div>
            <LoadingBar glitchRef={glitch.ref} />
        </main>
    );
}
