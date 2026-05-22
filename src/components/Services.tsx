import React from "react";
import { Monitor, Users, BookOpen, Compass, CheckCircle2 } from "lucide-react";
import { servicesData } from "../data";

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Monitor": return <Monitor className="w-6 h-6 text-teal-400" />;
      case "Users": return <Users className="w-6 h-6 text-teal-400" />;
      case "BookOpen": return <BookOpen className="w-6 h-6 text-teal-400" />;
      case "Compass": return <Compass className="w-6 h-6 text-teal-400" />;
      default: return <BookOpen className="w-6 h-6 text-teal-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-900 border-t border-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Giant Single Card Container */}
        <div className="w-full bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-left group">
          
          {/* Internal background neon highlight */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/60 to-transparent" />
          <div className="absolute -right-32 -top-32 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl select-none pointer-events-none" />

          {/* Section title & header within the big card */}
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-mono text-teal-400 tracking-wider uppercase font-semibold block mb-3">
              // ELITE GLOBAL PEDAGOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Online Tutoring.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-500">
                World-Class Teaching.
              </span><br />
              Anywhere You Are.
            </h2>
            <div className="mt-4 h-1 w-24 bg-teal-500 rounded-full" />
            
            <p className="text-slate-300 text-sm sm:text-base mt-6 leading-relaxed max-w-2xl font-normal">
              Experience direct professional mentoring designed and refined over 20+ years by master pedagogue Soje Ezekiel Oluwaseyi. Enabling ambitious prep for global and regional boundaries: <strong>SAT, GCSE, IGCSE, JAMB, WAEC, NECO</strong>, checkpoints, and higher collegiate entry examinations.
            </p>
          </div>

          {/* Sub cards on it */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 relative z-10">
            {servicesData.map((service) => (
              <div 
                key={service.id}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-850 hover:border-teal-500/30 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between items-start text-left group/card hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/40"
              >
                <div>
                  {/* Icon comes BEFORE/above text */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-teal-400 mb-5 inline-flex items-center justify-center shrink-0 group-hover/card:bg-teal-950/30 group-hover/card:border-teal-500/20 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  
                  {/* Text under / below icon */}
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-teal-400 uppercase tracking-widest font-semibold block">
                      {service.category}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bullets lists */}
                  <div className="mt-5 space-y-2.5 pb-2">
                    {service.bullets.slice(0, 2).map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2 text-slate-350">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 shrink-0" />
                        <span className="text-[11px] leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sub-card footer subjects */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 w-full">
                  <span className="block text-[8px] font-mono uppercase tracking-widest text-[#94a3b8]">PREPARED SCHOLARS</span>
                  <span className="block text-[11px] font-semibold text-teal-300 mt-1 truncate">
                    {service.subjects.slice(0, 2).join(" • ")} {service.subjects.length > 2 ? "• +" : ""}
                  </span>
                </div>

              </div>
            ))}
          </div>

          {/* Under-grid advisory notification */}
          <div className="mt-10 pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs relative z-10 text-slate-400">
            <span>💡 All online sessions are complete with custom active-recall digital worksheets, concept recordings, and regular diagnostic testing logs.</span>
            <span className="font-mono text-teal-400 font-bold uppercase tracking-wider text-[10px]">Companion-Pedagogy Platform</span>
          </div>

        </div>

      </div>
    </section>
  );
}
