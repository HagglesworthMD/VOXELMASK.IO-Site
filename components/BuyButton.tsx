"use client";

import { ShoppingCart } from "lucide-react";
import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

interface BuyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}

export function BuyButton({ className, ...props }: BuyButtonProps) {
    // Placeholder URL for Lemon Squeezy
    const checkoutUrl = "https://your-store.lemonsqueezy.com/buy/variant_id";

    return (
        <motion.a
            href={checkoutUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`lemonsqueezy-button inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-slate-900 transition-all bg-cyan-400 rounded-full hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] ${className}`}
        >
            <ShoppingCart className="w-5 h-5" />
            <span>Buy License - $49/mo</span>
        </motion.a>
    );
}
