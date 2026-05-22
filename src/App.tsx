import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Exams from "./components/Exams";
import AISandbox from "./components/AISandbox";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { personalInfo } from "./data";
import { BookOpen, Phone, Mail, GraduationCap, Youtube, Linkedin, Facebook, Instagram } from "lucide-react";

const TikTokIcon = () => (
  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.73 4.1 1.13 1.05 2.65 1.58 4.19 1.63V9.7c-1.74-.06-3.41-.71-4.72-1.89-.04 2.27-.01 4.54-.03 6.81-.08 1.84-.71 3.65-1.92 5.03-1.63 1.84-4.22 2.61-6.55 1.94-2.67-.71-4.57-3.23-4.51-6.01.03-2.61 1.77-4.99 4.31-5.65.65-.17 1.34-.2 2-.12v4.06c-.63-.09-1.28-.02-1.85.25-.87.41-1.39 1.31-1.38 2.27.01.99.64 1.88 1.56 2.22.99.39 2.16.14 2.87-.63.63-.66.82-1.61.8-2.49-.01-3.21-.01-6.42-.01-9.63z" />
  </svg>
);

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Multi-section scroll tracker to highlight navbar options based on visible modules
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "sandbox", "portfolio", "blog", "testimonials", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-teal-500 selection:text-white antialiased">
      {/* Dynamic Floating Navigation */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Primary Section Blocks */}
      <Hero onNavigate={handleNavigate} />
      
      <AboutMe />
      
      <Services />

      <Exams />
      
      <AISandbox />
      
      <Portfolio />
      
      <Blog />
      
      <Testimonials />
      
      <Contact />

      {/* Professional Footer aligned with aesthetic design principles */}
      <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-300 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 text-left">
            
            {/* Column 1: Brand & Direct Summary */}
            <div className="lg:col-span-2 flex flex-col space-y-4">
              <div className="flex items-center space-x-3.5">
                <div className="h-10 px-2 py-0.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="/logo.jpg"
                    alt="My School Companion Logo"
                    className="h-full w-auto max-w-[100px] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-base font-bold text-white tracking-tight">MY SCHOOL COMPANION</span>
              </div>
              <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
                Est. 2006. A professional personal academic advisory and curriculum content developer designed and refined over 20+ years by lead pedagogue Soje Ezekiel Oluwaseyi. Enabling online and offline hybrid classes globally.
              </p>
              <span className="block text-[11px] font-mono text-slate-300 uppercase tracking-widest font-semibold mt-1">
                @2026 MY SCHOOL COMPANION. All rights reserved.
              </span>
            </div>

            {/* Column 2: Structural Navigation links */}
            <div className="flex flex-col space-y-3.5">
              <h4 className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">Sections</h4>
              <button onClick={() => handleNavigate("about")} className="text-xs hover:text-white transition-colors text-left font-medium cursor-pointer text-slate-200">Biography</button>
              <button onClick={() => handleNavigate("services")} className="text-xs hover:text-white transition-colors text-left font-medium cursor-pointer text-slate-200">Academic Services</button>
              <button onClick={() => handleNavigate("sandbox")} className="text-xs hover:text-white transition-colors text-left font-medium cursor-pointer text-slate-200">AI Sandbox Demo</button>
              <button onClick={() => handleNavigate("portfolio")} className="text-xs hover:text-white transition-colors text-left font-medium cursor-pointer text-slate-200">Work Blueprints</button>
              <button onClick={() => handleNavigate("blog")} className="text-xs hover:text-white transition-colors text-left font-medium cursor-pointer text-slate-200">Insights Blog</button>
            </div>

            {/* Column 3: Contact highlights */}
            <div className="flex flex-col space-y-3.5">
              <h4 className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">Fast Contact</h4>
              <div className="flex items-center space-x-2 text-xs">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-200 font-medium">09050278999</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-slate-200 font-medium truncate max-w-[180px]">{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs pt-1">
                <span className="text-teal-400 font-bold shrink-0">🌍</span>
                <span className="text-slate-300 italic font-medium leading-none">Globally Accessible Hybrid Services</span>
              </div>
            </div>

            {/* Column 4: Social Media Links */}
            <div className="flex flex-col space-y-3.5">
              <h4 className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">Connect With Us</h4>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://www.instagram.com/schoolcompanionacademy?igsh=MTI4cm5kdXBxbDdubw==&utm_source=ig_contact_invite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs text-slate-200 hover:text-white transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-[#E1306C] group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/school-companion-academy-0766ab405?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs text-slate-200 hover:text-white transition-colors group"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.facebook.com/share/1PKJTF2PBo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs text-slate-200 hover:text-white transition-colors group"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2] group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.tiktok.com/@myschoolcompanion?_r=1&_t=ZS-96YEpRksrZt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs text-slate-200 hover:text-white transition-colors group"
                >
                  <TikTokIcon />
                  <span>TikTok</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs text-slate-200 hover:text-white transition-colors group"
                >
                  <Youtube className="w-4 h-4 text-[#FF0000] group-hover:scale-110 transition-transform" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>

          </div>

          <div className="mt-12 pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-300">
            <span className="text-left leading-normal max-w-md">
              Custom Designed Portfolio Platform for Soje Ezekiel Oluwaseyi. Engineered to fulfill aesthetic, responsive, and server-connected specifications.
            </span>
            <span className="font-mono uppercase tracking-widest text-[10px] text-teal-400 font-semibold">
              LEVEL: ADVANCED_PEDAGOGY
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
