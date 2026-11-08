// All site content lives here. Edit this file to update the website.

export const profile = {
  name: "Charles Ike",
  initials: "CI",
  title: "Full-Stack Developer",
  headline: "Web, Mobile & E-commerce · AI & RAG Solutions",
  availability: "Open to full-time, contract & freelance roles · Remote",
  location: "London, United Kingdom",
  locationNote: "Available for remote work worldwide",
  email: "charles.ike.dev@gmail.com",
  siteUrl: "https://charlesike.dev", // TODO: replace with the real domain once deployed
  links: {
    upwork: "https://www.upwork.com/freelancers/~01be5a1c3786f57374",
    github: "", // TODO: add GitHub profile URL
    linkedin: "", // TODO: add LinkedIn profile URL
  },
  tagline:
    "I build reliable, scalable web and mobile applications, and bring AI into them with Retrieval-Augmented Generation that actually gets the answer right.",
  overview: [
    "I build reliable, scalable web and mobile applications, with deep experience in AI integration and Retrieval-Augmented Generation (RAG). Since 2020 I have shipped internal tools, dashboards, reporting automation and digital record systems for healthcare, workforce analytics and large-scale logistics.",
    "Whether you are starting from scratch or improving an existing product, I turn your idea into a working solution that meets your business goals, with clean code, clear communication and on-time delivery.",
  ],
};

export const stats = [
  { value: "6+ yrs", label: "Software engineering since 2020" },
  { value: "150+", label: "Associates led in warehouse operations" },
  { value: "20%", label: "Faster processing from new procedures" },
  { value: "15%", label: "Department sales growth through coaching" },
];

export const services = [
  {
    icon: "monitor",
    title: "Web applications",
    text: "Responsive, high-performance apps from frontend to backend.",
  },
  {
    icon: "smartphone",
    title: "Mobile apps",
    text: "Cross-platform apps with clean UI and solid architecture.",
  },
  {
    icon: "cart",
    title: "E-commerce",
    text: "Custom stores, payment integration and conversion-focused features.",
  },
  {
    icon: "sparkles",
    title: "AI solutions",
    text: "RAG systems, AI chatbots, document Q&A and LLM integration.",
  },
] as const;

export type Job = {
  role: string;
  company: string;
  companyUrl?: string;
  location?: string;
  dates: string;
  tag?: string;
  bullets: string[];
  stack?: string[];
};

export const experience: Job[] = [
  {
    role: "AI / LLM Developer · Medical RAG Agent",
    company: "Curalith · Healthcare AI",
    location: "Remote",
    dates: "Oct 2026",
    tag: "Contract",
    bullets: [
      "Auditing an inherited medical RAG agent MVP: RAG architecture, Pinecone vector database integration and LangChain/OpenAI orchestration.",
      "Tracing root causes and fixing bugs across data ingestion, chunking, retrieval and generation pipelines.",
      "Improving retrieval accuracy so the agent pulls the right medical context, reducing hallucinations.",
      "Refining system prompts for medical safety guidelines and accurate, context-grounded answers.",
      "Documenting every fix and how the updated pipeline works for the client's next phase.",
    ],
    stack: ["Python", "FastAPI", "Node.js", "LangChain", "OpenAI", "Pinecone", "Next.js", "React", "Tailwind", "shadcn/ui"],
  },
  {
    role: "Web Developer / UI Enhancer",
    company: "J & R Care Ltd",
    companyUrl: "https://jandrcareltd.co.uk/",
    location: "Kent, UK",
    dates: "Feb 2025 – Jan 2026",
    bullets: [
      "Developed internal tools and digital record systems for care documentation, staff coordination and reporting.",
      "Introduced practical tech solutions for shift management and communication, improving operational workflows.",
      "Built and supported safeguarding and incident-tracking systems with accurate, efficient data handling.",
    ],
    stack: ["WordPress", "PHP", "JavaScript", "jQuery", "Bootstrap", "MySQL", "Cloudflare", "Mailgun"],
  },
  {
    role: "Frontend Developer / UI Support Engineer",
    company: "Clarions Futures Digital",
    companyUrl: "https://www.clarionhg.com/",
    location: "London, UK",
    dates: "Feb 2023 – Feb 2026",
    tag: "Part-time",
    bullets: [
      "Built data dashboards and reporting tools for workforce analytics and diversity tracking at scale.",
      "Contributed to internal systems for employee data collection, reporting automation and engagement analysis.",
      "Partnered with stakeholders to improve data accuracy, workflow efficiency and reporting.",
    ],
    stack: ["React 18 → 19", "Next.js 14 → 16", "ASP.NET", "AWS"],
  },
  {
    role: "Full-Stack Developer",
    company: "Newcross Healthcare UK",
    companyUrl: "https://www.newcrosshealthcare.com/",
    location: "Totnes, UK",
    dates: "Feb 2023 – Sep 2025",
    bullets: [
      "Developed and improved digital care-support systems for case notes, reporting and communication.",
      "Supported platforms that helped staff manage care plans and safeguarding records more efficiently.",
      "Simplified reporting workflows and reduced manual administrative tasks.",
    ],
    stack: ["React", "Redux Toolkit", "Framer Motion", "Styled Components", "Node.js", "Express", "MongoDB", "AWS", "SendGrid", "Google APIs", "Open Graph"],
  },
  {
    role: "Full-Stack Developer",
    company: "Hiqos Technologies Ltd",
    companyUrl: "https://www.hiqos.net/",
    location: "Lagos, Nigeria",
    dates: "Feb 2020 – Sep 2022",
    bullets: [
      "Developed internal workflow tools and operational dashboards that improved warehouse efficiency and reporting accuracy.",
      "Delivered process automation that reduced manual tasks and improved order-processing performance.",
      "Handled data reporting, system optimisation and performance tracking across large-scale operations.",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "React Query", "Redux Thunk", "Node.js", "Prisma", "Supabase", "PostgreSQL", "AWS", "Resend"],
  },
];

export const earlierRoles: Job[] = [
  {
    role: "Strategy Consultant",
    company: "Hiqos Technologies",
    companyUrl: "https://www.hiqos.net/",
    location: "Lagos, Nigeria",
    dates: "May 2018 – Apr 2020",
    bullets: [
      "Led cross-functional teams launching new products and services, entering new markets and building partnerships.",
      "Developed business cases aligning strategic initiatives with financial goals.",
    ],
  },
  {
    role: "Agile Advocate / Scrum Master",
    company: "Hiqos Technologies",
    companyUrl: "https://www.hiqos.net/",
    location: "Lagos, Nigeria",
    dates: "Sep 2017 – Apr 2018",
    bullets: [
      "Led day-to-day operations of the menswear department, managing 10 sales associates and 2 visual merchandisers.",
      "Coached and trained the team on product knowledge and sales skills, driving a 15% increase in sales revenue.",
      "Worked with buying and merchandising teams to stock new products, increasing footfall and sales.",
    ],
  },
  {
    role: "Operations Manager",
    company: "Europe's largest fulfilment warehouse",
    dates: "Leadership & operations",
    bullets: [
      "Led day-to-day operations with 4 front-line managers and 150+ associates.",
      "Introduced new processes that cut processing time by 20% and raised order accuracy by 10%.",
    ],
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux"] },
  { group: "Backend", items: ["Node.js", "Python", "FastAPI", "Express", "ASP.NET", "PHP", "REST", "GraphQL"] },
  { group: "Mobile", items: ["React Native", "Flutter"] },
  { group: "E-commerce & CMS", items: ["Shopify", "WooCommerce", "WordPress", "Stripe"] },
  { group: "AI & RAG", items: ["OpenAI API", "Anthropic API", "LangChain", "LlamaIndex", "Pinecone", "Vector DBs"] },
  { group: "Data & Cloud", items: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Prisma", "AWS", "Docker"] },
];

// Case studies drawn from the roles above. Add `image` (a path in /public)
// and `href` (a live link or repo) to any project when you have them.
export type Project = {
  title: string;
  client: string;
  summary: string;
  outcomes: string[];
  stack: string[];
  accent: "teal" | "navy" | "amber" | "violet";
  image?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Medical RAG agent rescue",
    client: "Curalith · Healthcare AI",
    summary:
      "Took over an inherited medical question-answering agent and made its answers trustworthy: fixed the ingestion, chunking and retrieval pipeline and tightened the prompts around medical safety.",
    outcomes: ["Better retrieval accuracy", "Fewer hallucinations", "Fully documented pipeline"],
    stack: ["Python", "FastAPI", "LangChain", "Pinecone", "OpenAI", "Next.js"],
    accent: "teal",
  },
  {
    title: "Warehouse operations dashboards",
    client: "Hiqos Technologies",
    summary:
      "Internal workflow tools and live operational dashboards for large-scale fulfilment, with automation that replaced manual order-processing steps.",
    outcomes: ["Faster order processing", "More accurate reporting", "Less manual work"],
    stack: ["Next.js", "React Query", "Node.js", "Prisma", "PostgreSQL", "Supabase"],
    accent: "navy",
  },
  {
    title: "Workforce analytics reporting",
    client: "Clarions Futures Digital",
    summary:
      "Dashboards and reporting tools for workforce analytics and diversity tracking at scale, upgraded across React 18 → 19 and Next.js 14 → 16.",
    outcomes: ["Automated reporting", "Cleaner employee data", "Modernised frontend"],
    stack: ["React", "Next.js", "ASP.NET", "AWS"],
    accent: "violet",
  },
  {
    title: "Digital care records",
    client: "Newcross Healthcare · J & R Care",
    summary:
      "Care-support systems for case notes, care plans, safeguarding and incident tracking, plus tools for shift management and staff communication.",
    outcomes: ["Simpler reporting workflows", "Accurate safeguarding records", "Smoother shift coordination"],
    stack: ["React", "Node.js", "MongoDB", "WordPress", "PHP", "AWS"],
    accent: "amber",
  },
];

export const workingStyle = [
  "Clean, maintainable code",
  "Clear, prompt communication",
  "On-time delivery",
  "Business-goal focused",
  "Confident debugging inherited codebases",
  "Accuracy-first in high-stakes domains",
  "Clear documentation and handover",
];

export const industries = ["Healthcare & healthcare AI", "Workforce analytics", "Logistics & fulfilment", "Retail"];

export const education = {
  degree: "BSc Computer Science",
  school: "Michael Okpara University of Agriculture",
  dates: "2014 – 2018",
};

export const nav = [
  { href: "#overview", label: "Overview" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
