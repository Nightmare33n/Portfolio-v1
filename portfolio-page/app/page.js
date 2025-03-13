'use client';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useLanguage } from './context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  // Sample data for the components
  const skillsData = [
    {
      title: t('skills.categories.frontend'),
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 80 },
      ]
    },
    {
      title: t('skills.categories.backend'),
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 },
      ]
    },
    {
      title: t('skills.categories.other'),
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 75 },
      ]
    }
  ];

  const projects = [
    {
      key: "empleonline",
      title: "Buscador de Prácticas Profesionales",
      description: "Una plataforma para encontrar prácticas profesionales y oportunidades laborales",
      image: "./img/EmpleOnlineDemo.png",
      demoUrl: "https://hackathon-v1.vercel.app/",
      githubUrl: "https://github.com/yourusername/project",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "TypeScript"]
    },
    {
      key: "ecommerce",
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js and MongoDB",
      image: "/img/projects/ecommerce.jpg",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe"]
    },
    {
      key: "taskmanager",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "/img/projects/taskmanager.jpg",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
      technologies: ["React", "Firebase", "Material-UI", "Redux"]
    }
  ];

  const socialLinks = [
    { url: "https://github.com/yourusername", icon: "GitHub" },
    { url: "https://linkedin.com/in/yourusername", icon: "LinkedIn" },
    { url: "https://twitter.com/yourusername", icon: "Twitter" }
  ];

  return (
    <main className="min-h-screen">
      <Hero
        name="Andre Aguirre"
        title={t('hero.title')}
        description={t('hero.description')}
        imageUrl="/img/profile/profile.jpg"
      />
      <Skills skillsData={skillsData} />
      <Projects projects={projects} />
      <Contact socialLinks={socialLinks} />
    </main>
  );
}
