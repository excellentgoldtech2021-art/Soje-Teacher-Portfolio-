import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MessageSquare, Send, BookOpen, User, ServerCrash, RotateCcw, AlertTriangle, FileText, CheckCircle } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  timestamp: string;
}

export default function AISandbox() {
  const [activeTab, setActiveTab] = useState<"planner" | "chat">("planner");
  
  // Lesson Planner States
  const [plannerSubject, setPlannerSubject] = useState("Mathematics");
  const [plannerTopic, setPlannerTopic] = useState("");
  const [plannerGrade, setPlannerGrade] = useState("Grade 10 (High School)");
  const [plannerNeeds, setPlannerNeeds] = useState("");
  const [plannerResult, setPlannerResult] = useState<string>("");
  const [plannerLoading, setPlannerLoading] = useState(false);
  const [plannerError, setPlannerError] = useState<string | null>(null);

  // Chat States
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: "initial",
      role: "assistant",
      text: "Hello! I am Ezekiel's digital pedagogical avatar. Ask me any conceptual educational questions, or ask about My School Companion's online study setups. How can I assist your learning path today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [chatLoading, setChatLoading] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);

  // Subject Presets
  const subjectPresets = [
    "Mathematics", "Physics", "Chemistry", "Curriculum Pedagogy", "SAT Test Prep"
  ];

  // Subject Topic Ideas for placeholders
  const getTopicPlaceholder = () => {
    switch (plannerSubject) {
      case "Mathematics": return "e.g., Solving Quadratic Equations by Completing the Square";
      case "Physics": return "e.g., Newton's Second Law & Air Resistance";
      case "Chemistry": return "e.g., Acid-Base Titrations & Color Indicators";
      case "Curriculum Pedagogy": return "e.g., Fostering Critical Pedagogy through Think-Pair-Share";
      case "SAT Test Prep": return "e.g., Mastering Systems of Equations quickly";
      default: return "Describe the specific concept to draft...";
    }
  };

  const handleSuggestTopic = (topic: string) => {
    setPlannerTopic(topic);
  };

  // Safe Simple Markdown-to-HTML Parser to style text securely without outer scripts
  const renderMarkdown = (text: string) => {
    if (!text) return null;
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      // Headers
      if (line.startsWith("### ")) {
        return <h4 key={idx} className="text-lg font-bold text-teal-300 mt-5 mb-2.5 tracking-tight border-b border-slate-800 pb-1">{line.replace("### ", "")}</h4>;
      }
      if (line.startsWith("## ") || line.startsWith("**")) {
        // Simple filter double checks
        const cleanText = line.replace("## ", "").replace(/\*\*/g, "");
        return <h3 key={idx} className="text-xl font-extrabold text-white mt-6 mb-3 tracking-tight">{cleanText}</h3>;
      }
      if (line.startsWith("- **") || line.startsWith("* **")) {
        const clean = line.replace(/^[-*]\s+\*\*/, "").replace(/\*\*/, "");
        const parts = clean.split(":");
        if (parts.length > 1) {
          return (
            <div key={idx} className="flex items-start space-x-2 my-2 mt-3 text-slate-300">
              <span className="text-teal-400 font-bold mt-0.5 shrink-0">■</span>
              <p className="text-sm">
                <strong className="text-white font-semibold">{parts[0]}:</strong>{parts.slice(1).join(":")}
              </p>
            </div>
          );
        }
      }
      // Bullet items
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return (
          <div key={idx} className="flex items-start space-x-2.5 my-1.5 pl-3 text-slate-300">
            <span className="text-teal-500 shrink-0 mt-1 h-1.5 w-1.5 rounded-full bg-teal-500" />
            <p className="text-sm leading-normal">{line.replace(/^[-*]\s+/, "")}</p>
          </div>
        );
      }
      // Equations or code blocks
      if (line.startsWith("$$") || line.startsWith("```")) {
        return null; // Skip raw delimiters
      }
      // Empty lines
      if (line.trim() === "") {
        return <div key={idx} className="h-3.5" />;
      }
      // Bold sub-inline filters
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, "$1");
      return <p key={idx} className="text-slate-300 text-sm leading-relaxed my-2">{formattedLine}</p>;
    });
  };

  // Generate Lesson Draft via server
  const handleGenerateLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!plannerTopic.trim()) {
      setPlannerError("Please write a topic description before compiling.");
      return;
    }

    setPlannerLoading(true);
    setPlannerError(null);
    setPlannerResult("");

    try {
      const response = await fetch("/api/ai/lesson-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: plannerSubject,
          topic: plannerTopic,
          gradeLevel: plannerGrade,
          studentNeeds: plannerNeeds,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to communicate with the compilation server.");
      }

      setPlannerResult(data.result);
    } catch (err: any) {
      console.error(err);
      setPlannerError(err.message || "Unable to reach server. Please review secret variables.");
      // Set an impressive realistic mock fallback plan so the showcase works either way!
      setPlannerResult(`## FALLBACK BLUEPRINT: ${plannerSubject.toUpperCase()} - ${plannerTopic.toUpperCase()}
### Title: Exploring ${plannerTopic} with Scaffolding Logic
*(Note: Visual Fallback active due to unconfigured Secrets. Below represents typical high-impact structured curriculum output)*

### Learning Objectives
1. **Differentiate** core characteristics of ${plannerTopic} from static textbooks.
2. **Apply** active-recall strategies to map formula operations.
3. **Draft** a concrete real-world model displaying Thermodynamic Efficiency values.

### Conceptual Warm-Up (2 min)
Imagine your smartphone getting hot after playing a 3D game. Why does that happen? It is thermodynamics! Electrical charge transfers to mechanical work, but has a 'tax' paid as dissipated heat. We call this systematic friction. Let's study how ${plannerTopic} measures this exact transaction.

### Core Guided Instruction (10 min)
- **Step 1: Isolation:** Isolate variables on your whiteboard to see where energy is introduced vs. where it departs.
- **Step 2: Scaffolding:** Always solve simplest forms first. Avoid jumping directly into combined derivatives.
- **Step 3: Verification:** Formulate your output proof explicitly in three sentences.

### Active Recall Exercises (5 min)
- **Problem A:** Write out the conceptual formula for ${plannerTopic} using only text descriptions (no numbers allowed!).
- **Problem B:** Predict and explain the logical consequence if external resistance defaults to infinity.

---
### Differentiated Assessment Rubric
- **Level 3 (Exemplary):** Logical layout is chronological, correct, and self-checked.
- **Level 2 (Developing):** Logical layout is correct, but relies on rote formula templates.
- **Level 1 (Beginning):** Calculations are incomplete; needs diagnostic coaching blocks.`);
    } finally {
      setPlannerLoading(false);
    }
  };

  // Send message to Lead Educator Chat Avatar
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = chatMessage.trim();
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessageObj: ChatMessage = {
      id: `${Date.now()}-user`,
      role: "user",
      text: userMsg,
      timestamp
    };

    setChatHistory((prev) => [...prev, userMessageObj]);
    setChatMessage("");
    setChatLoading(true);
    setChatError(null);

    try {
      // Map history for conversation memory
      const chatHistoryMapped = chatHistory.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMsg,
          chatHistory: chatHistoryMapped,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to reach AI dialog host.");
      }

      setChatHistory((prev) => [
        ...prev,
        {
          id: `${Date.now()}-bot`,
          role: "assistant",
          text: data.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err: any) {
      console.error(err);
      setChatError(err.message || "Failed to sync dialogue.");
      setChatHistory((prev) => [
        ...prev,
        {
          id: `${Date.now()}-bot-error`,
          role: "assistant",
          text: `My apologies, I had trouble synchronizing our communication loop. Key connections: you can reach me directly on WhatsApp (09050278999) or via Email (successmindset2021@gmail.com) for fast advisory bookings!`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <section id="sandbox" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-teal-400 tracking-wider uppercase font-semibold block mb-2">
            // LIVE DEMONSTRATION & DESIGN
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive Teaching Sandbox
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed">
            At My School Companion, we integrate modern technology into our daily pedagogy. 
            Select an option below to try my server-side AI lesson designer or chat with my educational clone.
          </p>
          <div className="mt-4 h-1 w-20 bg-teal-500 mx-auto rounded-full" />
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl bg-slate-900/60 p-1.5 border border-slate-800">
            <button
              onClick={() => setActiveTab("planner")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center space-x-2.5 transition-all cursor-pointer ${
                activeTab === "planner"
                  ? "bg-teal-600 text-white shadow-md shadow-teal-900/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Lesson Plan Architect</span>
            </button>
            <button
              onClick={() => setActiveTab("chat")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center space-x-2.5 transition-all cursor-pointer ${
                activeTab === "chat"
                  ? "bg-teal-600 text-white shadow-md shadow-teal-900/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Consultation Advisor Chat</span>
            </button>
          </div>
        </div>

        {/* Main Interface Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {activeTab === "planner" ? (
            <>
              {/* Planner Left Form Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between">
                <form onSubmit={handleGenerateLesson} className="space-y-5 text-left">
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center space-x-2.5 mb-2">
                    <Sparkles className="w-5 h-5 text-teal-400" />
                    <span>Configure Your Lesson Target</span>
                  </h3>

                  {/* Subject Input */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase font-semibold mb-2">
                      Syllabus stream
                    </label>
                    <select
                      value={plannerSubject}
                      onChange={(e) => setPlannerSubject(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-200 p-3 rounded-xl focus:border-teal-500 focus:outline-none text-sm"
                    >
                      {subjectPresets.map((subj) => (
                        <option key={subj} value={subj}>{subj}</option>
                      ))}
                    </select>
                  </div>

                  {/* Topic Input */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase font-semibold">
                        Topic or concept
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          const ideas = {
                            "Mathematics": "Completing the Square in Quadratic Equations",
                            "Physics": "Newtonian Friction and Kinetic Resistance",
                            "Chemistry": "Understanding Acid-Base Salt Titration",
                            "Curriculum Pedagogy": "Differentiating Tasks for Visual Learners",
                            "SAT Test Prep": "Solving SAT Algebra Systems with Substitution"
                          };
                          handleSuggestTopic((ideas as any)[plannerSubject] || "");
                        }}
                        className="text-[10px] font-mono hover:text-teal-400 text-slate-500 focus:outline-none cursor-pointer"
                      >
                        [Suggest Example]
                      </button>
                    </div>
                    <input
                      type="text"
                      value={plannerTopic}
                      onChange={(e) => setPlannerTopic(e.target.value)}
                      placeholder={getTopicPlaceholder()}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-200 p-3 rounded-xl focus:border-teal-500 focus:outline-none text-sm placeholder-slate-600 font-sans"
                    />
                  </div>

                  {/* Grade Selection */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase font-semibold mb-2">
                      Target student grade range
                    </label>
                    <select
                      value={plannerGrade}
                      onChange={(e) => setPlannerGrade(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-200 p-3 rounded-xl focus:border-teal-500 focus:outline-none text-sm"
                    >
                      <option>Grade 6 to 8 (Middle School)</option>
                      <option>Grade 9 to 10 (IGCSE / Early High)</option>
                      <option>Grade 11 to 12 (AP / SAT / Pre-Varsity)</option>
                      <option>Adult Learning / Pedagogy Workshop</option>
                    </select>
                  </div>

                  {/* Custom student needs (Optional) */}
                  <div>
                    <label className="block text-xs font-mono tracking-wider text-slate-400 uppercase font-semibold mb-2">
                      Special requests or adjustments (Optional)
                    </label>
                    <textarea
                      value={plannerNeeds}
                      onChange={(e) => setPlannerNeeds(e.target.value)}
                      placeholder="e.g., Struggling student experiencing math anxiety, or needs multiple visual sketches..."
                      rows={3}
                      className="w-full bg-slate-950 border border-slate-800 text-slate-200 p-3 rounded-xl focus:border-teal-500 focus:outline-none text-sm placeholder-slate-600 font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={plannerLoading}
                    className="w-full py-3.5 mt-2 rounded-xl bg-teal-600 hover:bg-teal-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold text-sm transition-all shadow-md shadow-teal-900/10 flex items-center justify-center space-x-2.5 cursor-pointer"
                  >
                    {plannerLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-teal-200 border-t-transparent rounded-full animate-spin" />
                        <span>Compiling Pedagogical Draft...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4.5 h-4.5 text-emerald-300" />
                        <span>Generate Lesson Plan</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Planner Right Output Column */}
              <div className="lg:col-span-7 rounded-3xl bg-slate-950 border border-slate-850 overflow-hidden flex flex-col justify-between">
                
                {/* Visual Header */}
                <div className="p-4 bg-slate-900/60 border-b border-slate-850 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                    <span className="text-xs font-mono font-bold text-slate-300 tracking-wide uppercase">Companion-Plan-Previewer // v3.5</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 tracking-widest">[STATUS: MONITOR_ACTIVE]</span>
                </div>

                <div className="p-6 md:p-8 flex-1 overflow-y-auto max-h-[460px] text-left">
                  {plannerResult ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="prose prose-invert prose-emerald font-sans max-w-none text-slate-300"
                    >
                      {/* Alert banner if fallback was used */}
                      {plannerError && (
                        <div className="p-3.5 mb-6 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start space-x-3 text-amber-300 text-xs">
                          <AlertTriangle className="w-4.5 h-4.5 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold">Local Sandbox Fallback Mode Active</p>
                            <p className="text-[11px] leading-tight mt-0.5 text-amber-400">Your AI Studio secrets are not yet configured. Displaying a high-quality demonstration workbook instead.</p>
                          </div>
                        </div>
                      )}
                      
                      {renderMarkdown(plannerResult)}
                    </motion.div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center text-center py-16">
                      <div className="w-14 h-14 rounded-full bg-slate-900/60 border border-slate-850 flex items-center justify-center text-slate-500 mb-4">
                        <FileText className="w-6 h-6" />
                      </div>
                      <h4 className="text-white font-bold tracking-tight">No Plan Compiled Yet</h4>
                      <p className="text-xs text-slate-500 max-w-xs mt-1 leading-normal">
                        Select a target topic on the left and click Compile to let Soje's AI assist your learning.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            // Advisor Dialog Tab
            <div className="lg:col-span-12 max-w-4xl mx-auto w-full rounded-3xl bg-slate-950 border border-slate-850 overflow-hidden flex flex-col justify-between h-[550px]">
              
              {/* Advisor Header */}
              <div className="px-6 py-4.5 bg-slate-900/60 border-b border-slate-850 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-xs font-bold text-white relative">
                    SEO
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-slate-900" />
                  </div>
                  <div className="text-left">
                    <span className="block text-sm font-bold text-white leading-tight">Soje Ezekiel Oluwaseyi</span>
                    <span className="block text-[10px] text-slate-400 font-mono mt-0.5">My School Companion • Lead Advisor Clone</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">[MUTED TONES ENGAGED]</span>
              </div>

              {/* Messages Body */}
              <div className="p-6 flex-1 overflow-y-auto flex flex-col space-y-4">
                {chatHistory.map((msg) => {
                  const isBot = msg.role === "assistant";
                  return (
                    <div
                      key={msg.id}
                      className={`flex items-start gap-3.5 max-w-[85%] ${
                        isBot ? "self-start text-left" : "self-end flex-row-reverse text-right"
                      }`}
                    >
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold shrink-0 ${
                        isBot ? "bg-slate-800 border border-slate-700 text-teal-400" : "bg-teal-600 text-white"
                      }`}>
                        {isBot ? <BookOpen className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>

                      {/* Msg bubble */}
                      <div className={`p-4 rounded-2xl flex flex-col space-y-1 ${
                        isBot 
                          ? "bg-slate-900 border border-indigo-950/10 text-slate-300" 
                          : "bg-teal-700/80 text-white text-left"
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                        <span className="text-[9px] text-slate-500 font-mono tracking-wide mt-1 block self-end">
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {chatLoading && (
                  <div className="flex items-start gap-3.5 self-start text-left max-w-[85%]">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 shrink-0">
                      <BookOpen className="w-4 h-4 animate-bounce" />
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-80 w-fit flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" />
                    </div>
                  </div>
                )}
              </div>

              {/* Input Form Bottom */}
              <form onSubmit={handleSendMessage} className="p-4.5 bg-slate-900/50 border-t border-slate-850 flex items-center gap-3">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Ask a conceptual tutoring question (e.g. 'How do you structure SAT revision?')..."
                  className="flex-1 bg-slate-950 border border-slate-800 text-slate-200 p-3.5 rounded-xl focus:border-teal-500 focus:outline-none text-sm placeholder-slate-600 font-sans"
                />
                <button
                  type="submit"
                  disabled={!chatMessage.trim() || chatLoading}
                  className="p-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold transition-all shrink-0 cursor-pointer disabled:bg-slate-800 disabled:text-slate-500"
                >
                  <Send className="w-4.5 h-4.5" />
                </button>
              </form>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
