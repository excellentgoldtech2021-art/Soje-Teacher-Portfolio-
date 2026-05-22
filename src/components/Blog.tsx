import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Calendar, Clock, ArrowRight, X, ChevronRight, Share2, Award } from "lucide-react";
import { blogArticlesData } from "../data";
import { BlogPost } from "../types";

export default function Blog() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const activePost = blogArticlesData.find(p => p.id === selectedPostId);

  // Markdown rendering helper designed specifically for our blog structures
  const renderBlogMarkdown = (text: string) => {
    if (!text) return null;
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      if (line.startsWith("### ")) {
        return <h4 key={idx} className="text-lg font-bold text-teal-300 mt-6 mb-2.5 uppercase font-mono tracking-tight">{line.replace("### ", "")}</h4>;
      }
      if (line.startsWith("## ")) {
        return <h3 key={idx} className="text-xl font-extrabold text-white mt-8 mb-4 tracking-tight border-b border-slate-800 pb-2">{line.replace("## ", "")}</h3>;
      }
      if (line.startsWith("#### ")) {
        return <h5 key={idx} className="text-xs font-mono text-slate-400 mt-4 mb-2 tracking-widest">{line.replace("#### ", "")}</h5>;
      }
      if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ")) {
        return (
          <div key={idx} className="flex items-start space-x-3 my-2 text-slate-300 pl-2">
            <span className="text-teal-400 font-bold font-mono shrink-0 mt-0.5">{line.substring(0, 3)}</span>
            <p className="text-sm leading-normal">{line.substring(3)}</p>
          </div>
        );
      }
      if (line.startsWith("- ") || line.startsWith("* ")) {
        return (
          <div key={idx} className="flex items-start space-x-2.5 my-2 text-slate-300 pl-4">
            <span className="text-teal-500 shrink-0 mt-2 h-1.5 w-1.5 rounded-full bg-teal-500" />
            <p className="text-sm leading-normal">{line.replace(/^[-*]\s+/, "")}</p>
          </div>
        );
      }
      // Highlight quote blocks
      if (line.startsWith("> ") || line.startsWith("  > ")) {
        return (
          <div key={idx} className="pl-4 border-l-2 border-teal-500 my-4 py-1 text-slate-300 italic text-sm">
            {line.replace(/^>\s+/, "").replace(/^\s*>\s+/, "")}
          </div>
        );
      }
      if (line.trim() === "") return <div key={idx} className="h-4" />;
      
      // Inline formatting simple replacement for bold
      const formatted = line.replace(/\*\*(.*?)\*\*/g, "$1");
      return <p key={idx} className="text-slate-300 text-sm leading-relaxed my-2 font-sans">{formatted}</p>;
    });
  };

  return (
    <section id="blog" className="py-24 bg-slate-900 border-t border-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="text-left max-w-2xl">
            <span className="text-xs font-mono text-teal-400 tracking-wider uppercase font-semibold block mb-2">
              // EDUCATIONAL PEDAGOGY INSIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Learning Mindset Blog
            </h2>
            <div className="mt-2 h-1 w-20 bg-teal-500 rounded-full" />
          </div>
          <p className="text-slate-400 text-sm max-w-sm mt-4 md:mt-0 text-left leading-relaxed">
            Written by lead mentor Soje Ezekiel, exploring techniques, mathematical anxiety answers, and syllabus structures designed for the 21st century.
          </p>
        </div>

        {/* Blog Post List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {blogArticlesData.map((post) => (
            <div
              key={post.id}
              className="p-6 md:p-8 rounded-3xl bg-slate-950 border border-slate-850 flex flex-col justify-between text-left hover:border-teal-500/30 hover:bg-slate-950/80 transition-all duration-300 shadow-xl group"
            >
              <div>
                <div className="flex items-center space-x-3 text-slate-500 text-xs font-mono mb-4">
                  <span className="text-teal-400 uppercase tracking-wider font-semibold">
                    {post.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug group-hover:text-teal-400 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 text-sm mt-3.5 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-900 flex justify-between items-center w-full">
                <button
                  onClick={() => setSelectedPostId(post.id)}
                  className="text-teal-400 font-semibold text-xs flex items-center space-x-1.5 hover:text-teal-300 transition-colors cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-[10px] font-mono text-slate-600">BY SOJE EZEKIEL</span>
              </div>
            </div>
          ))}
        </div>

        {/* Full Post Overlay Reader Panel */}
        <AnimatePresence>
          {selectedPostId && activePost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPostId(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />

              {/* Central Reading Document Dialog */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative w-full max-w-3xl h-[85vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between z-10 mx-4"
              >
                {/* Header Navbar */}
                <div className="p-4.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-slate-500 font-mono text-xs">
                    <span className="text-teal-400 uppercase tracking-wider font-semibold">{activePost.category}</span>
                    <span>•</span>
                    <span>{activePost.date}</span>
                    <span>•</span>
                    <span>{activePost.readTime}</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setSelectedPostId(null)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none cursor-pointer"
                      aria-label="Close Reader"
                    >
                      <X className="w-5.5 h-5.5" />
                    </button>
                  </div>
                </div>

                {/* Article Body Area */}
                <div className="p-6 md:p-10 flex-1 overflow-y-auto text-left bg-slate-950/20">
                  <div className="max-w-2xl mx-auto">
                    
                    {/* Authorship Info Card */}
                    <div className="flex items-center space-x-3.5 mb-6 pb-6 border-b border-slate-850">
                      <div className="w-14 h-14 rounded-full bg-slate-900 border border-teal-500/30 overflow-hidden relative shadow-md shrink-0">
                        <img
                          src="/photo.jpg"
                          alt="Soje Ezekiel Oluwaseyi Portrait"
                          className="w-full h-full object-cover object-top"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="text-white text-base font-bold leading-tight">Soje Ezekiel Oluwaseyi</h4>
                        <p className="text-xs text-slate-400 mt-0.5 leading-tight">Expert Educator & Pedagogical Architect</p>
                        <p className="text-[10px] text-slate-500 font-mono leading-tight mt-0.5">EST. 2006 • My School Companion</p>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
                      {activePost.title}
                    </h2>

                    {/* Excerpt Summary */}
                    <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-850 text-slate-350 text-sm italic leading-relaxed">
                      " {activePost.excerpt} "
                    </div>

                    <div className="mt-8 prose prose-invert prose-emerald font-sans max-w-none text-slate-300">
                      {renderBlogMarkdown(activePost.contentMarkdown)}
                    </div>

                  </div>
                </div>

                {/* Footer panel */}
                <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
                  <div className="text-left">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none">POST STATUS</span>
                    <span className="block text-xs font-bold text-emerald-400 leading-none mt-1 uppercase font-mono tracking-wider">● PUBLISHED_AND_VERIFIED</span>
                  </div>
                  <button
                    onClick={() => setSelectedPostId(null)}
                    className="px-6 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white text-slate-300 font-bold text-xs cursor-pointer"
                  >
                    Done Reading
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
