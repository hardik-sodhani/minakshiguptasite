"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import StickyNavBar from './StickyNavBar';

export default function HeroSplashStickyNav() {
    const [scrollY, setScrollY] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);

    // Constants for animation
    const HERO_MIN_HEIGHT = 80; // px, height of sticky nav bar
    const ANIMATION_SCROLL_RANGE = 200; // px, how much scroll to fully animate
    const HERO_MAX_HEIGHT = typeof window !== 'undefined' ? window.innerHeight : 800;

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Animate logo: fade out and scale up as user scrolls (up to ANIMATION_SCROLL_RANGE)
    const fade = Math.max(0, 1 - scrollY / ANIMATION_SCROLL_RANGE);
    const scale = 1 + Math.min(scrollY / 1000, 0.15); // up to 1.15x

    // Animate hero height: shrink from full screen to HERO_MIN_HEIGHT
    const heroHeight = Math.max(
        HERO_MIN_HEIGHT,
        HERO_MAX_HEIGHT - Math.min(scrollY, ANIMATION_SCROLL_RANGE)
    );

    return (
        <>
            {/* Hero Splash */}
            <div
                ref={heroRef}
                className="w-full min-h-screen h-screen flex flex-col items-center justify-center bg-brand-beige transition-all duration-500"
                style={{
                    height: scrollY > 0 ? heroHeight : '100vh',
                    minHeight: HERO_MIN_HEIGHT,
                    maxHeight: '100vh',
                }}
            >
                <Image
                    src="/icons/mglogo.png"
                    alt="MG Logo"
                    width={600}
                    height={600}
                    className="w-4/5 max-w-[400px] sm:max-w-[500px] md:max-w-[600px] h-auto object-contain mx-auto transition-all duration-500"
                    style={{ opacity: fade, transform: `scale(${scale})` }}
                    priority
                />
            </div>
            {/* Sticky Nav Bar */}
            <StickyNavBar />
        </>
    );
} 