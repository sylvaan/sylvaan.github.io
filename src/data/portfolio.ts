export interface Project {
  id: number;
  title: string;
  category: string;
  type: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  isMobile?: boolean;
  gradient: string;
  accent: string;
  hoverBorder: string;
  hoverShadow: string;
  role?: string;
  companyContext?: string;
  highlights?: string[];
  features?: string[];
}

export const TECH_STACK = [
  {
    category: "Primary Frameworks & Languages",
    description: "Core technologies powering enterprise banking, healthcare, and production web apps.",
    skills: [
      { name: "Angular", icon: "🅰️", desc: "Enterprise Digital Banking & Healthcare Platforms", tag: "Angular" },
      { name: "TypeScript", icon: "📘", desc: "Strictly-typed Scalable Architecture & DTOs", tag: "TypeScript" },
      { name: "React", icon: "⚛️", desc: "Production POS Systems & Interactive Dashboards", tag: "React" },
      { name: "Next.js", icon: "▲", desc: "Personal & Simple Side Projects", tag: "Next.js" },
    ],
  },
  {
    category: "Mobile & Cross-Platform",
    description: "Creating fluid mobile experiences and offline-capable progressive web apps.",
    skills: [
      { name: "Ionic Framework", icon: "📱", desc: "Hybrid Mobile Patient & HRIS Clinic Applications", tag: "Ionic" },
      { name: "PWA", icon: "⚡", desc: "Offline-capable Merchant & F&B Ordering Systems", tag: "PWA" },
    ],
  },
  {
    category: "Styling & Motion Systems",
    description: "Crafting responsive, accessible, and high-performance design systems.",
    skills: [
      { name: "TailwindCSS", icon: "🎨", desc: "Custom Design Systems & Utility-first Layouts", tag: "TailwindCSS" },
      { name: "Framer Motion", icon: "✨", desc: "Fluid Page Transitions & Micro-interactions", tag: "Framer Motion" },
    ],
  },
  {
    category: "State & Data Architecture",
    description: "Managing asynchronous data streams, caching, and client state.",
    skills: [
      { name: "RxJS", icon: "🔄", desc: "Reactive Streams & Asynchronous Event Pipelines", tag: "RxJS" },
      { name: "Zustand & Query", icon: "📦", desc: "Predictable Client State & Data Caching", tag: "Zustand" },
      { name: "Supabase & REST", icon: "⚡", desc: "Auth, Realtime Databases & RESTful Integrations", tag: "Supabase" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Livin' Food PWA",
    category: "Professional / Office",
    type: "Professional",
    description: "Progressive Web App for F&B merchant ecosystem integrated into digital banking, enabling food ordering, merchant catalog, and checkout workflows.",
    tech: ["Angular", "TypeScript", "PWA", "TailwindCSS"],
    link: "",
    image: "",
    isMobile: true,
    gradient: "from-amber-500/20 to-amber-500/5",
    accent: "text-amber-700",
    hoverBorder: "group-hover:border-amber-500/30",
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-amber-500/10",
    role: "Software Engineer (Bank Mandiri)",
    companyContext: "Bank Mandiri Digital Banking Ecosystem",
    highlights: [
      "Built F&B merchant ecosystem integrated directly into Livin' digital banking platform.",
      "Engineered progressive web app (PWA) architecture for fast catalog rendering and checkout.",
      "Optimized performance for high concurrency merchant order processing."
    ],
    features: [
      "Digital Menu & Merchant Catalog Browsing",
      "Interactive Cart & Checkout Workflow",
      "Digital Banking Payment Gateway Integration",
      "Offline PWA Caching & Instant Loading"
    ]
  },
  {
    id: 2,
    title: "Livin' Merchant Monitoring Tools",
    category: "Professional / Office",
    type: "Professional",
    description: "Internal operational dashboard for real-time merchant transaction monitoring, analytics, and system health tracking.",
    tech: ["Angular", "TypeScript", "RxJS"],
    link: "",
    image: "",
    isMobile: false,
    gradient: "from-sky-500/20 to-sky-500/5",
    accent: "text-sky-700",
    hoverBorder: "group-hover:border-sky-500/30",
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-sky-500/10",
    role: "Software Engineer (Bank Mandiri)",
    companyContext: "Bank Mandiri Internal Operations",
    highlights: [
      "Developed real-time monitoring tools for internal operations and support teams.",
      "Leveraged RxJS reactive streams to handle live transaction logs and status alerts.",
      "Designed clean data visualization tables and filtered search metrics."
    ],
    features: [
      "Real-time Transaction Health & Log Stream",
      "Merchant Settlement Status Tracker",
      "System Error Alerting & Categorization",
      "Custom Date & Status Analytics Filters"
    ]
  },
  {
    id: 3,
    title: "Livin' Merchant Portal",
    category: "Professional / Office",
    type: "Professional",
    description: "Web portal for merchant onboarding, store management, product catalog administration, and financial reporting.",
    tech: ["Angular", "TypeScript", "TailwindCSS"],
    link: "",
    image: "",
    isMobile: false,
    gradient: "from-teal-500/20 to-teal-500/5",
    accent: "text-teal-700",
    hoverBorder: "group-hover:border-teal-500/30",
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-teal-500/10",
    role: "Software Engineer (Bank Mandiri)",
    companyContext: "Bank Mandiri Merchant Onboarding",
    highlights: [
      "Web portal empowering F&B merchants to manage stores, product items, and daily sales.",
      "Integrated secure authentication and role-based permissions for merchant admins.",
      "Built exportable financial reports and transaction reconciliation views."
    ],
    features: [
      "Store Profile & Merchant Onboarding Setup",
      "Product Catalog & Price Modifier Management",
      "Daily Sales & Revenue Report Exports",
      "Multi-store Account Switching"
    ]
  },
  {
    id: 4,
    title: "SetiaRasa POS",
    category: "Personal / Freelance",
    type: "Personal",
    description: "Production POS system for a Martabak business handling catalog setup, active order flows, and daily financial analytics using React and Supabase.",
    tech: ["React", "Zustand", "Supabase"],
    link: "https://setiarasa-pos.vercel.app",
    image: "/projects/setiarasa.png",
    isMobile: true,
    gradient: "from-emerald-500/20 to-emerald-500/5",
    accent: "text-emerald-700",
    hoverBorder: "group-hover:border-emerald-500/30",
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-emerald-500/10",
    role: "Creator & Lead Developer",
    companyContext: "Production F&B Business (Martabak SetiaRasa)",
    highlights: [
      "Deployed in active daily production to handle real customer orders.",
      "Built with Supabase for instant menu updates, active order queueing, and sales sync.",
      "Used Zustand for ultra-fast, lightweight cashier state management without lag."
    ],
    features: [
      "Rapid Cashier Touchscreen Order Interface",
      "Custom Topping & Crust Modifier Selector",
      "Real-time Kitchen Order Queue Sync",
      "Daily Revenue, Expense & Profit Analytics"
    ]
  },
  {
    id: 5,
    title: "Mobile for Patient",
    category: "Professional / Office",
    type: "Professional",
    description: "Developed patient flows including medical consultations, payment, and medical assessments at Periksa.id.",
    tech: ["Angular", "Ionic", "TypeScript"],
    link: "",
    image: "",
    isMobile: true,
    gradient: "from-blue-500/20 to-blue-500/5",
    accent: "text-blue-700",
    hoverBorder: "group-hover:border-blue-500/30",
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-blue-500/10",
    role: "Frontend Developer (Periksa.id)",
    companyContext: "Periksa.id Healthcare Platform",
    highlights: [
      "Engineered patient-facing mobile application modules using Ionic and Angular.",
      "Implemented digital doctor consultation flows, prescription view, and payment gateway.",
      "Developed daily electronic medical assessment surveys for clinic patients."
    ],
    features: [
      "Doctor Directory & Online Appointment Booking",
      "Digital Prescription & Pharmacy Order Receipts",
      "Medical Assessment Survey Forms",
      "Integrated Digital Payment Gateway"
    ]
  },
  {
    id: 6,
    title: "Mobile Klinik",
    category: "Professional / Office",
    type: "Professional",
    description: "Engineered core HRIS modules for clinic staff, focusing on reimbursement flows, leave request delegations, and attendance tracking.",
    tech: ["Angular", "Ionic", "TypeScript"],
    link: "",
    image: "",
    isMobile: true,
    gradient: "from-teal-500/20 to-teal-500/5",
    accent: "text-teal-700",
    hoverBorder: "group-hover:border-teal-500/30",
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-teal-500/10",
    role: "Frontend Developer (Periksa.id)",
    companyContext: "Periksa.id Clinic HRIS Platform",
    highlights: [
      "Built internal mobile operational tool used by clinic doctors, nurses, and staff.",
      "Engineered reimbursement claim submission workflows with digital receipt attachment.",
      "Implemented geolocation attendance clock-in and shift delegation rules."
    ],
    features: [
      "Reimbursement Request & Multi-tier Approval",
      "Shift Rostering & Duty Delegation Engine",
      "Geolocation Clock-in & Attendance Log",
      "Staff Leave & Overtime Submissions"
    ]
  },
  {
    id: 7,
    title: "The Wild Oasis Web",
    category: "Concept App",
    type: "Personal",
    description: "Guest-facing booking platform with cabin browsing, reservation flows, and authenticated guest accounts. Built with Next.js, Supabase, and Next-Auth.",
    tech: ["Next.js", "Supabase", "Next-Auth"],
    link: "https://sylvaan-oasis-website.vercel.app/",
    image: "/projects/oasis-website.png",
    isMobile: false,
    gradient: "from-purple-500/20 to-purple-500/5",
    accent: "text-purple-700",
    hoverBorder: "group-hover:border-purple-500/30",
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-purple-500/10",
    role: "Fullstack Concept Developer",
    companyContext: "Luxury Resort Booking Platform",
    highlights: [
      "Built with Next.js 14 App Router, Server Components, and Server Actions.",
      "Google OAuth authentication integrated via Next-Auth and Supabase.",
      "Dynamic cabin filter and availability calendar with instant server-side revalidation."
    ],
    features: [
      "Interactive Luxury Cabin Showcase",
      "Date Range Reservation Picker",
      "Authenticated Guest Account Dashboard",
      "Profile & Reservation Management"
    ]
  },
  {
    id: 8,
    title: "Wild Oasis Dashboard",
    category: "Concept App",
    type: "Personal",
    description: "Internal dashboard to manage cabin bookings, guests, and resort stats, featuring interactive data visualization and operational analytics.",
    tech: ["React", "TanStack Query", "Styled Comp."],
    link: "https://sylvaan-oasis-dashboard.vercel.app/dashboard",
    image: "/projects/oasis-dashboard.png",
    isMobile: false,
    gradient: "from-indigo-500/20 to-indigo-500/5",
    accent: "text-indigo-700",
    hoverBorder: "group-hover:border-indigo-500/30",
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-indigo-500/10",
    role: "Frontend Concept Developer",
    companyContext: "Resort Internal Operations & Analytics",
    highlights: [
      "Single Page Application built with React, Styled Components, and TanStack Query.",
      "Recharts data visualization for occupancy rates, daily sales, and stay duration.",
      "Dark mode support with local storage persistence."
    ],
    features: [
      "Executive Dashboard & Recharts Analytics",
      "Cabin Reservation Status & Check-in Controller",
      "Guest Management & Payment Status Log",
      "App-wide Dark / Light Theme Toggle"
    ]
  },
];

export const EXPERIENCES = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Bank Mandiri",
    period: "Jul 2026 - Present",
    description: "Developing and optimizing enterprise digital banking solutions and merchant ecosystem applications using Angular and TypeScript, focusing on high-performance workflows and scalable frontend architecture."
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "periksa.id",
    period: "Jul 2023 - Jul 2026",
    description: "Developed and maintained HRIS and patient portal modules including digital consultations, reimbursement flows, leave delegations, and electronic medical assessments using Angular and Ionic."
  },
  {
    id: 3,
    role: "Junior Frontend Developer (Contract)",
    company: "periksa.id",
    period: "Mar 2023 - Jun 2023",
    description: "Contributed to the development of patient-facing mobile modules, clinical laboratory reports, and HRIS reimbursement workflows using Angular and Ionic."
  },
  {
    id: 4,
    role: "Junior Frontend Developer (Internship)",
    company: "periksa.id",
    period: "Dec 2021 - Feb 2023",
    description: "Assisted in the initial development of patient-facing mobile apps, focusing on bug fixes, UI maintenance, and daily medical assessment survey forms."
  },
  {
    id: 5,
    role: "Bachelor of Engineering - Computer Science",
    company: "BINUS University",
    period: "2019 - 2023",
    description: "GPA: 3.56. Activities: Binus Mandarin Club, Binus English Club, Binus English Debate Club, Regular Mentor."
  }
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: "The Ultimate React Course 2025",
    issuer: "Udemy",
    date: "Mar 2026",
    link: "https://www.udemy.com/certificate/UC-628d99ed-e71c-4895-9fd6-e1c1e4645a31/"
  },
  {
    id: 2,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    date: "Feb 2026",
    link: "https://www.coursera.org/account/accomplishments/specialization/JZR4E28ECR7K"
  },
  {
    id: 3,
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    date: "Aug 2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/FQ09MGU1XJ0K"
  },
  {
    id: 4,
    name: "Angular - The Complete Guide (2025)",
    issuer: "Udemy",
    date: "Jan 2025",
    link: "https://www.udemy.com/certificate/UC-07a782b0-8384-412d-81a1-e8c72b012d8e/"
  }
];
