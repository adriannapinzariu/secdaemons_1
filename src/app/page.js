"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles/Home.module.css';
import { useGlitch } from 'react-powerglitch';
import LoadingBar from './LoadingBar';

export default function Home() {
    const containerRef = useRef(null);
    const [barsVisible, setBarsVisible] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [accessMessage, setAccessMessage] = useState('');
    const totalBars = 26;
    const glitch = useGlitch();

    useEffect(() => { // 1
        const timer = setTimeout(() => {
            glitch.startGlitch();
        }, 1000);

        return () => {
            clearTimeout(timer);
            glitch.stopGlitch();
        };
    }, []);

    useEffect(() => { // 2
        const timeout = setTimeout(() => {
            setIsLoaded(true);
        }, 1800); 
    
        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => { // 3
        if (isLoaded) {
            const message = "[ACCESS GRANTED]";
            let index = -1;
            const interval = setInterval(() => {
                if (index < message.length - 1) {
                    setAccessMessage((prev) => prev + message[index]);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 100); // This will add one letter every 100ms.
    
            return () => clearInterval(interval);
        }
    }, [isLoaded]);
    

    return ( // 4
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black relative">
            <div className="flex items-center justify-center relative">
                <Image src="/brand/logo.png" ref={glitch.ref} alt="Logo" width={500} height={500} />
            </div>
            <LoadingBar glitchRef={glitch.ref} />

            {isLoaded && ( // 5
                <div className="absolute inset-0 bg-black opacity-100 z-10 flex items-center justify-center">
                    <div className="text-green-400 text-3xl font-mono">
                        {accessMessage}
                        <span className="blinking-cursor"></span>
                    </div>
                </div>
            )}
        </main>
    );
}
