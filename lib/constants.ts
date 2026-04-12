export const siteConfig = {
  name: "Kreotek Technologies",
  legalName: "Kreotek Technologies Private Limited",
  description:
    "Enterprise-grade IT Services, SaaS Solutions & CRM Platform. We build scalable digital products that transform businesses globally.",
  url: "https://kreotek.com",
  ogImage: "/images/og-image.png",
  email: "kreotektechnologies@gmail.com",
  phone: "+91 8512020175",
  address: "Plot No. 392, Sector 74, Faridabad, Haryana - 121004",
  social: {
    linkedin: "https://linkedin.com/company/kreotek",
    facebook: "https://facebook.com/kreotek",
    instagram: "https://instagram.com/kreotek",
    x: "https://x.com/kreotek",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "SaaS Solutions", href: "/saas-solutions" },
  { label: "CRM Platform", href: "/crm-platform" },
  { label: "Contact", href: "/contact" },
] as const;

export const services = [
  {
    title: "Web Development",
    description:
      "High-performance web applications built with modern frameworks. Scalable, secure, and blazing fast.",
    icon: "globe",
    features: ["Next.js & React", "Progressive Web Apps", "E-Commerce", "API Development"],
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences on every device.",
    icon: "smartphone",
    features: ["React Native", "iOS & Android", "Flutter", "App Store Optimization"],
  },
  {
    title: "AI & Machine Learning",
    description:
      "Intelligent solutions powered by AI. Automate processes, predict outcomes, and unlock insights.",
    icon: "brain",
    features: ["Predictive Analytics", "NLP & Chatbots", "Computer Vision", "AI Integration"],
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud-native architecture designed for scale. Migrate, optimize, and manage your infrastructure.",
    icon: "cloud",
    features: ["AWS & Azure", "DevOps & CI/CD", "Microservices", "Cloud Migration"],
  },
  {
    title: "IT Consulting",
    description:
      "Strategic technology consulting to align your IT investments with business objectives.",
    icon: "lightbulb",
    features: ["Digital Strategy", "Tech Audit", "Architecture Design", "Process Optimization"],
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that converts. Beautiful interfaces backed by research and data.",
    icon: "palette",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
];

export const products = [
  {
    name: "VisitorDesk",
    fullName: "VisitorDesk - Entry/Exit System",
    tagline: "Smart Entry & Exit Tracking for Modern Workplaces",
    description:
      "A complete digital visitor management solution. Track check-ins, manage appointments, print badges, and maintain security compliance — all from one dashboard.",
    features: [
      "Digital Check-in & Check-out",
      "Pre-registration & Appointments",
      "Badge Printing",
      "Real-time Dashboard",
      "Security Alerts & Notifications",
      "Multi-location Support",
      "Visitor Analytics & Reports",
      "Integration with Access Control",
    ],
    color: "blue",
  },
  {
    name: "CareDesk",
    fullName: "CareDesk - Clinic System",
    tagline: "Complete Healthcare Practice Management",
    description:
      "End-to-end clinic management platform designed for healthcare providers. Manage patients, appointments, billing, and medical records with ease and compliance.",
    features: [
      "Patient Registration & Records",
      "Appointment Scheduling",
      "Electronic Health Records",
      "Billing & Invoicing",
      "Prescription Management",
      "Lab & Reports Integration",
      "Multi-clinic Support",
      "HIPAA Compliant Security",
    ],
    color: "emerald",
  },
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CTO, FinServ Solutions",
    content:
      "Kreotek delivered our fintech platform 3 weeks ahead of schedule. Their engineering quality is on par with top-tier consulting firms, but with the agility of a startup.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Director, HealthFirst Clinics",
    content:
      "CareDesk transformed how we operate. Patient wait times dropped by 40% and our staff productivity doubled. Outstanding product.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "VP Engineering, RetailMax",
    content:
      "We evaluated 12 vendors before choosing Kreotek. Their cloud architecture expertise and commitment to delivery excellence made them the clear winner.",
    rating: 5,
  },
];

export const stats = [
  { value: "2", label: "SaaS Products" },
  { value: "6+", label: "Service Offerings" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "24/7", label: "Support Available" },
];

export const whyChooseUs = [
  {
    title: "Enterprise-Grade Quality",
    description: "Production-ready code with comprehensive testing, documentation, and security built in from day one.",
    icon: "shield",
  },
  {
    title: "Startup Agility",
    description: "Fast iterations, direct communication with senior engineers, and the flexibility to adapt quickly.",
    icon: "zap",
  },
  {
    title: "Transparent Process",
    description: "Weekly demos, real-time project dashboards, and no hidden costs. You see everything, always.",
    icon: "eye",
  },
  {
    title: "Long-term Partnership",
    description: "We don't just deliver and disappear. Ongoing support, maintenance, and strategic guidance included.",
    icon: "handshake",
  },
];
