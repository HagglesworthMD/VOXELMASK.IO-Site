"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, FileJson, ChevronDown, Terminal, Database, Lock } from "lucide-react";
import { BuyButton } from "@/components/BuyButton";
import { ProductOverview } from "@/components/ProductOverview";
import { SpinningCube } from "@/components/SpinningCube";
import { VideoHero } from "@/components/VideoHero";
import ComplianceSection from "@/components/ComplianceSection";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden px-4 md:px-0">

      {/* Hero Section */}
      <VideoHero />

      {/* Product Overview / Use Cases */}
      <ProductOverview />

      {/* Compliance Standards - Now moved here */}
      <ComplianceSection />

      {/* Key Value Proposition */}
      <section id="features" className="container mx-auto py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Core Capabilities</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 md:grid-cols-3"
        >
          <FeatureCard
            imageSrc="/feature-local.png"
            title="Local-First Sovereignty"
            description="Your patient data never leaves your infrastructure. VoxelMask runs entirely on your local machine (Windows, Mac, Linux, Docker), ensuring absolute data sovereignty."
          />
          <FeatureCard
            imageSrc="/feature-dual.png"
            title="Dual-Mode Intelligence"
            description="Switch instantly between 'Research Mode' (Total Anonymization) and 'FOI Mode' (Redacts staff while preserving patient context). One engine, multiple workflows."
          />
          <FeatureCard
            imageSrc="/feature-modality.png"
            title="Modality-Aware Safety"
            description="Our v2.1 Protocol understands the difference between MRI and Ultrasound. It empowers you to manually mask high-risk modalities with precision while preserving diagnostic quality."
          />
        </motion.div>
      </section>

      {/* Operating Modes */}
      <section className="bg-slate-900/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-4xl">Operating Modes & Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <ModeCard
              title="AI Research & Commercial Sales"
              subtitle="HIPAA Safe Harbor & GDPR Compliant"
              icon={<Database className="h-6 w-6 text-blue-400" />}
              details={[
                "Removes all 18 HIPAA identifiers.",
                "Output: DICOM + NIfTI (Zero-loss conversion).",
                "HMAC-SHA256 UID remapping for longitudinal studies."
              ]}
              deliverable="Includes Safe Harbor Certificate PDF"
            />
            <ModeCard
              title="FOI - Patient Access"
              subtitle="For Hospital Admin & Medical Records"
              icon={<FileJson className="h-6 w-6 text-emerald-400" />}
              details={[
                "Preserves Patient Name/DOB.",
                "Redacts Staff/Operator names.",
                "Bundled HTML5 Viewer for patient viewing."
              ]}
              deliverable="Includes Medical Image Release Letter PDF"
            />
            <ModeCard
              title="Legal & Crown Solicitor"
              subtitle="For Litigation & Workers Comp"
              icon={<Lock className="h-6 w-6 text-amber-400" />}
              details={[
                "Forensic integrity with SHA-256 hashing.",
                "Chain of Custody preserved.",
                "Original UIDs preserved for authenticity."
              ]}
              deliverable="Includes Forensic Integrity Certificate PDF"
            />
            <ModeCard
              title="Clinical Correction"
              subtitle="For PACS Administrators"
              icon={<Cpu className="h-6 w-6 text-purple-400" />}
              details={[
                "Correct misspellings or update Patient IDs.",
                "Fix gender tags or demographics.",
                "Full audit trail of changes."
              ]}
              deliverable="Includes Data Repair Log PDF"
            />
          </div>
        </div>
      </section>

      {/* Technical Features Grid */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-4xl">Technical Arsenal</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <TechGridItem title="Manual Pixel Masking" description="Intuitive click-and-drag interface allows you to manually draw over and burn-in PHI on pixel-data (Ultrasounds/Screenshots) with precision." />
          <TechGridItem title="The Universal Viewer" description="Self-contained Cornerstone.js HTML5 Viewer. Verify redactions or share instantly—no install required." />
          <TechGridItem title="Forensic Audit Trail" description="Every job generates a SHA-256 verified PDF report and SQLite audit log, ensuring accountability." />
          <TechGridItem title="Interactive Redaction" description="Need manual control? Use the 'Draw & Redact' canvas to manually scrub specific regions." />
          <TechGridItem title="Massive Scale" description="Drag and drop single files, nested folders, or 10GB+ ZIP archives. Handles mixed modalities automatically." />
          <TechGridItem title="NIfTI Conversion" description="Built-in dicom2nifti pipeline exports AI-ready .nii.gz files alongside anonymized DICOMs." />
        </div>
      </section>

      {/* Compliance Standards - Removed from here */}

      {/* Tech Stack */}
      <section className="py-16 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold text-white">Under the Hood</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <TechTag text="Python 3.12" />
            <TechTag text="Pydicom" />
            <TechTag text="NumPy" />
            <TechTag text="PaddleOCR" />
            <TechTag text="OpenCV" />
            <TechTag text="Streamlit" />
            <TechTag text="Apple Silicon (M1/M2/M3)" />
            <TechTag text="CUDA Support" />
          </div>
        </div>
      </section>

      {/* Open Source / GitHub CTA */}
      <section className="container mx-auto py-24 text-center">
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-12 shadow-2xl relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Open Source & Community Driven
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
            VoxelMask is built for transparency. Audit the code, contribute to the roadmap, or deploy it yourself. Join our community of researchers and developers on GitHub.
          </p>

          <a
            href="https://github.com/HagglesworthMD/VOXELMASK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
          >
            <GithubIcon className="w-6 h-6" />
            View on GitHub
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto max-w-3xl py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="flex flex-col gap-4">
          <AccordionItem
            question="Is VoxelMask free to use?"
            answer="Yes. VoxelMask is currently in Open Beta and the source code is available on GitHub. You are free to use, audit, and modify it for your research needs."
          />
          <AccordionItem
            question="How do I install run it?"
            answer="The easiest way is to pull our Docker image. Alternatively, if you are comfortable with Python, you can clone the repo and run it locally. Pre-built binaries for Windows/Mac will be available soon in Releases."
          />
          <AccordionItem
            question="Can I use this for commercial projects?"
            answer="While the core engine is open source, if you require a managed enterprise version with SLAs, custom compliance profiles, or BAA support, please contact us for a commercial license."
          />
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="w-full border-t border-slate-800 bg-slate-950 py-12 text-center text-slate-500">
        <div className="container mx-auto px-4 flex flex-col items-center gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">VoxelMask v1.0</h3>
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

function FeatureCard({ imageSrc, title, description }: { imageSrc: string; title: string; description: string }) {
  return (
    <div className="group h-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 transition-all hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="relative h-56 w-full overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
        <img src={imageSrc} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="p-8 pt-6">
        <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
        <p className="text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function ModeCard({ title, subtitle, icon, details, deliverable }: { title: string; subtitle: string; icon: React.ReactNode; details: string[]; deliverable: string }) {
  return (
    <div className="flex flex-col rounded-3xl border border-slate-800 bg-slate-950/80 backdrop-blur-sm p-8 shadow-lg transition-all hover:border-cyan-500/30 hover:shadow-cyan-500/5">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm font-medium text-cyan-400">{subtitle}</p>
        </div>
        <div className="rounded-2xl bg-slate-900 p-3 text-slate-200">{icon}</div>
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {details.map((detail, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/50" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto rounded-2xl bg-slate-900/50 px-4 py-4 text-center border border-slate-800/50">
        <p className="text-xs font-semibold text-slate-300">📦 {deliverable}</p>
      </div>
    </div>
  );
}

function TechGridItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-5 hover:bg-slate-900/60 transition-colors">
      <h4 className="mb-2 font-bold text-white">{title}</h4>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
}

function ComplianceBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 shadow-sm">
      <ShieldCheck className="h-4 w-4 text-green-400" />
      {text}
    </div>
  )
}

function TechTag({ text }: { text: string }) {
  return (
    <span className="rounded bg-slate-800 px-3 py-1 text-sm text-slate-400 font-mono border border-slate-700/50">
      {text}
    </span>
  )
}

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left hover:text-cyan-400"
      >
        <span className="text-lg font-medium text-slate-200">{question}</span>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180 text-cyan-400' : 'text-slate-500'}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-4 text-slate-400">{answer}</p>
      </motion.div>
    </div>
  );
}
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
