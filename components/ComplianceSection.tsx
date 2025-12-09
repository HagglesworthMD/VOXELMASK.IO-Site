'use client';

import React from 'react';
import { Shield, Lock, Globe, Fingerprint, Eye, CheckCircle2 } from 'lucide-react';

interface ComplianceCardProps {
    icon: React.ElementType;
    title: string;
    detail: string;
    subDetail?: string;
    delay: number;
}

const ComplianceCard = ({ icon: Icon, title, detail, subDetail, delay }: ComplianceCardProps) => {
    return (
        <div
            className="group relative overflow-hidden rounded-3xl bg-slate-800/50 border border-slate-700 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-emerald-500/50 hover:bg-slate-800 backdrop-blur-sm"
            style={{ animationDelay: `${delay}ms` }}
        >
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Verified Badge (Hidden until hover) */}
            <div className="absolute top-4 right-4 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>Verified</span>
                </div>
            </div>

            <div className="relative z-10 flex flex-col items-start gap-4">
                {/* Icon Container */}
                <div className="rounded-2xl bg-slate-900/80 p-3 text-slate-300 ring-1 ring-slate-700 transition-colors duration-300 group-hover:text-emerald-400 group-hover:ring-emerald-500/50">
                    <Icon className="h-6 w-6" />
                </div>

                <div className="space-y-2">
                    <h3 className="font-semibold text-lg text-slate-100 group-hover:text-emerald-300 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                        {detail}
                    </p>
                    {subDetail && (
                        <p className="text-xs font-mono text-slate-500 mt-2 pt-2 border-t border-slate-700/50">
                            {subDetail}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function ComplianceSection() {
    const complianceItems = [
        {
            id: 1,
            title: "DICOM PS3.15 Compliant",
            icon: Shield,
            detail: "Full implementation of the Basic Application Level Confidentiality Profile (Table E.1-1).",
            subDetail: "Standard: DICOM Part 15 Annex E"
        },
        {
            id: 2,
            title: "HIPAA Safe Harbor",
            icon: Lock,
            detail: "Automated removal of all 18 identifiers per 45 CFR 164.514(b)(2).",
            subDetail: "Reg: 45 CFR § 164.514"
        },
        {
            id: 3,
            title: "OAIC / Australian Privacy",
            icon: Globe,
            detail: "Meets Australian Privacy Principles (APP) for de-identification and data governance.",
            subDetail: "Region: APAC / AU"
        },
        {
            id: 4,
            title: "Forensic Integrity",
            icon: Fingerprint,
            detail: "HMAC-SHA256 cryptographic hashing for UID remapping and chain-of-custody audit logs.",
            subDetail: "Algo: HMAC-SHA256"
        },
        {
            id: 5,
            title: "Modality-Aware Safety",
            icon: Eye,
            detail: "Intelligent pixel masking for 'burned-in' PHI on Ultrasound and Secondary Capture.",
            subDetail: "Tech: OCR & Pixel Analysis"
        }
    ];

    return (
        <section className="relative w-full bg-slate-950 py-16 px-4 sm:px-6 lg:px-8 border-y border-slate-900">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <p className="text-cyan-500 font-semibold tracking-wide uppercase text-xs mb-3">Regulatory Compliance</p>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                        Certified & Audit-Ready Standards
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {complianceItems.slice(0, 3).map((item, index) => (
                        <ComplianceCard
                            key={item.id}
                            {...item}
                            delay={index * 100}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-2/3 mx-auto">
                    {complianceItems.slice(3, 5).map((item, index) => (
                        <ComplianceCard
                            key={item.id}
                            {...item}
                            delay={(index + 3) * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
