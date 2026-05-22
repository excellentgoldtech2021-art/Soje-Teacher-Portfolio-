import React from "react";
import { motion } from "motion/react";
import { BrainCircuit, Milestone, Sliders, CheckCircle, Quote } from "lucide-react";
import { personalInfo } from "../data";

export default function AboutMe() {
  const pillars = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-teal-400" />,
      title: "Interactive Active Recall",
      desc: "Rather than passive re-reading, lessons prompt learners to derive theories logically, creating durable neural retention paths."
    },
    {
      icon: <Milestone className="w-6 h-6 text-teal-400" />,
      title: "Cognitive Scaffolding",
      desc: "Deconstructing massive syllabus targets into incremental subsets, ensuring immediate success before stepping up complexity."
    },
    {
      icon: <Sliders className="w-6 h-6 text-teal-400" />,
      title: "Strategy-Oriented Praise",
      desc: "Fostering standard resilience by celebrating logical layouts, conceptual attempts, and meticulous trial iterations."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-mono text-teal-400 tracking-wider uppercase font-semibold block mb-2">
            // BACKGROUND & METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            20+ Years of Pedagogical Mastery
          </h2>
          <div className="mt-2 h-1 w-20 bg-teal-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-11 items-start">
          
          {/* Biography Column */}
          <div className="lg:col-span-5 flex flex-col space-y-6 text-left text-slate-300">
            <h3 className="text-xl font-bold text-white tracking-tight">
              A Personal Note from Soje Ezekiel Oluwaseyi
            </h3>
            
            <p className="leading-relaxed text-sm md:text-base">
              {personalInfo.bioDetailed}
            </p>

            <p className="leading-relaxed text-sm md:text-base">
              Throughout my journey teaching both locally and globally, I have recognized that education is a collaborative effort between the parent, the mentor, and the student. High-pressure testing and passive lectures often fail. Instead, by integrating tailored digital classrooms, physical scratchboards, and customized worksheets, I ensure that my students enter examinations not with mathematical anxiety, but with absolute analytical confidence.
            </p>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 mt-4 relative">
              <Quote className="absolute -top-3 left-4 w-7 h-7 text-teal-500/25" />
              <p className="text-slate-300 italic text-xs md:text-sm leading-relaxed pl-4 font-sans">
                "We don't praise innate genius. We praise structured work layouts, visual spatial attempts, and iteration. That is the foundational spark of a failure-proof academic student."
              </p>
              <span className="block text-[10px] font-mono text-teal-400 mt-2 pl-4 uppercase font-semibold">
                — TEACHING PHILOSOPHY GUIDELINE
              </span>
            </div>
          </div>

          {/* Professional Full Portrait Column */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/0 to-transparent z-10" />
              <img
                src="/photo.jpg"
                alt="Soje Ezekiel Oluwaseyi - Executive Portrait"
                className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 text-left">
                <span className="text-[9px] font-mono text-teal-400 uppercase tracking-widest block font-bold leading-none">FOUNDING PEDAGOGUE</span>
                <h4 className="text-base font-extrabold text-white tracking-tight mt-1 leading-none">{personalInfo.name}</h4>
              </div>
            </div>
            
            {/* Custom Brand Logo Verification Badge */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-850 flex items-center space-x-3 text-left">
              <div className="h-11 px-2 py-0.5 shrink-0 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.jpg"
                  alt="My School Companion Logo"
                  className="h-full w-auto max-w-[100px] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-widest leading-none">ACADEMIC BOARD</span>
                <span className="block text-[11px] font-bold text-teal-400 mt-1 leading-none uppercase tracking-wide">ESTABLISHED 2006</span>
                <span className="block text-[9px] text-slate-400 mt-1 leading-none truncate font-medium">My School Companion</span>
              </div>
            </div>
          </div>

          {/* Philosophy Pillars Column */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 text-left">
              <h4 className="text-xs font-mono text-slate-400 tracking-wider uppercase font-semibold mb-6">
                THE MY SCHOOL COMPANION FRAMEWORK
              </h4>

              <div className="flex flex-col space-y-6">
                {pillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-850 shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white tracking-tight">{pillar.title}</h5>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick credentials log card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-950/40 to-slate-900 border border-teal-500/20 text-left flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-xs text-teal-400 font-mono tracking-wider leading-none">GLOBAL AVAILABILITY</span>
                <span className="text-base font-bold text-white mt-1.5 leading-none">24 Hour Digital Portal</span>
                <span className="text-xs text-slate-400 mt-1.5 leading-normal">Flexible timezone alignments for EU, US & West Africa.</span>
              </div>
              <span className="text-3xl text-teal-400 shrink-0 select-none">🌐</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
