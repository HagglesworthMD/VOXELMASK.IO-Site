'use client';

import { motion } from "framer-motion";
import { Database, FileText, Wrench, ArrowRight, ScanFace, MonitorPlay, ClipboardCheck } from "lucide-react";

export function ProductOverview() {
    const useCases = [
        {
            id: "research",
            title: "AI Research & Datasets",
            icon: <Database className="h-8 w-8 text-cyan-400" />,
            description: "Prepare massive, clean datasets for Machine Learning pipelines. VoxelMask removes all 18 HIPAA identifiers, remaps UIDs, and standardizes tags, ensuring your data is ready for training without risking privacy breaches.",
            tags: ["HIPAA Safe Harbor", "UID Remapping", "Batch Processing"]
        },
        {
            id: "foi",
            title: "FOI & Patient Access",
            icon: <FileText className="h-8 w-8 text-emerald-400" />,
            description: "Streamline Freedom of Information requests. Automatically redact hospital staff names and internal comments while preserving the patient's own diagnostic data, allowing for compliant and rapid release of medical records.",
            tags: ["Staff Redaction", "Legal Compliance", "Fast Turnaround"]
        },
        {
            id: "clinical",
            title: "Clinical Correction",
            icon: <Wrench className="h-8 w-8 text-amber-400" />,
            description: "Built-in SOP Instance Regenerator. A lifesaver for PACS administrators. Fix typo'd Patient IDs, correct gender tags, or modify study descriptions directly in the DICOM header before archiving. Maintain a pristine and accurate clinical archive.",
            tags: ["Tag Editing", "Error Correction", "Audit Logging"]
        },
        {
            id: "pixel-masking",
            title: "Masking & Document Redaction",
            icon: <ScanFace className="h-8 w-8 text-purple-400" />,
            description: "A breakthrough in Privacy. VoxelMask empowers you to click-and-drag to permanently burn-over PHI on Secondary Capture images, Ultrasound, and scanned documents. It supports all modalities, giving you complete control over pixel-level redaction.",
            tags: ["Optical Character Recognition", "Ultrasound", "Forms & Documents"]
        },
        {
            id: "viewer",
            title: "Universal HTML5 Viewer",
            icon: <MonitorPlay className="h-8 w-8 text-pink-400" />,
            description: "Includes a lightweight, custom HTML5 viewer with every dataset. Compatible with everything—Windows, Mac, Linux, iOS, and Android. No plugins, no installs, just instant access to medical imaging on any device.",
            tags: ["Zero-Footprint", "Cross-Platform", "Touch Friendly"]
        },
        {
            id: "compliance-logs",
            title: "Automated Compliance Docs",
            icon: <ClipboardCheck className="h-8 w-8 text-indigo-400" />,
            description: "Every processed study includes a generated PDF report. For Research, receive a De-Identification Certificate. For Clinical care, get a custom Patient Information Sheet. Full forensic audit trails ensure you are always audit-ready.",
            tags: ["PDF Generation", "Audit Trails", "Forensic Integrity"]
        }
    ];

    return (
        <section className="relative w-full py-24 bg-slate-950/50">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        How VoxelMask Works
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        VoxelMask is a high-performance, local-first engine designed to solve the three critical challenges of medical data management. Whether you are training AI, fulfilling legal requests, or fixing PACS errors, we provide the tools to do it safely.
                    </p>
                </div>

                {/* Use Cases Grid - 2x2 Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="group relative flex flex-col p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-900/60 transition-all duration-300"
                        >
                            <div className="mb-6 inline-flex items-center justify-center p-4 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/20 group-hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.15)] transition-all">
                                {useCase.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                {useCase.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                                {useCase.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {useCase.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/50 rounded-full border border-slate-700/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>


                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
