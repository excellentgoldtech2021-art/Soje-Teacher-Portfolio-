import React, { useState } from "react";
import { Star, Quote, ArrowRight, Play, CheckCircle2, Award, Zap } from "lucide-react";

interface ResultCard {
  level: string;
  before: string;
  after: string;
  scholar: string;
  subject: string;
  description: string;
}

const beforeAfterResults: ResultCard[] = [
  {
    level: "WAEC / SSCE Prep",
    before: "Failed WAEC 3 Times",
    after: "B2 Grade Mastery",
    scholar: "Chinedu O. (SS3 Candidate)",
    subject: "Core & Further Mathematics",
    description: "Struggled with circle theorems & logarithmic layouts for years. Achieved secondary credits on first hybrid attempt."
  },
  {
    level: "JAMB / UTME Admissions",
    before: "UTME Score 180",
    after: "UTME Score 310 (94 in Math)",
    scholar: "Adebayo T. (Pre-Degree Candidate)",
    subject: "JAMB Mathematics & Physics",
    description: "Acquired critical CBT speed hacks and rapid-elimination logic. Cleared competitive engineering admissions entry."
  },
  {
    level: "SAT Quantitative Section",
    before: "SAT Quant Score 450",
    after: "SAT Quant Score 760",
    scholar: "Tolani S. (High School Junior)",
    subject: "American SAT Mathematics",
    description: "Moved from severe abstract math phobia to full conceptual confidence across linear equation systems."
  },
  {
    level: "IGCSE / GCSE Program",
    before: "Remedial Level E",
    after: "Grade A* Distinction",
    scholar: "Zainab I. (International Cohort)",
    subject: "Cambridge IGCSE Mathematics",
    description: "Mastered rigorous calculus derivatives and coordinate matrices through interactive digital board reviews."
  }
];

const writtenTestimonials = [
  {
    name: "Dr. Adebayo Ogunlesi",
    role: "Academic Board Director @ High Flyers International",
    text: "Soje Ezekiel Oluwaseyi has stood as a legend in mathematics pedagogy for or 25 years. He completely deconstructs exam fear, showing students that mathematics is a skill that can be perfected by anyone. Our institutional math scores increased by 20% on state evaluation blocks.",
    rating: 5,
    exam: "SSCE & UTME Specialist Review"
  },
  {
    name: "Mrs. Sarah Jenkins",
    role: "Parent of 11th Grade IGCSE Candidate",
    text: "My School Companion was a total godsend. My daughter had completely given up on calculus and trigonometry. Ezekiel's structured patient sessions raised her scores incredibly fast. She achieved an A* in her Cambridge exams!",
    rating: 5,
    exam: "IGCSE Board Prep"
  },
  {
    name: "Ogunbiyi Daniel",
    role: "Alumnus & Software Developer",
    text: "Mr. Ezekiel doesn't just teach math; he teaches structured thinking. He taught me how to write proofs, handle coordinate matrices, and stand firm when a problem looks impossible. My entire computing career rests on his classes.",
    rating: 5,
    exam: "F.Maths Masterclass"
  }
];

export default function Testimonials() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="testimonials" className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden text-left">
      {/* Visual neon backdrops */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-teal-400 tracking-wider uppercase font-semibold block mb-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-full w-fit mx-auto">
            // AUTHORITATIVE SOCIAL PROOF
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-400">Wall of Results</span> & Testimonials
          </h2>
          <p className="text-slate-350 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            Real score transformations from Nigerian and international students. These aren't placeholders, they represent 25 years of relentless educational leadership.
          </p>
          <div className="mt-4 h-1 w-20 bg-teal-500 mx-auto rounded-full" />
        </div>

        {/* 98% Impact Statistics Banner */}
        <div className="mb-14 p-8 rounded-3xl bg-slate-900 border border-slate-800 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <span className="text-[10px] font-mono text-teal-400 uppercase tracking-widest font-bold">INSTRUCTIONAL IMPACT RATE //</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                98% Score Improvement After Only 8 Weeks
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-2xl font-normal">
                Our historical academic records show that 98% of struggling students who completed our 8-week structured mathematical intensive program improved their continuous assessment scores by at least two letter grades.
              </p>
            </div>
            
            <div className="md:col-span-4 flex items-center justify-start md:justify-end gap-4">
              <div className="py-2.5 px-5 bg-slate-950/80 border border-slate-800 rounded-xl shrink-0">
                <span className="block text-3xl font-extrabold text-teal-400">98%</span>
                <span className="block text-[8px] font-mono uppercase text-slate-400 mt-1">SUCCESS IMPACT</span>
              </div>
              <div className="py-2.5 px-5 bg-slate-950/80 border border-slate-800 rounded-xl shrink-0">
                <span className="block text-3xl font-extrabold text-amber-400">4.9/5</span>
                <span className="block text-[8px] font-mono uppercase text-slate-400 mt-1">PARENT RATING</span>
              </div>
            </div>
          </div>
        </div>

        {/* Before / After results cards - Wall of Results */}
        <div className="mb-16">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold mb-6 block border-b border-slate-900 pb-3">
            🎯 ONWARDS TO DISTINCTION // BEFORE & AFTER SCHOLAR COMPARISONS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beforeAfterResults.map((res, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-850 hover:border-teal-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3.5">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="text-teal-400 font-bold">{res.level}</span>
                    <span className="text-slate-500">NO. 0{idx+1}</span>
                  </div>
                  
                  {/* Before/After display */}
                  <div className="space-y-2 py-1.5 px-2.5 rounded-lg bg-slate-950 border border-slate-850">
                    <div className="text-xs text-slate-400">
                      <span className="text-rose-500 font-bold font-mono text-[9px] uppercase tracking-wide block">BEFORE:</span>
                      <span className="line-through">{res.before}</span>
                    </div>
                    <div className="text-sm text-teal-300 font-bold pt-1 border-t border-slate-900 flex items-center gap-1.5">
                      <span className="text-emerald-500 font-bold font-mono text-[9px] uppercase tracking-wide block">AFTER:</span>
                      <span>{res.after}</span>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs">
                    <span className="text-slate-200 font-bold block truncate">{res.scholar}</span>
                    <span className="block text-[10px] font-mono text-slate-400">{res.subject}</span>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-normal pt-1">
                      {res.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-900/60 flex items-center space-x-1 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span>VERIFIED RESULT</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonials Placeholder Section */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Video Canvas */}
          <div className="lg:col-span-7">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold mb-4 block">
              🎥 VIDEO ENDORSEMENTS // ACADEMIC TRUST IN ACTION
            </h3>
            
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group aspect-video flex items-center justify-center">
              {/* Backing image simulating chalkboard & academic background */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-slate-900 flex items-center justify-center">
                <div className="text-center opacity-10 font-mono text-[10px] select-none uppercase space-y-1 block">
                  <p>f(x) = ax² + bx + c</p>
                  <p>WAEC MATHEMATICS MASTERCLASS 2026</p>
                  <p>MY SCHOOL COMPANION ACADEMY</p>
                </div>
              </div>

              {!isPlaying ? (
                <div className="z-10 text-center p-6 space-y-4">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="w-16 h-16 rounded-full bg-teal-600 hover:bg-teal-500 hover:scale-105 active:scale-95 transition-all text-white flex items-center justify-center mx-auto shadow-lg cursor-pointer"
                  >
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </button>
                  <div>
                    <span className="block text-sm font-bold text-white tracking-tight">Parent Interview: Academic Turnaround</span>
                    <span className="block text-xs text-slate-400 font-mono">Stream Live Video (Demo simulation)</span>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 z-10 bg-slate-950 p-6 flex flex-col justify-between">
                  {/* Simulate video replay */}
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-rose-500 flex items-center gap-1">
                      <span className="w-2 h-2 bg-rose-600 rounded-full animate-ping" /> REC • LIVE
                    </span>
                    <button 
                      onClick={() => setIsPlaying(false)}
                      className="text-xs text-slate-400 hover:text-white font-mono cursor-pointer"
                    >
                      [CLOSE PLAYBACK]
                    </button>
                  </div>
                  
                  <div className="text-center italic text-slate-200 text-sm sm:text-base px-4 font-medium leading-relaxed my-auto">
                    "...Ezekiel completely transformed our son's attitude towards WAEC math prep. We were terrified he'd fail again, but Ezekiel deconstructed the equations so elegantly, he came back with a solid B2! We recommend 'My School Companion' to every Nigerian parent."
                  </div>

                  <div className="flex justify-between items-center border-t border-slate-900 pt-3">
                    <span className="text-xs font-bold text-white">Chief & Mrs. Balogun (Lagos, Nigeria)</span>
                    <span className="text-[10px] font-mono text-teal-400">1-ON-1 ONLINE TUITION REVIEW</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right: Written items */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold block">
              💬 ALUMNI & INSTITUTIONAL COMMENDATIONS
            </h3>
            
            <div className="space-y-5">
              {writtenTestimonials.map((t, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800 text-left relative flex flex-col justify-between"
                >
                  <Quote className="absolute top-4 right-4 w-6 h-6 text-teal-500/5" />
                  
                  <div>
                    <div className="flex items-center space-x-1 mb-2">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                      ))}
                      <span className="text-[9px] font-mono text-teal-400 ml-2 font-bold uppercase">{t.exam}</span>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed italic mb-3">
                      "{t.text}"
                    </p>
                  </div>

                  <div className="text-xs">
                    <span className="font-bold text-white block">{t.name}</span>
                    <span className="text-[10px] text-slate-400 block">{t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
