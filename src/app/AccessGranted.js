"use client";

import React, { useState, useEffect } from 'react';

export default function AccessGranted() {
    const [accessMessage, setAccessMessage] = useState('');

    useEffect(() => {
        const message = "[ACCESS GRANTED]";
        let index = -1;
        const interval = setInterval(() => {
            if (index < message.length - 1) {
                setAccessMessage((prev) => prev + message[++index]);
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
            <div className="text-green-400 text-3xl font-mono">
                {accessMessage}
                <span className="blinking-cursor"></span>
            </div>
        </div>
    );
}

