import React from "react";
import { motion } from "motion/react";
import { Award, ShieldAlert, Sparkles, Send, GraduationCap, Video, Users, CheckCircle } from "lucide-react";
import { personalInfo } from "../data";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-slate-950">
      {/* Decorative background vectors */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] rounded-full bg-teal-500/10 blur-[80px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[25rem] h-[25rem] rounded-full bg-slate-800/40 blur-[100px]" />
        
        {/* Math/Grid lines decoration overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415510_1px,transparent_1px),linear-gradient(to_bottom,#33415510_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Title & CTA Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-mono font-semibold tracking-wider uppercase w-fit">
              <GraduationCap className="w-4 h-4 text-teal-300" />
              <span>EST. 2006 • 25 YEARS OF PROVEN RESULTS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[2.85rem] font-extrabold text-white tracking-tight leading-[1.12]">
              Nigeria's Mathematics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-500">
                Examination Specialist
              </span>
            </h1>

            <div className="border-l-2 border-teal-500 pl-4 py-1 italic bg-slate-900/30 rounded-r-lg max-w-2xl">
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                "For 25 years, I have stood at the frontline of mathematics education in Nigeria — turning confusion into clarity, fear into confidence, and average scores into distinctions. My students don't just pass mathematics. They master it."
              </p>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm font-semibold tracking-wide block leading-relaxed max-w-2xl">
              🎓 Covering <span className="text-teal-400 font-bold">BECE • SSCE/WAEC • NECO • NABTEB • JAMB/UTME</span> — JSS1 to University Entrance & International Exams (<span className="text-teal-400 font-bold">SAT & GCSE</span>).
            </p>

            {/* Quick credentials badges */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center space-x-2.5">
                <Video className="w-5 h-5 text-teal-400 shrink-0" />
                <span className="text-xs font-medium text-slate-300">Live Online Classrooms</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center space-x-2.5">
                <Users className="w-5 h-5 text-teal-400 shrink-0" />
                <span className="text-xs font-medium text-slate-300">Personal Mentorship</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 flex items-center space-x-2.5">
                <Award className="w-5 h-5 text-teal-400 shrink-0" />
                <span className="text-xs font-medium text-slate-300">International Boards</span>
              </div>
            </div>

            {/* Exam prep badges list as requested */}
            <div className="pt-3 max-w-lg">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-teal-400 font-bold mb-2">
                EXAMINATION PREPARATION OFFERS:
              </span>
              <div className="flex flex-wrap gap-2">
                {["SAT", "GCSE", "IGCSE", "JAMB", "WAEC", "NECO", "AP & CHECKPOINT"].map((exam) => (
                  <span
                    key={exam}
                    className="px-2.5 py-1 text-xs font-mono font-bold rounded-lg bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-teal-500/30 text-slate-300 hover:text-white transition-all cursor-default select-none shadow-sm"
                  >
                    {exam}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onNavigate("sandbox")}
                className="px-8 py-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-base transition-all shadow-lg shadow-teal-900/20 flex items-center justify-center space-x-3 cursor-pointer hover:-translate-y-0.5"
              >
                <Sparkles className="w-5 h-5 text-emerald-300" />
                <span>Try the AI Lesson Sandbox</span>
              </button>
              
              <button
                onClick={() => onNavigate("portfolio")}
                className="px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 hover:text-white text-slate-200 border border-slate-700 font-semibold text-base transition-all flex items-center justify-center space-x-2 cursor-pointer hover:-translate-y-0.5"
              >
                <span>Syllabus & Lesson Plans</span>
              </button>
            </div>
          </motion.div>

          {/* Interactive Bento Showcase Profile Card Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Profile Glassmorphism Bento Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
              
              {/* Internal neon accent */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/80 to-transparent" />

              {/* Styled Interactive Frame displaying the full portrait of the educator */}
              <div className="aspect-[4/5] sm:aspect-[3/4] rounded-xl bg-slate-950/80 border border-slate-800 overflow-hidden relative flex flex-col justify-between p-5">
                
                {/* Visual Grid Layer inside the frame */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415505_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />

                 {/* Top header illustrating a dynamic digital classroom board status */}
                <div className="flex justify-between items-center relative z-10 w-full mb-3">
                  <div className="flex items-center space-x-2">
                    <img
                      src="/logo.jpg"
                      alt="My School Companion Logo"
                      className="h-7 w-auto max-w-[80px] object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[11px] font-mono font-bold text-white tracking-wider uppercase">MY SCHOOL COMPANION</span>
                  </div>
                  <span className="text-[9px] font-mono text-teal-400 bg-teal-950/40 border border-teal-900/40 px-2 py-0.5 rounded uppercase font-bold tracking-wide">STUDIO // LIVE</span>
                </div>

                {/* Continuous Full Photographic Layout with Glassmorphism Overlay */}
                <div className="flex-1 relative rounded-lg overflow-hidden border border-slate-850">
                  {/* Full image */}
                  <img
                    src="/photo.jpg"
                    alt="Soje Ezekiel Oluwaseyi - Executive Educator"
                    className="absolute inset-0 w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Dark subtle shadow gradient to assist reading white text overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent pointer-events-none" />

                  {/* SMALL FLOATING BADGES OVER PHOTO FOR RECONGNIZED CREDENTIALS */}
                  
                  {/* Badge 1: 25+ years legacy */}
                  <motion.div
                    animate={{ y: [0, -6, 0], rotate: [0, 0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                    className="absolute top-4 left-3 px-2.5 py-1.5 flex items-center space-x-2 rounded-xl bg-slate-950/85 border border-amber-500/30 backdrop-blur-md shadow-lg shadow-amber-950/20 select-none z-10"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-extrabold text-white leading-none">25+ YEARS</span>
                      <span className="text-[8px] font-mono font-bold text-amber-400 uppercase tracking-wider leading-none mt-0.5">EXCELLENCE</span>
                    </div>
                  </motion.div>

                  {/* Badge 2: WAEC & NECO board prep */}
                  <motion.div
                    animate={{ y: [0, 6, 0], rotate: [0, -0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
                    className="absolute top-20 right-3 px-2.5 py-1.5 flex items-center space-x-2 rounded-xl bg-slate-950/85 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-950/20 select-none z-10"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-extrabold text-white leading-none">WAEC & NECO</span>
                      <span className="text-[8px] font-mono font-bold text-emerald-400 uppercase tracking-wider leading-none mt-0.5">A1 DISTINCTIONS</span>
                    </div>
                  </motion.div>

                  {/* Badge 3: SAT & GCSE curriculum coverage */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                    className="absolute top-40 left-3 px-2.5 py-1.5 flex items-center space-x-2 rounded-xl bg-slate-950/85 border border-indigo-500/30 backdrop-blur-md shadow-lg shadow-indigo-950/20 select-none z-10"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-extrabold text-white leading-none">SAT & GCSE</span>
                      <span className="text-[8px] font-mono font-bold text-indigo-400 tracking-wider uppercase leading-none mt-0.5">INT'L BOARDS</span>
                    </div>
                  </motion.div>

                  {/* Badge 4: JAMB & NABTEB entry exams */}
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                    className="absolute bottom-28 right-3 px-2.5 py-1.5 flex items-center space-x-2 rounded-xl bg-slate-950/85 border border-teal-500/30 backdrop-blur-md shadow-lg shadow-teal-950/20 select-none z-10"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
                    <div className="flex flex-col text-left">
                      <span className="text-[10px] font-extrabold text-white leading-none">JAMB & NABTEB</span>
                      <span className="text-[8px] font-mono font-bold text-teal-400 uppercase tracking-wider leading-none mt-0.5">300+ SCORE INTENT</span>
                    </div>
                  </motion.div>

                  {/* Small floating tag on the image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-900/95 border border-slate-800 backdrop-blur-md flex flex-col text-left z-10">
                    <span className="text-[9px] font-mono text-teal-400 uppercase tracking-widest leading-none font-bold">FOUNDER & LEAD PEDAGOGUE</span>
                    <span className="text-sm font-bold text-white tracking-tight leading-none mt-1.5">{personalInfo.name}</span>
                    <p className="text-[10px] text-slate-400 leading-snug mt-1 font-normal">
                      25+ years of high-rigorous mathematical and examination-focused mentoring.
                    </p>
                  </div>
                </div>

                {/* Footer detailing system status */}
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 pt-2.5 mt-3 border-t border-slate-800/85 relative z-10 w-full">
                  <span>LATENCY: ZERO_DELAY_MINDSET</span>
                  <span>HYBRID_MODE: ENGAGED</span>
                </div>
              </div>

              {/* Under-card statistics summary panel */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {personalInfo.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 text-center">
                    <span className="block text-xl font-bold text-teal-400 tracking-tight">{stat.value}</span>
                    <span className="block text-[10px] text-slate-400 font-mono tracking-wider uppercase mt-0.5">{stat.label}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Small floating professional endorsement card */}
            <div className="absolute -bottom-5 -left-6 bg-slate-900 border border-slate-800 p-3 rounded-lg shadow-xl flex items-center space-x-2.5 max-w-xs z-20">
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                🏆
              </div>
              <div className="text-left">
                <p className="text-xs text-white font-semibold leading-tight">IGCSE Physics & Math</p>
                <p className="text-[10px] text-slate-400 leading-tight mt-0.5">Top West African Scores 2024</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
