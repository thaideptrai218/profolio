
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Layout, 
  Terminal, 
  Cpu, 
  Layers
} from 'lucide-react';

export const personalInfo = {
  name: "Dinh Cong Thai",
  title: "Full Stack Developer",
  subtitle: "Backend Specialist | Modern Web Enthusiast",
  bio: "I'm Dinh Cong Thai, a passionate software engineering student at FPT University (GPA 3.3, IELTS 6.5) with a strong focus on full-stack development. I started my journey with Java backend development, gaining solid experience with Servlets, JSP, and RESTful API design. Now, I'm expanding my expertise into modern technologies like Node.js, React, and TypeScript to become a versatile full-stack developer.",
  email: "welterial@gmail.com",
  phone: "0359915097",
  location: "Thach That, Hanoi",
  github: "https://github.com/thaideptrai218",
  linkedin: "https://linkedin.com/in/dinhcongthai", // Placeholder
  socials: {
    github: "https://github.com/thaideptrai218",
    linkedin: "#",
    twitter: "#"
  }
};

export const skills = {
  frontend: {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React", "TypeScript", "JavaScript", "HTML5/CSS3", "Tailwind CSS", "Framer Motion"]
  },
  backend: {
    title: "Backend Development",
    icon: Server,
    skills: ["Java (Spring Boot)", "Node.js (Express)", "Go (Gin)", "RESTful APIs", "Servlets & JSP"]
  },
  database: {
    title: "Database & Caching",
    icon: Database,
    skills: ["MongoDB", "MySQL", "SQL Server", "Redis", "Elasticsearch"]
  },
  tools: {
    title: "Architecture & Tools",
    icon: Layers,
    skills: ["Docker", "Git/GitHub", "AWS", "Maven", "Microservices", "Monolithic Arch"]
  }
};

export const projects = [
  {
    id: 1,
    title: "Online Train Ticket Booking System",
    category: "Full Stack",
    description: "A comprehensive web application for searching and booking train tickets with authentication and payment simulation.",
    tech: ["Java", "JSP", "Servlet", "SQL Server", "HTML/CSS"],
    github: "https://github.com/thaideptrai218/swp391-train-booking-system",
    demo: null,
    image: "https://images.unsplash.com/photo-1532105685479-db4c2a4ab754?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Database schema with 6 tables (User, Train, Route, Booking, Payment, Admin)",
      "RESTful APIs for search, booking, authentication",
      "Stored procedures and transaction handling",
      "Responsive frontend with AJAX integration"
    ],
    featured: true
  },
  {
    id: 2,
    title: "Task Management API",
    category: "Backend",
    description: "A scalable REST API for managing tasks and projects with real-time updates.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2069&auto=format&fit=crop",
    features: [
      "JWT Authentication and Role-based access control",
      "Real-time notifications using Socket.io",
      "Advanced filtering and pagination",
      "Unit testing with Jest"
    ],
    featured: false
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    category: "Frontend",
    description: "Modern admin dashboard for an e-commerce platform with data visualization.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Interactive charts and graphs",
      "Dark/Light mode support",
      "Responsive data tables",
      "State management with Redux Toolkit"
    ],
    featured: false
  }
];

export const experience = [
  {
    id: 1,
    role: "Software Engineering Student",
    company: "FPT University",
    period: "Jan 2024 - Present",
    description: "Focusing on Backend development, System design, and Modern web technologies. Maintaining a GPA of 3.3/4.0."
  },
  {
    id: 2,
    role: "Intern Full Stack Developer",
    company: "Open for Opportunities",
    period: "Present",
    description: "Seeking internship opportunities to apply skills in Node.js, React, and Java Spring Boot in a professional environment."
  }
];

export const education = {
  institution: "FPT University, Hanoi",
  degree: "Bachelor of Software Engineering",
  period: "Jan 2024 - Present",
  gpa: "3.3/4.0",
  certs: ["IELTS 6.5 (Jan 2023)"],
  location: "Thach That, Hanoi"
};
