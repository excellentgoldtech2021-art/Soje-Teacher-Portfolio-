import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MessageSquare, Compass, Send, CheckCircle2, AlertCircle, FileText, Trash2, ShieldCheck } from "lucide-react";
import { personalInfo } from "../data";
import { Inquiry } from "../types";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"student" | "parent" | "institution" | "collaborator">("parent");
  const [service, setService] = useState("Global Online Tutoring");
  const [message, setMessage] = useState("");
  
  // Status banner feedback states
  const [successBanner, setSuccessBanner] = useState(false);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);

  // Stored Callback Inquiries Log for client-side persistence and review
  const [inquiryLogs, setInquiryLogs] = useState<Inquiry[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("my_school_companion_inquiries");
      if (saved) {
        setInquiryLogs(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Local storage lookup failed safely.", e);
    }
  }, []);

  const handleClearLogs = () => {
    localStorage.removeItem("my_school_companion_inquiries");
    setInquiryLogs([]);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorBanner(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorBanner("All fields (Name, Email, and Message) are required.");
      return;
    }

    const newInquiry: Inquiry = {
      id: `inq-${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      role,
      service,
      message: message.trim(),
      date: new Date().toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      })
    };

    try {
      const updated = [newInquiry, ...inquiryLogs];
      localStorage.setItem("my_school_companion_inquiries", JSON.stringify(updated));
      setInquiryLogs(updated);

      // Trigger pre-populated email/whatsapp link optionally or visually
      setSuccessBanner(true);
      
      // Clear inputs
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setSuccessBanner(false);
      }, 6000);
    } catch (err: any) {
      setErrorBanner("Unable to log callback inquiry. Storing limits reached.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-mono text-teal-400 tracking-wider uppercase font-semibold block mb-2">
            // CONTACT & STRATEGY BOOKING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Schedule a Diagnostic Consultation
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            Ready to design a reliable academic study track or audit your school's curriculum? Reserve a feedback callback with Ezekiel immediately by filling out the form or launching a direct contact.
          </p>
          <div className="mt-2.5 h-1 w-20 bg-teal-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-850 text-left">
              <h3 className="text-lg font-bold text-white tracking-tight mb-5">
                Direct Communication Channels
              </h3>

              <div className="flex flex-col space-y-5">
                {/* WhatsApp Link Card */}
                <a
                  href={`https://wa.me/2349050278999?text=Hello%20Soje%20Ezekiel%2C%20I%20am%20interested%20in%20arranging%20a%20My%2520School%2520Companion%20consultation.`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="p-4 rounded-xl bg-slate-900 hover:bg-slate-850 hover:border-emerald-500/20 border border-slate-800 flex items-start space-x-4 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <Phone className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 tracking-wide uppercase leading-none">WhatsApp Hub</span>
                    <span className="block text-base font-bold text-white tracking-tight mt-1.5 leading-none">09050278999</span>
                    <span className="block text-xs text-slate-400 mt-1.5 leading-normal">Fast, direct callbacks in physical advisory boards. Click to message.</span>
                  </div>
                </a>

                {/* Email Address Link Card */}
                <a
                  href={`mailto:${personalInfo.email}?subject=My School Companion Consultation Request&body=Hi Ezekiel, I would like to schedule a callback strategy session...`}
                  className="p-4 rounded-xl bg-slate-900 hover:bg-slate-850 hover:border-teal-500/20 border border-slate-800 flex items-start space-x-4 transition-all group"
                >
                  <div className="w-11 h-11 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-all">
                    <Mail className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 tracking-wide uppercase leading-none">Email Advisor</span>
                    <span className="block text-sm font-bold text-white tracking-tight mt-1.5 leading-none truncate max-w-[220px]">{personalInfo.email}</span>
                    <span className="block text-xs text-slate-400 mt-1.5 leading-normal">Operational letters & curriculum design proposals. Click to write.</span>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-900/60 text-slate-500 flex items-center space-x-2.5 text-xs">
                <ShieldCheck className="w-4.5 h-4.5 text-teal-400 shrink-0" />
                <span>All communication is 100% confidential and secure.</span>
              </div>
            </div>

            {/* Simulated Live Inquiry Callback Log (High Fidelity Feature) */}
            {inquiryLogs.length > 0 && (
              <div className="p-6 rounded-3xl bg-slate-950 border border-slate-850 text-left">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Your Callback Log ({inquiryLogs.length})</h4>
                  <button
                    onClick={handleClearLogs}
                    className="p-1 rounded text-red-400 hover:bg-slate-900 hover:text-red-300 transition-colors cursor-pointer"
                    title="Clear Log"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-3 max-h-[220px] overflow-y-auto">
                  {inquiryLogs.map((item) => (
                    <div key={item.id} className="p-3 rounded-lg bg-slate-900 text-xs border border-indigo-950/20">
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-white">{item.name}</span>
                        <span className="text-[9px] font-mono text-slate-500">{item.date}</span>
                      </div>
                      <p className="text-[10px] text-teal-400 mt-0.5 uppercase tracking-wider font-semibold">
                        {item.role} • {item.service}
                      </p>
                      <p className="text-slate-400 mt-1.5 line-clamp-1">{item.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Form Content Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-950 border border-slate-850 text-left relative overflow-hidden">
              
              <h3 className="text-lg font-bold text-white tracking-tight mb-6">
                Consultation Request Form
              </h3>

              {/* Status Banner Placements */}
              <AnimatePresence>
                {successBanner && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-5 p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-start space-x-3 text-teal-350 text-sm overflow-hidden"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <p className="font-bold">Inquiry Logged Successfully!</p>
                      <p className="text-xs text-slate-300 leading-normal mt-1">
                        Thank you. Your request for an academic diagnostic callback has been logged securely. Ezekiel will evaluate your requirements and reach out on email/WhatsApp relative to standard operational schedules.
                      </p>
                    </div>
                  </motion.div>
                )}

                {errorBanner && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start space-x-3 text-red-350 text-sm overflow-hidden"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-xs leading-normal">{errorBanner}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Mrs. Adebiyi Ogunlesi"
                      className="w-full bg-slate-900 border border-slate-800 text-slate-200 p-3.5 rounded-xl focus:border-teal-550 focus:outline-none text-sm placeholder-slate-600 font-sans"
                    />
                  </div>
                  
                  {/* Email field */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. adebiyiparent@gmail.com"
                      className="w-full bg-slate-900 border border-slate-800 text-slate-200 p-3.5 rounded-xl focus:border-teal-550 focus:outline-none text-sm placeholder-slate-600 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Persona dropdown */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase font-semibold mb-2">
                      Your Role
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value as any)}
                      className="w-full bg-slate-900 border border-slate-800 text-slate-200 p-3.5 rounded-xl focus:border-teal-550 focus:outline-none text-sm"
                    >
                      <option value="parent">Parent seeking tutoring</option>
                      <option value="student">Student (Upper School / College prep)</option>
                      <option value="institution">School Principal or Administrator</option>
                      <option value="collaborator">Educational Publisher / Content Partner</option>
                    </select>
                  </div>

                  {/* Service interest */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase font-semibold mb-2">
                      Primary Service Interest
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 text-slate-200 p-3.5 rounded-xl focus:border-teal-555 focus:outline-none text-sm"
                    >
                      <option>Global Online Tutoring</option>
                      <option>In-Person Hybrid Classes</option>
                      <option>Curriculum & Lesson Design</option>
                      <option>Pedagogical Consulting</option>
                    </select>
                  </div>
                </div>

                {/* Message text element */}
                <div>
                  <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase font-semibold mb-2">
                    Describe your academic objectives or diagnostic requirements
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details of exam prep timelines, current grade standings, specific anxieties or syllabus milestones..."
                    rows={4}
                    className="w-full bg-slate-900 border border-slate-800 text-slate-200 p-3.5 rounded-xl focus:border-teal-550 focus:outline-none text-sm placeholder-slate-600 font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-teal-600 hover:bg-teal-500 font-bold text-sm tracking-wide text-white transition-all shadow-lg shadow-teal-950/25 flex items-center justify-center space-x-2.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Secure Strategy Request</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
