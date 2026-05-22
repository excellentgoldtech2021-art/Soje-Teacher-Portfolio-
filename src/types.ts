export interface Service {
  id: string;
  title: string;
  category: "tutoring" | "in-person" | "curriculum" | "consulting";
  description: string;
  bullets: string[];
  icon: string;
  subjects: string[];
  ageGroups: string;
}

export interface SampleWork {
  id: string;
  title: string;
  category: "Mathematics" | "Syllabus Design" | "Sciences" | "Pedagogy";
  description: string;
  outcome: string;
  previewTitle: string;
  previewSnippet: string;
  fullMarkdown: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  contentMarkdown: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  affiliation: string; // e.g., "Parent of 10th Grader", "Principal at Peak College"
  text: string;
  rating: number; // 1 to 5
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  role: "student" | "parent" | "institution" | "collaborator";
  service: string;
  message: string;
  date: string;
}

export interface AIResponse {
  answer: string;
}
