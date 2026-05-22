import express from "express";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Assets Copying Setup
function copyAssetIfExists(srcPath: string, destFileName: string) {
  try {
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    const destPath = path.join(publicDir, destFileName);
    
    let resolvedSrc: string | null = null;
    const candidates = [
      srcPath,
      path.join(process.cwd(), srcPath),
      path.join(process.cwd(), srcPath.replace(/^\//, "")),
      path.join("/workspace", srcPath.replace(/^\//, "")),
    ];
    
    for (const cand of candidates) {
      if (fs.existsSync(cand)) {
        resolvedSrc = cand;
        break;
      }
    }
    
    if (resolvedSrc) {
      fs.copyFileSync(resolvedSrc, destPath);
      console.log(`Successfully copied ${resolvedSrc} to ${destPath}`);
      
      const distDir = path.join(process.cwd(), "dist");
      if (fs.existsSync(distDir)) {
        fs.copyFileSync(resolvedSrc, path.join(distDir, destFileName));
      }
    } else {
      console.warn(`Asset source path ${srcPath} could not be resolved from candidates. Using default fallback link.`);
    }
  } catch (err) {
    console.error(`Error copying static asset to ${destFileName}:`, err);
  }
}

// Copy both inputs immediately when server starts
copyAssetIfExists("/input_file_0.png", "logo.png");
copyAssetIfExists("/input_file_0.png", "logo.jpg");
copyAssetIfExists("/input_file_1.png", "photo.png");
copyAssetIfExists("/input_file_1.png", "photo.jpg");

// Lazy-initialized Gemini AI client to protect against crashing on startup
let geminiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!geminiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is missing in the Secrets configuration.");
    }
    geminiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

// -------------------------------------------------------------
// API ENDPOINTS
// -------------------------------------------------------------

// Active test endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    apiKeyPresent: !!process.env.GEMINI_API_KEY,
  });
});

// Robust image handlers serving static uploads directly with correct JPEG content-types
app.get(["/logo.png", "/logo.jpg"], (req, res) => {
  const candidates = [
    "/input_file_0.png",
    path.join(process.cwd(), "public", "logo.jpg"),
    path.join(process.cwd(), "public", "logo.png"),
    path.join(process.cwd(), "logo.jpg"),
    path.join(process.cwd(), "logo.png"),
    path.join(process.cwd(), "input_file_0.png"),
  ];
  for (const cand of candidates) {
    if (fs.existsSync(cand)) {
      res.setHeader("Content-Type", "image/jpeg");
      return res.sendFile(cand);
    }
  }
  res.status(404).send("Logo not found");
});

app.get(["/photo.png", "/photo.jpg"], (req, res) => {
  const candidates = [
    "/input_file_1.png",
    path.join(process.cwd(), "public", "photo.jpg"),
    path.join(process.cwd(), "public", "photo.png"),
    path.join(process.cwd(), "photo.jpg"),
    path.join(process.cwd(), "photo.png"),
    path.join(process.cwd(), "input_file_1.png"),
  ];
  for (const cand of candidates) {
    if (fs.existsSync(cand)) {
      res.setHeader("Content-Type", "image/jpeg");
      return res.sendFile(cand);
    }
  }
  res.status(404).send("Photo not found");
});

// Interactive pedagogical lesson planner endpoint (uses Gemini)
app.post("/api/ai/lesson-plan", async (req, res) => {
  try {
    const { subject, topic, gradeLevel, studentNeeds } = req.body;

    if (!subject || !topic) {
      return res.status(400).json({ error: "Missing required parameters: subject and topic are required." });
    }

    const ai = getGeminiClient();

    const prompt = `You are Soje Ezekiel Oluwaseyi, a legendary professional math teacher with 25 years of classroom and examination-focused teaching experience in Nigeria and globally, representing your expert educational platform 'MY SCHOOL COMPANION'.
Construct an outstanding, highly customized, and professional pedagogical lesson plan based on:
- Subject: ${subject}
- Topic: ${topic}
- Target Grade Level / Audience: ${gradeLevel || "General / Adaptive"}
- Student Special Needs or Requests: ${studentNeeds || "None specified. Apply balanced general differentiation."}

Your teaching philosophy focuses heavily on:
1. Active retrieval (asking students to recall instead of showing).
2. Cognitive spacing & logical scaffolding (incremental difficulty).
3. Psychological encouragement & growth success mindset.

Your lesson plan MUST be structured beautifully in markdown and include:
- **Title**: A title that makes the topic feel exciting.
- **Learning Objectives**: 3 clear, action-oriented, and observable targets (e.g. 'Students will be able to...').
- **Conceptual Warm-Up (2 min)**: An everyday analogy or real-world visual problem that sparks interest without equations/jargon.
- **Core Guided Instruction (10 min)**: Step-by-step logic, detailed examples, and interactive "pedagogical cues" or common mistakes to look out for.
- **Active Recall Exercises (5 min)**: A set of 3 progressive questions designed to force retrieval, with secret pedagogical answers or tips.
- **Differentiated Assessment Rubric**: A simple, powerful rubric grading based on Strategy and Logic, not just speed or final answer.

Ensure the tone is warm, authoritative, highly professional, encouraging, and intellectual. Present all mathematics or scientific theories elegantly. Do not refer to yourself as an AI; you are Soje Ezekiel Oluwaseyi.`;

    const result = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        temperature: 0.7,
      },
    });

    res.json({ result: result.text });
  } catch (error: any) {
    console.error("Error communicating with Gemini on server:", error);
    res.status(500).json({
      error: error.message || "An unexpected error occurred during lesson generation.",
      fallback: true,
    });
  }
});

// General conversational education help chatbot route
app.post("/api/ai/chat", async (req, res) => {
  try {
    const { message, chatHistory } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Missing required parameter: message is required." });
    }

    const ai = getGeminiClient();
    
    // Convert history format if present, otherwise start new chat
    const systemPrompt = `You are Soje Ezekiel Oluwaseyi, Nigeria's Mathematics Examination Specialist with 25 years of proven excellence and founder of 'MY SCHOOL COMPANION'.
You are answering inquiries from students, parents, school administrators, or educational collaborators who are browsing your professional portfolio site.
Answer their questions in your real physical voice: encouraging, clear, logically rigorous, structured, and warm.
Highlight your massive 25 years of teaching expertise, your global online/offline flexibility, and always advocate for deep concept comprehension over passive cramming.
Mention that your students regularly secure distinctions in WAEC, NECO, and score 300+ in JAMB, and that you also prepare students for international GCSE & SAT boundaries.
If someone asks about booking, consulting, or fees, kindly encourage them to submit the inquiry form at the bottom of the page or click your direct WhatsApp/Email links. Key contacts: WhatsApp is 09050278999, Email is successmindset2021@gmail.com.
Keep responses concise, beautiful, beautifully formatted with clear lines, and highly professional.`;

    const contents = [
      { role: "user", parts: [{ text: systemPrompt }] },
      { role: "model", parts: [{ text: "Understood. I am Soje Ezekiel Oluwaseyi, ready to engage in a highly professional, educational conversation highlighting the teaching values and services of My School Companion." }] }
    ];

    if (Array.isArray(chatHistory)) {
      chatHistory.forEach((item: any) => {
        contents.push({
          role: item.role === "user" ? "user" : "model",
          parts: [{ text: item.text }]
        });
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
      config: {
        temperature: 0.7,
      }
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Error in AI dialogue endpoint:", error);
    res.status(500).json({
      error: error.message || "An unexpected error occurred during dialogue.",
    });
  }
});

// -------------------------------------------------------------
// VITE AND STATIC FILE SERVING MIDDLEWARE
// -------------------------------------------------------------

async function initializeServer() {
  // Always serve the public folder for static images (logo, photo)
  app.use(express.static(path.join(process.cwd(), "public")));

  if (process.env.NODE_ENV !== "production") {
    // Dynamically import Vite only in development so production CJS bundle remains clean and dependencies externalized
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    
    app.use(vite.middlewares);
    console.log("Vite development middleware mounted successfully.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    
    // Static assets
    app.use(express.static(distPath));
    
    // SPA Fallback for production hosting
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log(`Serving static files from production directory: ${distPath}`);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully started. Running on port ${PORT}`);
  });
}

initializeServer().catch((err) => {
  console.error("Fatal error during server startup:", err);
});
