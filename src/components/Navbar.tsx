import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Menu, X, ArrowRight, MessageSquare } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Biography", id: "about" },
    { label: "Services", id: "services" },
    { label: "Interactive Sandbox", id: "sandbox" },
    { label: "Lesson & Content Samples", id: "portfolio" },
    { label: "Insights Blog", id: "blog" },
    { label: "Endorsements", id: "testimonials" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div
            onClick={() => handleLinkClick("hero")}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="h-11 px-2 py-0.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg group-hover:border-teal-500/40 transition-all overflow-hidden shrink-0">
              <img
                src="/logo.jpg"
                alt="My School Companion Logo"
                className="h-full w-auto max-w-[120px] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-lg font-extrabold text-white tracking-widest block font-sans">
                MY SCHOOL COMPANION
              </span>
              <span className="text-xs text-slate-400 font-mono tracking-wider block -mt-1 group-hover:text-teal-400 transition-colors">
                SOJE EZEKIEL OLUWASEYI
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? "text-teal-400 bg-slate-800/60"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/30"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleLinkClick("contact")}
              className="px-5 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-medium text-sm flex items-center space-x-2 transition-all shadow-md shadow-teal-900/20 hover:shadow-teal-400/10 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5 sm:px-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-all ${
                    activeSection === link.id
                      ? "text-teal-400 bg-slate-800"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRightIcon className="w-4 h-4 text-slate-500" />
                </button>
              ))}
              <div className="pt-4 border-t border-slate-800/60 flex flex-col space-y-3">
                <button
                  onClick={() => handleLinkClick("contact")}
                  className="w-full py-3.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-medium text-center flex items-center justify-center space-x-2 transition-all shadow-lg shadow-teal-900/10 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Free Consultation</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Simple internal helper icon to satisfy standard builds
function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}
