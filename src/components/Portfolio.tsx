import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, ArrowUpRight, Award, Clock, Star, X, Check, Eye } from "lucide-react";
import { sampleWorksData } from "../data";
import { SampleWork } from "../types";

export default function Portfolio() {
  const [selectedWorkId, setSelectedWorkId] = useState<string | null>(null);

  const activeWork = sampleWorksData.find(w => w.id === selectedWorkId);

  // Simple parser helper inside page for absolute build safety
  const renderDocumentMarkdown = (text: string) => {
    if (!text) return null;
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      if (line.startsWith("### ")) {
        return <h4 key={idx} className="text-lg font-bold text-teal-400 mt-5 mb-2 border-b border-slate-800 pb-1 uppercase font-mono tracking-tight">{line.replace("### ", "")}</h4>;
      }
      if (line.startsWith("## ")) {
        return <h3 key={idx} className="text-xl font-bold text-white mt-6 mb-3 tracking-tight border-l-2 border-teal-500 pl-3">{line.replace("## ", "")}</h3>;
      }
      if (line.startsWith("#### ")) {
        return <h5 key={idx} className="text-sm font-mono text-slate-400 uppercase mt-4 mb-2">{line.replace("#### ", "")}</h5>;
      }
      if (line.startsWith("- **")) {
        const clean = line.replace(/^\-\s+\*\*/, "").replace(/\*\*/, "");
        const parts = clean.split(":");
        return (
          <div key={idx} className="flex items-start space-x-2 my-2.5 text-slate-300 pl-2">
            <span className="text-teal-500 font-bold shrink-0 mt-0.5">•</span>
            <p className="text-sm">
              <strong className="text-white font-semibold">{parts[0]}:</strong> {parts.slice(1).join(":")}
            </p>
          </div>
        );
      }
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return (
          <div key={idx} className="flex items-start space-x-2 my-1.5 text-slate-300 pl-4">
            <span className="text-teal-500/80 shrink-0 mt-2 h-1 w-1 bg-teal-500 rounded-full" />
            <p className="text-sm">{line.replace(/^[-*]\s+/, "")}</p>
          </div>
        );
      }
      if (line.startsWith("$$") || line.startsWith("```")) return null;
      if (line.trim() === "") return <div key={idx} className="h-2" />;
      return <p key={idx} className="text-slate-350 text-sm leading-relaxed my-2 font-sans">{line}</p>;
    });
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-mono text-teal-400 tracking-wider uppercase font-semibold block mb-2">
            // CURRICULUM & MATERIAL PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Teaching & Syllabus Showcases
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Examine functional samples of real classrooms structures, conceptual worksheets, and pedagogic audits engineered by My School Companion.
          </p>
          <div className="mt-2.5 h-1 w-20 bg-teal-500 rounded-full" />
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleWorksData.map((work) => (
            <div
              key={work.id}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between text-left hover:border-teal-500/40 hover:bg-slate-900/60 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-teal-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    {work.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">FORMAT: PDF_VIEW</span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-teal-300 transition-colors">
                  {work.title}
                </h3>

                <p className="text-slate-400 text-xs mt-3.5 leading-relaxed line-clamp-3">
                  {work.description}
                </p>

                {/* Micro metric display */}
                <div className="mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-850 text-slate-300 text-xs flex items-start space-x-2">
                  <Award className="w-4.5 h-4.5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{work.outcome}</span>
                </div>
              </div>

              <button
                onClick={() => setSelectedWorkId(work.id)}
                className="w-full mt-6 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-850 hover:text-teal-400 border border-slate-800 text-slate-300 text-xs font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-teal-400" />
                <span>Open Lesson Blueprint</span>
              </button>
            </div>
          ))}
        </div>

        {/* Dynamic Slidover Sheet / Clipboard Reader */}
        <AnimatePresence>
          {selectedWorkId && activeWork && (
            <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedWorkId(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Document Drawer */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="relative w-full max-w-2xl h-full bg-slate-900 border-l border-slate-800 shadow-2xl overflow-hidden flex flex-col justify-between"
              >
                {/* Header panel */}
                <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-left">
                    <div className="w-9 h-9 rounded-lg bg-teal-900/50 flex items-center justify-center text-teal-400 border border-teal-800/60">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-teal-400 tracking-wider font-semibold">CAMPUS PORTFOLIO ASSET</span>
                      <span className="block text-[10px] text-slate-500 font-mono mt-0.5">CATALOGUE_ID: COMP-{activeWork.id.toUpperCase()}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedWorkId(null)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
                    aria-label="Close Preview"
                  >
                    <X className="w-5.5 h-5.5" />
                  </button>
                </div>

                {/* Content Area styled like an elegant academic clipboard sheet */}
                <div className="p-6 md:p-8 flex-1 overflow-y-auto bg-slate-950/40 text-left">
                  <div className="max-w-prose mx-auto">
                    
                    {/* Category Label */}
                    <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-teal-400 bg-slate-900 border border-slate-850 px-2.5 py-1 rounded w-fit block mb-4">
                      {activeWork.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                      {activeWork.title}
                    </h3>
                    
                    {/* Outcome Metric Block */}
                    <div className="my-6 p-4 rounded-xl bg-teal-950/20 border border-teal-500/20 text-slate-300 text-sm flex items-start space-x-3">
                      <div className="w-5 h-5 rounded px-1.5 py-0.5 mt-0.5  bg-teal-600/40 text-teal-400 font-bold text-xs flex items-center justify-center">✓</div>
                      <div>
                        <span className="block font-bold text-white text-xs uppercase font-mono tracking-wider text-teal-300">DOCUMENTED RESULTS</span>
                        <span className="block text-xs text-slate-300 leading-relaxed mt-0.5">{activeWork.outcome}</span>
                      </div>
                    </div>

                    {/* Divider line */}
                    <div className="my-6 h-[1px] bg-slate-800/60" />

                    {/* Render Rich Markdown Sheets */}
                    <div className="prose prose-invert prose-emerald font-sans max-w-none text-slate-300">
                      {renderDocumentMarkdown(activeWork.fullMarkdown)}
                    </div>

                  </div>
                </div>

                {/* Close Bottom Area */}
                <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
                  <button
                    onClick={() => setSelectedWorkId(null)}
                    className="px-5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold hover:bg-slate-800 hover:text-white text-slate-300 transition-colors cursor-pointer"
                  >
                    Close Sheet Viewer
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
