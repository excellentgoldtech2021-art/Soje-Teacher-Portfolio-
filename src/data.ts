import { Service, SampleWork, BlogPost, Testimonial } from "./types";

export const personalInfo = {
  name: "Soje Ezekiel Oluwaseyi",
  brand: "My School Companion",
  title: "Nigeria's Mathematics Examination Specialist",
  experienceYears: "25",
  whatsapp: "09050278999",
  email: "successmindset2021@gmail.com",
  location: "Worldwide (Online / Offline Hybrid)",
  bioShort: "An expert Nigeria-based mathematics educator with 25 years of classroom and examination-focused teaching experience, turning math fear into confident distinctions in WAEC, NECO, JAMB, and international boards.",
  bioDetailed: "Soje Ezekiel Oluwaseyi has spent the past 25 years at the frontline of mathematics education in Nigeria — turning confusion into clarity, fear into confidence, and average scores into distinctions. As the founder of 'MY SCHOOL COMPANION', he blends rigorous pedagogical principles with interactive drawing boards. From foundational junior arithmetic to advanced collegiate prep (SAT, GCSE, IGCSE, checkpoints), his signature methodologies enable students to master mathematics rather than merely memorize formulas.",
  philosophyTitle: "Mathematics is a Practised Skill",
  philosophyStatement: "Mathematics is not an innate talent — it is a skill. And like any skill, it can be taught, practised, and perfected. My coaching philosophy couples rigorous past-question drilling and marking-scheme familiarity with cognitive spacing and active recall. This builds high quantitative self-efficacy and eliminates examination anxiety, ensuring any student can unlock standard A/B scores.",
  stats: [
    { label: "Years Experience", value: "25+" },
    { label: "Students Taught", value: "5,000+" },
    { label: "Distinction Rate", value: "90%+" },
    { label: "Syllabi Mastered", value: "100%" }
  ]
};

export const servicesData: Service[] = [
  {
    id: "online-tutoring",
    title: "Global Online Tutoring",
    category: "tutoring",
    icon: "Monitor",
    description: "Highly interactive virtual classrooms that recreate the precision of a whiteboard session. Combining digital writing tablets, structured slideshows, and recorded recaps to keep parents in the loop.",
    bullets: [
      "Custom learning dashboard with 24/7 access to slides and notes.",
      "Live drawing-board sessions with collaborative, real-time problem solving.",
      "Structured, periodic diagnostic quizzes tracking quantitative gains."
    ],
    subjects: ["Advanced Mathematics", "IGCSE Physics & Chemistry", "Sat Prep (Quant & Verbal)"],
    ageGroups: "Upper Primary, Secondary, pre-University"
  },
  {
    id: "in-person-masterclasses",
    title: "In-Person Hybrid Classes",
    category: "in-person",
    icon: "Users",
    description: "In-depth, local subject coaching for deep comprehension. Ideal for local schools and students who thrive on intense face-to-face engagement, spatial logic illustrations, and close mentorship.",
    bullets: [
      "Structured physical workbook and step-by-step logic sheets.",
      "Hands-on science experiments and visualization aids.",
      "Intense concentration blocks customized for individual reading pacing."
    ],
    subjects: ["Core Sciences", "Algebra & Calculus", "Problem-Solving Circles"],
    ageGroups: "Ages 10 - 18 (Middle & High School)"
  },
  {
    id: "curriculum-design",
    title: "Curriculum & Lesson Design",
    category: "curriculum",
    icon: "BookOpen",
    description: "Creating standards-compliant, intuitive learning structures for schools, educational content startups, and digital learning platforms. Specialized in international boards.",
    bullets: [
      "Complete lesson script creation with differentiated learning pathways.",
      "Formative and summative assessment rubric architectures.",
      "Durable pedagogy guidelines customized for hybrid deployment."
    ],
    subjects: ["Cambridge IGCSE Curriculum", "National Secondary Frameworks", "STEM Activity Design"],
    ageGroups: "Educational Institutions & Content Providers"
  },
  {
    id: "educational-consulting",
    title: "Pedagogical Consulting",
    category: "consulting",
    icon: "Compass",
    description: "Consultancy for parents seeking the best university preparation streams, and institutions modernizing their classroom instruction to reflect research-backed techniques.",
    bullets: [
      "Educational pathmapping based on psycho-academic profile evaluations.",
      "Teacher training programs focusing on interactive technology adoption.",
      "School board review preparation and curriculum audits."
    ],
    subjects: ["Pathmapping Consultation", "Interactive Teacher Portals", "Exam Strategy Blueprints"],
    ageGroups: "Parents, School Boards & Administrators"
  }
];

export const sampleWorksData: SampleWork[] = [
  {
    id: "maths-without-fear-ebook",
    title: "Mathematics Without Fear — Algebra Made Simple Guidebook",
    category: "Mathematics",
    description: "Over 150 pages of curated algebraic simplifications, step-by-step WAEC/NECO proof pathways, and deconstructed anxiety hacks designed specifically to turn math dread into confidence.",
    outcome: "An estimated 2,400+ physical and digital copies licensed across Nigerian secondary institutions.",
    previewTitle: "Chapter 1: The Magic of Variables",
    previewSnippet: "Traditional classrooms make variables feel abstract. In this book, we replace variables with literal scale balances so students visually balance scales...",
    fullMarkdown: `### Booklet Preview: Mathematics Without Fear — Algebra Made Simple
#### Author: Soje Ezekiel Oluwaseyi | Founder of MY SCHOOL COMPANION
Let’s dismantle the abstract worry of algebra through balance mechanics.

---

### Step 1: The Principle of Equilibrium (The Scale Analogy)
When writing:
$$2x + 5 = 15$$

- Imagine a physical weighing scale.
- The LEFT side has two identical secret boxes ($x$) and 5 gold coins.
- The RIGHT side has 15 gold coins.
- To discover how many coins are inside one secret box, we must maintain balance at all times.

#### Balance Operations:
1. Remove 5 gold coins from both sides. The scale stays perfectly balanced.
   - Left: $2x$
   - Right: $10$
2. Divide the weights on both sides by 2.
   - Left: $x$
   - Right: $5$
   - *Result:* Each secret box contains exactly 5 coins!

---

### Step 2: WAEC/NECO Common Traps
When handling systems of linear equations in WAEC Paper 2:
- **Trap 1: Negative Multipliers.** Remember that $-3(x - 4)$ expands to $-3x + 12$. A very common SSCE mistake is writing $-3x - 12$.
- **Trap 3: Division of Fractions.** Dividing by $3/4$ is mathematically the same as multiplying by $4/3$.`
  },
  {
    id: "waec-practice-bank",
    title: "SSCE & JAMB Topic-wise Drill Solutions",
    category: "Mathematics",
    description: "Curated collections of 15 years of WAEC and NECO past examination questions, segmented by topic with fully detailed objective steps and theory answering templates.",
    outcome: "Serves as standard exam prep curriculum template across West African boarding academies.",
    previewTitle: "Circle Theorems: Topic Drill",
    previewSnippet: "Step-by-step proofs for the angle at the centre is twice the angle at the circumference. Core marker breakdowns included...",
    fullMarkdown: `### Syllabus Drill: WAEC Circle Theorem Proofs
#### Perfect Score Answering Framework

When sitting SSCE Mathematics, circle theorem proofs carry high marks in Section B. This guide structures the answers exactly as Examiners want them.

---

### Theorem Proof: Angle at the Centre is Twice the Angle at Circumference

Given: A circle with centre $O$ where arc $APB$ subtends angle $AOB$ at the centre and angle $ACB$ at the circumference.
To Prove:
$$\\angle AOB = 2 \\angle ACB$$

#### Logical Construction:
1. **Join CO and extend to a point D.**
2. In triangle $AOC$:
   - $OA = OC$ (Radii of the circle)
   - Therefore, $\\angle OAC = \\angle OCA$ (Base angles of isosceles triangle are equal)
3. The exterior angle of triangle $AOC$ is:
   - $\\angle AOD = \\angle OAC + \\angle OCA = 2 \\angle OCA$
4. Similarly, looking at triangle $BOC$:
   - $OB = OC$ (Radii)
   - $\\angle OBD = \\angle OCB$
   - Exterior angle $\\angle BOD = 2 \\angle OCB$
5. Adding the equations:
   - $\\angle AOD + \\angle BOD = 2 \\angle OCA + 2 \\angle OCB$
   - $\\angle AOB = 2 (\\angle OCA + \\angle OCB)$
   - $\\angle AOB = 2 \\angle ACB$
   - **Q.E.D (Proven)**`
  },
  {
    id: "junior-bece-guide",
    title: "Junior BECE Checkpoint Mastery Program",
    category: "Mathematics",
    description: "Comprehensive notes and simple math formulas tailored for JSS3 students preparing for state common entrance and JS3 BECE boundaries.",
    outcome: "Adopted by leading regional tutor programs, securing 100% credit passes.",
    previewTitle: "Syllabus Cluster: Basic Arithmetics",
    previewSnippet: "Number bases, simple interest calculations, and algebraic factorization guides written in extremely friendly language...",
    fullMarkdown: `### Student Quick-Guide: BECE Base Numbers
#### Preparing the JSS3 Candidate for Success

Let's simplify how to convert binary (Base 2) to denary (Base 10) in under 30 seconds.

---

### Fast Binary Conversion Algorithm

Suppose BECE asks you to convert $1101_2$ to Base 10.

1. **Write down indices from right to left, starting at 0:**
   - For $1$, index is 3
   - For $1$, index is 2
   - For $0$, index is 1
   - For $1$, index is 0
2. **Expand using powers of 2:**
   $$1 \\times 2^3 + 1 \\times 2^2 + 0 \\times 2^1 + 1 \\times 2^0$$
3. **Compute the values:**
   $$8 + 4 + 0 + 1 = 13_{10}$$

*Expert Tip for BECE:* Double check your answer by converting $13$ back to Base 2 as a quick active-recall sanity check!`
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Adebayo Ogunlesi",
    role: "Academic Board Director",
    affiliation: "High Flyers International College",
    text: "Soje Ezekiel Oluwaseyi brings a level of passion and pedagogical mastery that is rare. Over the course of our training workshops, he transformed our teachers' methodologies. Our math and science scores increased by 20% in the following state evaluations.",
    rating: 5
  },
  {
    id: "t2",
    name: "Sarah Jenkins",
    role: "Parent of 11th Grade IGCSE Student",
    affiliation: "London-West Hybrid Online Program",
    text: "My School Companion was a godsend. My daughter was struggling heavily with physics concepts and losing confidence. Ezekiel's patient, highly interactive digital board classes completely turned things around. She scored an A* in her final Cambridge exams!",
    rating: 5
  },
  {
    id: "t3",
    name: "Ogunbiyi Damilola",
    role: "Former Student (Now Software Engineer)",
    affiliation: "First Class Maths Graduate",
    text: "Mr. Ezekiel doesn't just teach you math; he teaches you how to think. He taught me how to write proofs, dissect engineering logic, and keep trying when a problem feels unsolvable. The confidence I gained in his classroom is the reason I succeeded in my tech career.",
    rating: 5
  }
];

export const blogArticlesData: BlogPost[] = [
  {
    id: "solving-math-anxiety",
    title: "Overcoming Math Anxiety: A 20-Year Educator's Retrospective",
    excerpt: "Mathematical apprehension isn't an intellectual deficit; it is a psychological block. Here's how parents and teachers can deconstruct exam fear using scaffolding and positive reinforcement.",
    date: "May 10, 2026",
    category: "Mathematics Pedagogy",
    readTime: "6 min read",
    contentMarkdown: `### Dismantling Mathematical Apprehension: A Psychological Guide to Numbers
#### By Soje Ezekiel Oluwaseyi, Founder of My School Companion

Over my 20+ years of teaching, the phrase I have heard most often is: *"I'm just not a math person."* 

This single sentence is a devastating learning block. Math anxiety is a real, measurable distress that floods working memory with negative self-chatter, leaving little room for operational logic. To solve it, we must realize that **math anxiety is not an intellectual disability — it is a psychological block.**

---

### The Cascade of Math Anxiety
When a student looks at a math problem and immediately panics:
1. The **amygdala** (threat center of the brain) lights up, initiating a fight-or-flight response.
2. The **working memory** is occupied by self-doubt (*"I'm going to fail, everyone is smarter than me"*).
3. The remaining mental capacity is insufficient to process abstract equations.
4. The student fails the problem, reinforcing the belief that they are "bad at math."

---

### How 'My School Companion' Fixes the Apprehension Loop

#### 1. Low-Stakes Diagnostic Playgrounds
We never start a lesson of a struggling student with complex mathematical equations. Instead, we use visual logic puzzles, geometric ratios, or games. This takes the pressure off and shows them they already possess intuitive mathematical thinking.

#### 2. Clear Symbolic Scaffolding
We break heavy computational tasks into tiny, bite-sized, achievable targets. Instead of saying *"Solve this quadratic system"*, we say *"For this step, let’s only spot the coefficient of $x$. Great! Now let's divide it by two. What do you get?"* This structured praise builds confidence and breaks the freeze state.

#### 3. Framing Errors as Valuable Data
In our digital and physical classrooms, we celebrate wrong answers! A wrong answer is a beautiful, visible window into cognitive reasoning. When a student makes a mistake, we don't say *"No, wrong."* We say *"Ah! That is a fascinating path. Let's trace why you chose to add those numbers together and see where it leads us!"*

---

By shifting our culture from 'speed and correctness' to 'logic and exploration', we unlock the sleeping mathematician within every child.`
  },
  {
    id: "pedagogy-21st-century",
    title: "Designing Interactive Syllabi for the AI Era",
    excerpt: "In a world where search engines and LLMs can answer any direct question, our teaching must evolve to assess derivation, critical contrast, and real-world synthesis.",
    date: "April 18, 2026",
    category: "Modern Curriculum",
    readTime: "8 min read",
    contentMarkdown: `### Teaching in the Age of Co-Pilots: Reimagining Modern Syllabi
#### By Soje Ezekiel Oluwaseyi, Founder of My School Companion

As modern AI tools evolve, students can instantly generate textbook definitions, write standard essays, and solve basic algebraic equations. Many educational institutions have reacted by erecting digital firewalls. 

At **My School Companion**, we believe firewalls are futile. Instead of fearing AI, **we must design assessments that make passive copy-pasting obsolete.**

---

### The Evolution of the Question
Standard, lower-level cognitive questions are easily computed by tech. We must upgrade our prompts:

- **What is now obsolete (Rote Recalling):** 
  *"Describe three major causes of the French Revolution"* or *"Define Newton's Second Law."*
- **What is now required (Critical Analysis & Synthesis):**
  *"Compare a modern electrical vehicle's velocity profile with Newton's second law when friction is dynamic. What anomalies occur?"* or *"Critique this AI-generated definition of mechanical efficiency. Prove where its logic fails."*

---

### Integrating Guided AI Tools into Homework
In our curriculum design services, we train students to treat AI as a tireless junior research partner. For example, in our Chemistry syllabus:
1. Students ask an AI to explain a chemical concept (like Electroplating).
2. Students are graded not on the description, but on their **verification process**: they must write three proofs, highlight any inaccuracies or sloppy generalities the AI made, and construct a real-world lemon battery to test the boundaries.

---

### The Role of the Expert Mentor
Tech can provide data, but it cannot provide **wisdom, encouragement, or custom psychological steering**. Over my 20+ years of teaching, I have learned that students do not just remember equations; they remember the teacher who looked at their messy scribbles, found the silver lining of brilliant logic, and believed in their potential. 

Let's use technology to handle raw content delivery, freeing our classroom hours for deep, active, hands-on mentorship.`
  }
];
