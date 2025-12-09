"use client";

import React from 'react';

export function SpinningCube({ className = "" }: { className?: string }) {
    return (
        <div className={`cube-spinner ${className}`} role="img" aria-label="Spinning Voxel Cube" />
    );
}
