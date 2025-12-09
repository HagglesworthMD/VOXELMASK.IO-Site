"use client";

import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export function VideoHero() {
    const [videoEnded, setVideoEnded] = useState(false);
    const [fadeEarly, setFadeEarly] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll-based opacity for header text
    const { scrollY } = useScroll();
    // Header scale effect on scroll
    const headerScale = useTransform(scrollY, [0, 300], [1, 0.9]);
    const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

    const handleVideoEnd = () => {
        setVideoEnded(true);
    };

    // Start fading early (2 seconds before video ends)
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const checkTime = () => {
            if (video.duration && video.currentTime >= video.duration - 2) {
                setFadeEarly(true);
            }
        };

        video.addEventListener('timeupdate', checkTime);
        return () => video.removeEventListener('timeupdate', checkTime);
    }, []);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-slate-950">

            {/* Static Background (starts fading in early) */}
            <AnimatePresence>
                {fadeEarly && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                        className="absolute inset-0 z-0"
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950" />

                        {/* Subtle Floating Particles Effect */}
                        <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-cyan-500/20 blur-[100px] animate-pulse" />
                            <div className="absolute bottom-1/3 right-1/4 h-48 w-48 rounded-full bg-blue-500/20 blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video (plays once, fades out early) */}
            <motion.video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                onEnded={handleVideoEnd}
                initial={{ opacity: 1 }}
                animate={{ opacity: fadeEarly ? 0 : 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-cover z-10"
            >
                <source src="/videos/hero.webm" type="video/webm" />
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </motion.video>

            {/* Header Text - fades in on load */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{ scale: headerScale }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center pt-32 text-center px-4 pointer-events-none"
            >
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-2xl">
                    VOXELMASK<span className="text-cyan-400">.IO</span>
                </h1>
                <p className="mt-4 text-lg md:text-2xl font-medium text-white tracking-wide max-w-2xl drop-shadow-lg">
                    Securing Medical Data. One Voxel at a Time.
                </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: scrollIndicatorOpacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-medium ml-1">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="h-6 w-6 text-white/50" />
                </motion.div>
            </motion.div>

            {/* Overlay: Dark Gradient (Bottom fade for smooth section transition) */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-20" />
        </div>
    );
}
