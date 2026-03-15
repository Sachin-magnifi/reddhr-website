import {
  Monitor,
  Users,
  Smartphone,
  Building2,
  Globe,
  Code,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";

export const COMPANY = {
  name: "ReddHR",
  tagline: "HR Technology",
  fullTagline: "Your Trusted Partner in Human Capital & Custom Software Solutions",
  description:
    "We specialize in providing comprehensive HR services and top-notch software development. Whether you're looking to develop a powerful CRM, an efficient HRMS tool, or an application specifically designed for your business, we bring your vision to life.",
  phone: "+91 7304399824",
  email: "info@reddhr.com",
  address: "Mumbai, Maharashtra 400059, India",
  founded: 2017,
  linkedin: "https://www.linkedin.com/company/reddhr/",
  industry: "Software Development",
  size: "11-50 employees",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    slug: "custom-crm-development",
    title: "Custom CRM Development",
    shortDescription: "Tailored CRM solutions designed to meet your exact business requirements.",
    description:
      "Our custom CRM solutions are built from the ground up to match your unique business processes. We design intuitive interfaces, automate workflows, and integrate with your existing tools to help you manage customer relationships more effectively and drive revenue growth.",
    icon: Monitor,
    features: [
      "Custom pipeline management",
      "Automated lead scoring & tracking",
      "Third-party integrations",
      "Real-time analytics dashboards",
      "Mobile-responsive design",
      "Role-based access control",
    ],
  },
  {
    slug: "custom-hrms-development",
    title: "Custom HRMS Development",
    shortDescription: "Streamlined HR management systems for efficient operations.",
    description:
      "We build comprehensive HRMS platforms that streamline every aspect of human resource management. From recruitment and onboarding to payroll and performance reviews, our systems are designed to reduce manual work and enhance employee experience.",
    icon: Users,
    features: [
      "Employee lifecycle management",
      "Payroll & benefits administration",
      "Performance management modules",
      "Leave & attendance tracking",
      "Recruitment pipeline integration",
      "Compliance & reporting tools",
    ],
  },
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    shortDescription: "Engaging and functional apps for iOS, Android, and cross-platform solutions.",
    description:
      "We create beautiful, high-performance mobile applications that users love. Using the latest frameworks and technologies, we deliver native and cross-platform apps that provide seamless experiences across all devices.",
    icon: Smartphone,
    features: [
      "Native iOS & Android development",
      "Cross-platform solutions (React Native, Flutter)",
      "UI/UX design & prototyping",
      "Push notifications & real-time features",
      "App Store optimization",
      "Ongoing maintenance & updates",
    ],
  },
  {
    slug: "enterprise-software-development",
    title: "Enterprise Software Development",
    shortDescription: "Robust and scalable software for large-scale businesses.",
    description:
      "We architect and build enterprise-grade software solutions that scale with your business. Our solutions handle complex workflows, high-volume data processing, and stringent security requirements while maintaining exceptional performance.",
    icon: Building2,
    features: [
      "Microservices architecture",
      "Cloud-native solutions (AWS, Azure, GCP)",
      "API design & integration",
      "Database optimization",
      "Security-first development",
      "24/7 monitoring & support",
    ],
  },
  {
    slug: "offshore-software-development",
    title: "Offshore Software Development",
    shortDescription: "Cost-effective, high-quality development services tailored to your needs.",
    description:
      "Leverage our skilled development teams in India to reduce costs without compromising quality. We provide dedicated teams, transparent communication, and agile methodologies to deliver your projects on time and within budget.",
    icon: Globe,
    features: [
      "Dedicated development teams",
      "Agile project management",
      "Transparent communication",
      "Time-zone overlap availability",
      "IP protection & NDAs",
      "Scalable team augmentation",
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription: "Modern and responsive websites that enhance your online presence.",
    description:
      "We design and develop stunning, high-performance websites that convert visitors into customers. From corporate sites to complex web applications, we use cutting-edge technologies to deliver exceptional digital experiences.",
    icon: Code,
    features: [
      "Responsive & mobile-first design",
      "SEO optimization",
      "Performance optimization",
      "CMS integration",
      "E-commerce solutions",
      "Analytics & conversion tracking",
    ],
  },
  {
    slug: "strategic-hr-support",
    title: "Strategic HR Support",
    shortDescription: "Expert guidance in human resources to optimize your HR practices.",
    description:
      "Our HR consultants bring years of industry experience to help you build and optimize your human resources function. From policy creation to employee engagement strategies, we align your HR practices with your business goals.",
    icon: HeartHandshake,
    features: [
      "HR policy development",
      "Employee engagement programs",
      "OKR implementation",
      "Organizational design",
      "Compensation benchmarking",
      "HR audit & compliance",
    ],
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Priya Mehta",
    role: "Head of HR",
    company: "TechVista Solutions",
    quote:
      "ReddHR transformed our entire recruitment process. Their custom HRMS reduced our time-to-hire by 40% and the team was incredibly responsive throughout the project.",
    avatar: "PM",
  },
  {
    name: "Arjun Desai",
    role: "CEO",
    company: "NovaBridge Labs",
    quote:
      "The CRM they built for us is exactly what we needed — intuitive, powerful, and perfectly aligned with our sales workflow. Our team adopted it within days.",
    avatar: "AD",
  },
  {
    name: "Sneha Kapoor",
    role: "VP of Operations",
    company: "ScaleUp Digital",
    quote:
      "Working with ReddHR on our enterprise platform was a seamless experience. They understood our complex requirements and delivered a solution that exceeded expectations.",
    avatar: "SK",
  },
  {
    name: "Vikram Rao",
    role: "Founder",
    company: "GreenLeaf HR Consulting",
    quote:
      "Their strategic HR support helped us structure our entire HR department from scratch. The policies and processes they implemented are still running smoothly two years later.",
    avatar: "VR",
  },
];

export const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "Python",
  "AWS", "Azure", "Docker", "PostgreSQL", "MongoDB",
  "Flutter", "React Native", "Tailwind CSS", "GraphQL", "Redis",
  "Kubernetes", "Terraform", "Git", "Figma", "Jira",
];

export interface WhyUsItem {
  title: string;
  description: string;
}

export const WHY_CHOOSE_US: WhyUsItem[] = [
  {
    title: "Custom-Built Solutions",
    description:
      "Every project is tailored to your unique business needs — no one-size-fits-all templates.",
  },
  {
    title: "Deep HR Expertise",
    description:
      "Our dual expertise in HR and technology means we truly understand the problems we're solving.",
  },
  {
    title: "Proven Track Record",
    description:
      "8+ years, 50+ clients, and 200+ successful projects across industries.",
  },
  {
    title: "End-to-End Support",
    description:
      "From strategy and design through development and post-launch support, we're with you at every step.",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Rahul CN", role: "Founder & CEO", avatar: "RC" },
  { name: "Apoorva Singh", role: "HR Lead", avatar: "AS" },
  { name: "Dev Team", role: "Engineering", avatar: "DT" },
  { name: "Design Team", role: "UI/UX Design", avatar: "DS" },
];
