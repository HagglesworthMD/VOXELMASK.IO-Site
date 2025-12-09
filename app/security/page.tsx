"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
    ShieldCheck,
    Server,
    Lock,
    CheckCircle2,
    ChevronDown,
    Fingerprint,
    FileCheck,
    GitBranch,
    Eye,
    AlertTriangle,
    Database,
    Globe,
    ArrowLeft,
    ExternalLink,
    Cpu,
    Sparkles
} from "lucide-react";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function SecurityPage() {
    return (
        <main className="flex min-h-screen flex-col items-center overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/30" />
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px] animate-pulse" style={{ animationDelay: '1.5s' }} />
                </div>

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px'
                }} />

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 text-center">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-8 left-4 md:left-8"
                    >
                        <Link
                            href="/"
                            className="group flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium"
                    >
                        <ShieldCheck className="h-4 w-4" />
                        Security & Compliance
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6"
                    >
                        Trust is not a Feeling.
                        <br />
                        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            It's a Verified Result.
                        </span>
                    </motion.h1>

                    {/* Sub-headline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-16"
                    >
                        We don't just "sanitize" data. We <span className="text-white font-semibold">cryptographically enforce</span> privacy standards
                        with <span className="text-emerald-400">deterministic, audit-tested</span> precision.
                    </motion.p>

                    {/* Scroll Indicator - Now in flow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-xs uppercase tracking-[0.2em] text-emerald-400/70">Scroll</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ChevronDown className="h-5 w-5 text-white/40" />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Bottom Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
            </section>

            {/* Section 1: Zero-Trust Architecture */}
            <section className="relative w-full py-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
                            <span className="h-px w-8 bg-gradient-to-r from-transparent via-emerald-500 to-emerald-500" />
                            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">01</span>
                            <span className="h-px w-8 bg-gradient-to-l from-transparent via-emerald-500 to-emerald-500" />
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
                            The "Zero-Trust" Architecture
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-slate-400 max-w-2xl mx-auto">
                            VoxelMask is built on a "Zero-Trust" philosophy. We assume every dataset is sensitive
                            and every environment is hostile.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid gap-6 md:grid-cols-3"
                    >
                        <ZeroTrustCard
                            icon={Server}
                            title="Local Processing Only"
                            description="Your patient data never leaves your infrastructure. VoxelMask operates entirely within your browser or local server (Docker). No cloud uploads, no external APIs, no data sovereignty risks."
                            accent="emerald"
                        />
                        <ZeroTrustCard
                            icon={Cpu}
                            title="No 'Black Box' AI"
                            description="Our anonymization engine uses Deterministic Logic, not probabilistic AI guesses. If Rule A is met, Action B is taken—100% of the time."
                            accent="cyan"
                        />
                        <ZeroTrustCard
                            icon={Lock}
                            title="Zero Data Retention"
                            description="Data is processed in ephemeral memory (RAM) and immediately discarded after download. VoxelMask is a processing engine, not a storage repository."
                            accent="blue"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Section 2: CI/CD Pipeline */}
            <section className="relative w-full py-24 px-4 bg-slate-900/30 border-y border-slate-800/50">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }} />

                <div className="container mx-auto max-w-6xl relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
                            <span className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-500 to-cyan-500" />
                            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">02</span>
                            <span className="h-px w-8 bg-gradient-to-l from-transparent via-cyan-500 to-cyan-500" />
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Continuous Automated Validation
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-slate-400 max-w-2xl mx-auto">
                            Most de-identification tools are tested once at launch. VoxelMask is tested
                            <span className="text-white font-semibold"> every single time</span> code is changed.
                        </motion.p>
                    </motion.div>

                    {/* CI/CD Visualization */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scaleIn}
                        className="relative mb-12"
                    >
                        <div className="rounded-3xl border border-slate-700 bg-slate-950/80 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
                            {/* Glow Effect */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                                        <GitBranch className="h-6 w-6 text-cyan-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">Live Compliance Verification</h3>
                                        <p className="text-slate-400 text-sm">GitHub Actions CI/CD Pipeline</p>
                                    </div>
                                </div>

                                {/* Live Badge */}
                                <a
                                    href="https://github.com/HagglesworthMD/VOXELMASK/actions"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-emerald-400 text-sm font-medium">View Live Build Status</span>
                                    <ExternalLink className="h-3 w-3 text-emerald-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </a>
                            </div>

                            {/* Test Counter */}
                            <div className="mb-10 p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
                                <div className="flex items-center justify-center gap-6 flex-wrap">
                                    <div className="text-center">
                                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                                            37+
                                        </div>
                                        <div className="text-slate-400 text-sm font-medium mt-1">Automated Tests</div>
                                    </div>
                                    <div className="h-12 w-px bg-slate-700 hidden md:block" />
                                    <div className="text-center">
                                        <div className="text-4xl md:text-5xl font-black text-emerald-400">
                                            100%
                                        </div>
                                        <div className="text-slate-400 text-sm font-medium mt-1">Must Pass Rate</div>
                                    </div>
                                    <div className="h-12 w-px bg-slate-700 hidden md:block" />
                                    <div className="text-center">
                                        <div className="text-4xl md:text-5xl font-black text-cyan-400">
                                            Every
                                        </div>
                                        <div className="text-slate-400 text-sm font-medium mt-1">Commit Verified</div>
                                    </div>
                                </div>
                            </div>

                            {/* Safety Net Checks */}
                            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                                <ShieldCheck className="h-5 w-5 text-emerald-400" />
                                The "Safety Net" Gauntlet
                            </h4>

                            <div className="grid gap-4 md:grid-cols-3">
                                <PipelineCheck
                                    icon={FileCheck}
                                    title="HIPAA Logic Check"
                                    description="Verifies PatientName is removed and StudyDate is shifted."
                                    status="pass"
                                />
                                <PipelineCheck
                                    icon={Fingerprint}
                                    title="Forensic Integrity Check"
                                    description="Verifies pixel data hash consistency (SHA-256)."
                                    status="pass"
                                />
                                <PipelineCheck
                                    icon={Database}
                                    title="NIfTI Conversion Check"
                                    description="Verifies ML-ready output dimensions."
                                    status="pass"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 3: Forensic Integrity */}
            <section className="relative w-full py-24 px-4">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
                            <span className="h-px w-8 bg-gradient-to-r from-transparent via-amber-500 to-amber-500" />
                            <span className="text-amber-400 text-sm font-semibold uppercase tracking-widest">03</span>
                            <span className="h-px w-8 bg-gradient-to-l from-transparent via-amber-500 to-amber-500" />
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Forensic Integrity & Chain of Custody
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-slate-400 max-w-2xl mx-auto">
                            For legal and research use cases, knowing <span className="text-white font-semibold">who touched the data</span> is
                            as important as the data itself.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid gap-8 md:grid-cols-2"
                    >
                        <ForensicCard
                            icon={Fingerprint}
                            title="SHA-256 Hashing"
                            content="Every input file and output file is cryptographically hashed. This proves that while metadata changed, the diagnostic pixel data remains byte-for-byte identical to the original."
                            highlight="Critical for legal discovery"
                            code="SHA-256: 7b2ca4f0e8d9a1c3b5e7f9..."
                        />
                        <ForensicCard
                            icon={FileCheck}
                            title="Immutable Audit Logs"
                            content="VoxelMask generates a PDF certificate for every batch, detailing exactly which tags were modified, which profile was used, and the operator responsible."
                            highlight="Complete accountability chain"
                            example="Profile: US Research Safe Harbor"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Section 4: Compliance Profiles Table */}
            <section className="relative w-full py-24 px-4 bg-slate-900/30 border-y border-slate-800/50">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
                            <span className="h-px w-8 bg-gradient-to-r from-transparent via-purple-500 to-purple-500" />
                            <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">04</span>
                            <span className="h-px w-8 bg-gradient-to-l from-transparent via-purple-500 to-purple-500" />
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Supported Compliance Profiles
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-slate-400 max-w-2xl mx-auto">
                            Pre-configured profiles for different regulatory requirements and use cases.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scaleIn}
                        className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/80 backdrop-blur-sm"
                    >
                        {/* Glow */}
                        <div className="h-1 bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-emerald-500/50" />

                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-800">
                                        <th className="px-6 py-5 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider">Profile</th>
                                        <th className="px-6 py-5 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider">Standard</th>
                                        <th className="px-6 py-5 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider">Use Case</th>
                                        <th className="px-6 py-5 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider">Key Mechanism</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/50">
                                    <ComplianceRow
                                        profile="US Research"
                                        profileColor="cyan"
                                        standard="HIPAA Safe Harbor"
                                        useCase="AI/ML Training, Commercial Datasets"
                                        mechanism="Removes 18 identifiers. Shifts dates by random offset. Regenerates UIDs."
                                    />
                                    <ComplianceRow
                                        profile="FOI / Legal"
                                        profileColor="amber"
                                        standard="Chain of Custody"
                                        useCase="Litigation, Patient Access Requests"
                                        mechanism="Preserves Patient Name/DOB. Redacts Staff/Physician names to protect employee privacy."
                                    />
                                    <ComplianceRow
                                        profile="AU Strict"
                                        profileColor="purple"
                                        standard="OAIC / Privacy Act"
                                        useCase="Multi-site Clinical Trials (Australia)"
                                        mechanism="Strict removal of private tags. Hashed UIDs for longitudinal tracking."
                                    />
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 5: IT Security FAQ */}
            <section className="relative w-full py-24 px-4">
                <div className="container mx-auto max-w-3xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center mb-16"
                    >
                        <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 mb-4">
                            <span className="h-px w-8 bg-gradient-to-r from-transparent via-emerald-500 to-emerald-500" />
                            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">05</span>
                            <span className="h-px w-8 bg-gradient-to-l from-transparent via-emerald-500 to-emerald-500" />
                        </motion.div>
                        <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-4">
                            IT Security FAQ
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-slate-400 max-w-2xl mx-auto">
                            Common questions from IT security teams and compliance officers.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-4"
                    >
                        <SecurityFAQ
                            question="Does VoxelMask store a copy of the images?"
                            answer="No. VoxelMask is a processing engine, not a storage repository. Data is processed in ephemeral memory (RAM) and immediately discarded after download."
                        />
                        <SecurityFAQ
                            question='How do you handle "Burned-in" pixel PHI (e.g., Ultrasound text)?'
                            answer='We utilize a "Modality-Aware" safety protocol. High-risk modalities (US, SC, OT) trigger a manual masking interface, allowing operators to visually redact pixels before export.'
                        />
                        <SecurityFAQ
                            question="Can we integrate this into our existing PACS?"
                            answer="Yes. VoxelMask supports standard DICOM export formats (ZIP) and can be deployed via Docker containers for seamless integration into hospital workflows."
                        />
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative w-full py-24 px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={scaleIn}
                        className="relative rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/20 p-12 text-center overflow-hidden"
                    >
                        {/* Glow Effects */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-60" />
                        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-emerald-500/5 blur-[100px] rounded-full" />

                        <div className="relative z-10">
                            <Sparkles className="h-12 w-12 text-emerald-400 mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Ready to Secure Your Data?
                            </h2>
                            <p className="text-slate-400 max-w-xl mx-auto mb-8">
                                From solo researchers to enterprise hospitals—get compliant de-identification with the support level you need.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="mailto:sales@voxelmask.io"
                                    className="inline-flex items-center justify-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.4)]"
                                >
                                    Contact Sales
                                </a>
                                <Link
                                    href="/"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-slate-700 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full border-t border-slate-800 bg-slate-950 py-12 text-center text-slate-500">
                <div className="container mx-auto px-4 flex flex-col items-center gap-6">
                    <div>
                        <h3 className="text-lg font-bold text-white">VoxelMask v0.3</h3>
                        <p className="mt-1 text-sm text-amber-500/80">Current Status: Functional Release. Validation recommended before clinical production use.</p>
                    </div>

                    <div className="h-px w-24 bg-slate-800 my-2" />

                    <p className="text-xs text-slate-600">VoxelMask.io &copy; 2025. Built with precision in South Australia.</p>

                    <p className="max-w-4xl text-center text-[10px] uppercase tracking-widest text-slate-700">
                        Disclaimer: VoxelMask is a Non-Device Software Function intended for research, data de-identification, and administrative workflows (FOI/Legal).
                        It is not a Class II Medical Device and is not intended for primary diagnostic use. Users are responsible for validating output before clinical decision-making.
                    </p>
                </div>
            </footer>
        </main>
    );
}

// Components

function ZeroTrustCard({ icon: Icon, title, description, accent }: {
    icon: React.ElementType;
    title: string;
    description: string;
    accent: 'emerald' | 'cyan' | 'blue';
}) {
    const accentColors = {
        emerald: 'from-emerald-500/10 to-emerald-500/5 border-emerald-500/20 hover:border-emerald-500/40 group-hover:text-emerald-400',
        cyan: 'from-cyan-500/10 to-cyan-500/5 border-cyan-500/20 hover:border-cyan-500/40 group-hover:text-cyan-400',
        blue: 'from-blue-500/10 to-blue-500/5 border-blue-500/20 hover:border-blue-500/40 group-hover:text-blue-400'
    };

    const iconColors = {
        emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
        cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
        blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    };

    return (
        <motion.div
            variants={fadeInUp}
            className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${accentColors[accent]} bg-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl backdrop-blur-sm`}
        >
            <div className={`mb-6 inline-flex rounded-2xl p-4 border ${iconColors[accent]}`}>
                <Icon className="h-7 w-7" />
            </div>
            <h3 className={`text-xl font-bold text-white mb-3 transition-colors ${accentColors[accent]}`}>
                {title}
            </h3>
            <p className="text-slate-400 leading-relaxed">{description}</p>
        </motion.div>
    );
}

function PipelineCheck({ icon: Icon, title, description, status }: {
    icon: React.ElementType;
    title: string;
    description: string;
    status: 'pass' | 'fail';
}) {
    return (
        <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-colors">
            <div className={`flex-shrink-0 p-2 rounded-xl ${status === 'pass' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                {status === 'pass' ? <CheckCircle2 className="h-5 w-5" /> : <AlertTriangle className="h-5 w-5" />}
            </div>
            <div>
                <h4 className="font-semibold text-white flex items-center gap-2">
                    ✅ {title}
                </h4>
                <p className="text-sm text-slate-400 mt-1">{description}</p>
            </div>
        </div>
    );
}

function ForensicCard({ icon: Icon, title, content, highlight, code, example }: {
    icon: React.ElementType;
    title: string;
    content: string;
    highlight: string;
    code?: string;
    example?: string;
}) {
    return (
        <motion.div
            variants={fadeInUp}
            className="group relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-amber-500/40 backdrop-blur-sm"
        >
            <div className="mb-6 inline-flex rounded-2xl p-4 bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                {title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">{content}</p>
            <div className="text-sm text-amber-400 font-medium mb-3">
                → {highlight}
            </div>
            {code && (
                <div className="font-mono text-xs text-slate-500 bg-slate-950/50 px-4 py-2 rounded-lg border border-slate-800">
                    {code}
                </div>
            )}
            {example && (
                <div className="text-xs text-slate-500 bg-slate-950/50 px-4 py-2 rounded-lg border border-slate-800">
                    <span className="text-slate-400">Example:</span> {example}
                </div>
            )}
        </motion.div>
    );
}

function ComplianceRow({ profile, profileColor, standard, useCase, mechanism }: {
    profile: string;
    profileColor: 'cyan' | 'amber' | 'purple';
    standard: string;
    useCase: string;
    mechanism: string;
}) {
    const colorClasses = {
        cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    };

    return (
        <tr className="hover:bg-slate-900/50 transition-colors">
            <td className="px-6 py-5">
                <span className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold border ${colorClasses[profileColor]}`}>
                    {profile}
                </span>
            </td>
            <td className="px-6 py-5 text-slate-300 font-medium">{standard}</td>
            <td className="px-6 py-5 text-slate-400">{useCase}</td>
            <td className="px-6 py-5 text-slate-400 text-sm">{mechanism}</td>
        </tr>
    );
}

function SecurityFAQ({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            variants={fadeInUp}
            className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/30 hover:border-emerald-500/30 transition-colors"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between p-6 text-left hover:bg-slate-900/50 transition-colors"
            >
                <span className="text-lg font-medium text-slate-100 pr-4">{question}</span>
                <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : 'text-slate-500'}`} />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
                    {answer}
                </p>
            </motion.div>
        </motion.div>
    );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}
