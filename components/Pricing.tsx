"use client";

import { Check, Info } from "lucide-react";
import { BuyButton } from "@/components/BuyButton";

// Pricing data structure to easily manage features
const tiers = [
    {
        name: "Starter",
        price: "$0",
        frequency: "/ forever",
        description: "For students & hobbyists",
        features: [
            "Universal Viewer",
            "Single File Process",
            "Watermarked PDF"
        ],
        cta: "Download Beta",
        ctaLink: "#",
        popular: false,
    },
    {
        name: "Researcher",
        price: "$49",
        frequency: "/ month",
        description: "For Data Scientists & FOI",
        features: [
            "Unlimited Processing",
            "10GB+ Zip Support",
            "PDF Certification",
            "NIfTI Export"
        ],
        cta: "Buy License",
        ctaComponent: <BuyButton className="w-full" />, // Use the existing BuyButton component here
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        frequency: "",
        description: "For Hospitals & CROs",
        features: [
            "Site License",
            "Custom Compliance Profiles",
            "SLA Support"
        ],
        cta: "Contact Sales",
        ctaLink: "#",
        popular: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="relative py-24 overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="/pricing-bg.png" alt="" className="h-full w-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-white md:text-4xl">Transparent, Academic Pricing</h2>
                    <p className="mt-4 text-slate-400">Choose the license that fits your research grant or department budget.</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative flex flex-col rounded-2xl border p-8 shadow-xl transition-all ${tier.popular
                                    ? "border-cyan-500 bg-slate-900/80 scale-105 z-10 shadow-cyan-900/20"
                                    : "border-slate-800 bg-slate-950/50 hover:border-slate-700"
                                }`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-1 text-xs font-bold text-white shadow-lg">
                                    SaaS Vibe Recommended
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                                <p className="text-sm text-slate-400 mt-1">{tier.description}</p>
                            </div>

                            <div className="mb-6 flex items-baseline">
                                <span className="text-4xl font-bold text-white">{tier.price}</span>
                                <span className="ml-1 text-slate-500">{tier.frequency}</span>
                            </div>

                            <ul className="mb-8 space-y-4 flex-1">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3 text-slate-300">
                                        <Check className={`h-5 w-5 shrink-0 ${tier.popular ? "text-cyan-400" : "text-slate-500"}`} />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto">
                                {tier.ctaComponent ? (
                                    tier.ctaComponent
                                ) : (
                                    <a
                                        href={tier.ctaLink}
                                        className={`flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all ${tier.popular
                                                ? "bg-cyan-500 text-white hover:bg-cyan-400"
                                                : "border border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white"
                                            }`}
                                    >
                                        {tier.cta}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
