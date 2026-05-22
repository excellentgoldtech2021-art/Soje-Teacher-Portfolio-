import React from "react";
import { BookOpen, ShieldCheck, Award, GraduationCap, Zap, CheckCircle2 } from "lucide-react";

interface ExamCardProps {
  exam: string;
  target: string;
  topics: string[];
  approach: string;
  record: string;
  tag: string;
}

const examSpecializations: ExamCardProps[] = [
  {
    exam: "BECE (WAEC Junior)",
    tag: "FOUNDATION JSS3",
    target: "JSS3 candidates aiming for perfect school and state transitions",
    topics: ["Number Bases", "Basic Algebra", "Simple Geometry", "Probability", "Elementary Statistics"],
    approach: "Foundational concept-building paired with high-clarity visual aids & interactive scaffolding.",
    record: "Consistent A/B results across 98% of past intermediate cohort candidates."
  },
  {
    exam: "SSCE / WAEC",
    tag: "HIGH SCHOOL COMPLETED",
    target: "SS1–SS3 (specifically SS3 candidates targeting tertiary entrance credits)",
    topics: ["Full WAEC Syllabus", "Circle Theorems", "Bearings & Distances", "Mensuration", "Matrices & Vectors"],
    approach: "Comprehensive past-question drilling, examiner marking scheme familiarity workshops, and speed training.",
    record: "Signature distinctions in Paper 1 and Paper 2 with proven formula memory retention tricks."
  },
  {
    exam: "NECO",
    tag: "REGIONAL ALIGNED",
    target: "SS3 candidates sitting the National Examinations Council june/july exams",
    topics: ["Syllabus Comparatives", "Objective Mastery", "Formal Essay Layouts", "Coordinate Geometry", "Calculus"],
    approach: "Comparative NECO vs WAEC question pattern analyses, addressing specific national format distinctions.",
    record: "Superlative B2–A1 grade rates achieved consistently within short-form intensive prep."
  },
  {
    exam: "NABTEB",
    tag: "TECHNICAL EXTREME",
    target: "Technical and vocational students sitting ordinary or advanced mathematics",
    topics: ["Applied Mathematics", "Trade Calculations", "Trigonometric Tables", "Logarithms", "Mensuration of Solids"],
    approach: "Highly practical, industry-centric engineering problem worksheets making abstract theorems functional.",
    record: "Strong confidence boosts and direct pass gains for technical engineering prospects."
  },
  {
    exam: "JAMB / UTME",
    tag: "HIGHER ADMISSIONS SPEED",
    target: "SS3 graduates and aspirants preparing for highly competitive university admission",
    topics: ["Full 40-Question CBT prep", "Calculus & Limits", "Polynomials", "Statistics & Standard Deviation"],
    approach: "Elite speed-drilling tactics, systemic elimination hacks, and simulated Computer-Based Test (CBT) stress tests.",
    record: "Students regularly scoring 280-350+ overall, with 85+ score averages in JAMB Mathematics."
  },
  {
    exam: "SAT & GCSE / General Math",
    tag: "GLOBAL PRESTIGE",
    target: "JS1–SS2 candidates, plus international school applicants tackling GCSE, IGCSE & SAT Quant",
    topics: ["Pre-Algebra & Algebra II", "Quantitative Analysis", "Geometry Proofs", "Functions & Graphs"],
    approach: "Conceptual clarity first, followed immediately by international board past-paper adaptation and time-block sessions.",
    record: "Seamless integration with British, Cambridge, and American collegiate entry boards."
  }
];

export default function Exams() {
  return (
    <section id="exams" className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Decorative math grids */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-[40%] left-[5%] w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415505_1px,transparent_1px),linear-gradient(to_bottom,#33415505_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-teal-400 tracking-wider uppercase font-bold px-3 py-1.5 rounded-full bg-teal-950/40 border border-teal-900/30">
            🏆 EXAMINATIONS FOCUS SPREAD
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-4 leading-tight">
            Specialised <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">Curriculum Mastery</span>
          </h2>
          <div className="h-1 w-20 bg-teal-500 rounded-full mx-auto mt-4" />
          <p className="text-slate-350 text-sm sm:text-base mt-4 leading-relaxed font-normal">
            For 25 years, I have analyzed the syllabus benchmarks of every major Nigerian and global secondary academic body. Here is how I structure success across each category.
          </p>
        </div>

        {/* 6-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {examSpecializations.map((spec, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-teal-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-slate-950/60"
            >
              {/* Highlight background lines */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
              
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-mono text-amber-400 bg-amber-950/20 border border-amber-900/40 px-2.5 py-0.5 rounded font-extrabold tracking-wider">
                    {spec.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-500">CODE // 0{index + 1}</span>
                </div>

                {/* Exam Title */}
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-teal-400 transition-colors">
                    {spec.exam}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">
                    <strong className="text-slate-300 font-semibold font-sans">Target Scholars:</strong> {spec.target}
                  </p>
                </div>

                {/* Topics Grid */}
                <div className="pt-2 border-t border-slate-850/60">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold block mb-1.5">
                    KEY SYLLABUS EMBEDDINGS:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {spec.topics.map((t, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[10px] bg-slate-950 border border-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Strategy Text */}
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-mono text-slate-400 font-bold block uppercase tracking-widest">
                    PEDAGOGICAL APPROACH:
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-normal">
                    {spec.approach}
                  </p>
                </div>
              </div>

              {/* Distinction Track */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-start space-x-2 text-emerald-400 bg-emerald-950/10 p-2.5 rounded-lg border border-emerald-900/10">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                <div className="text-[11px] font-medium leading-normal text-slate-200">
                  <span className="font-bold text-emerald-400 uppercase font-mono tracking-wider block text-[9px] mb-0.5">TRACK RECORD PROVEN //</span>
                  {spec.record}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Floating Call to Action and Information Footer */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6 text-left">
          <div className="max-w-2xl">
            <h4 className="text-white font-bold text-sm tracking-tight">Need direct curriculum support or custom physical worksheets?</h4>
            <p className="text-slate-400 text-xs mt-1 font-normal">All exam preparations feature full real-time past paper simulation drilling and adaptive difficulty pathways.</p>
          </div>
          <a
            href="https://wa.me/2349050278999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center space-x-2 shrink-0 transition-all hover:shadow-lg hover:shadow-teal-400/10 cursor-pointer"
          >
            <span>Ask for a Free Diagnostic Assessment</span>
            <Zap className="w-3.5 h-3.5 text-accent-amber fill-amber-300" />
          </a>
        </div>

      </div>
    </section>
  );
}
