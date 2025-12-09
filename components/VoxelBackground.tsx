"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Cube {
    id: number;
    width: number;
    x: number;
    duration: number;
    delay: number;
    rotation: number;
}

export function VoxelBackground() {
    const [cubes, setCubes] = useState<Cube[]>([]);

    useEffect(() => {
        // Generate cubes only on client-side to prevent hydration mismatch
        const generatedCubes = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            width: Math.random() * 40 + 15, // 15px - 55px size
            x: Math.random() * 100, // 0 - 100vw
            duration: Math.random() * 20 + 10, // 10s - 30s float time
            delay: Math.random() * 10, // 0s - 10s delay start
            rotation: Math.random() * 360,
        }));
        setCubes(generatedCubes);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {cubes.map((cube) => (
                <motion.div
                    key={cube.id}
                    className="absolute bottom-[-100px] border border-cyan-400/30 bg-cyan-500/5 backdrop-blur-[1px] rounded-sm"
                    style={{
                        left: `${cube.x}%`,
                        width: cube.width,
                        height: cube.width,
                    }}
                    initial={{ y: 0, opacity: 0, rotate: 0 }}
                    animate={{
                        y: "-120vh",
                        opacity: [0, 0.8, 0],
                        rotate: [0, cube.rotation],
                        scale: [1, 1.1, 1],
                        borderColor: [
                            "rgba(34, 211, 238, 0.3)",
                            "rgba(255, 255, 255, 0.6)", // White shimmer
                            "rgba(34, 211, 238, 0.3)"
                        ],
                        boxShadow: [
                            "0 0 0px rgba(34, 211, 238, 0)",
                            "0 0 15px rgba(34, 211, 238, 0.5)", // Cyan glow
                            "0 0 0px rgba(34, 211, 238, 0)"
                        ]
                    }}
                    transition={{
                        duration: cube.duration,
                        repeat: Infinity,
                        delay: cube.delay,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}
