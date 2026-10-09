export const PROJECTS = [
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
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-amber-500/10"
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
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-sky-500/10"
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
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-teal-500/10"
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
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-emerald-500/10"
  },
  {
    id: 5,
    title: "Mobile for Patient",
    category: "Professional / Office",
    type: "Professional",
    description: "Developed patient flows including medical consultations, payment, and medical assessments at Periksa.id.",
    tech: ["Angular", "Ionic", "TypeScript"],
    link: "",
    image: "/projects/mobile-klinik.png",
    isMobile: true,
    gradient: "from-blue-500/20 to-blue-500/5",
    accent: "text-blue-700",
    hoverBorder: "group-hover:border-blue-500/30",
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-blue-500/10"
  },
  {
    id: 6,
    title: "Mobile Klinik",
    category: "Professional / Office",
    type: "Professional",
    description: "Engineered core HRIS modules for clinic staff, focusing on reimbursement flows, leave request delegations, and attendance tracking.",
    tech: ["Angular", "Ionic", "TypeScript"],
    link: "",
    image: "/projects/klinik.png",
    isMobile: true,
    gradient: "from-teal-500/20 to-teal-500/5",
    accent: "text-teal-700",
    hoverBorder: "group-hover:border-teal-500/30",
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-teal-500/10"
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
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-purple-500/10"
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
    hoverShadow: "group-hover:shadow-lg group-hover:shadow-indigo-500/10"
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
