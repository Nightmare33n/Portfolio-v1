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
        { name: "React", level: 80 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML & CSS", level: 95 },
       
      ]
    },
    {
      title: t('skills.categories.backend'),
      skills: [
        { name: "Node.js", level: 75 },
        { name: "PHP", level: 75 },
        { name: "JavaScript", level: 85 },
        { name: "MySQL", level: 80 },
      ]
    },
    {
      title: t('skills.categories.other'),
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "API's", level: 85 },
      ]
    }
  ];

  const projects = [
    {
      key: "empleonline",
      title: "Buscador de Prácticas Profesionales",
      description: "Una plataforma para encontrar prácticas profesionales y oportunidades laborales",
      image: "https://th.bing.com/th/id/R.af46319998cc9bb2a021b162c13655e9?rik=ly90FrRL5K46dQ&riu=http%3a%2f%2fwww.hourglassit.com%2fimages%2fresponsive-design.png&ehk=vv1eY5lAd9%2bYZGoQBEx8xr4t5Me4UmzhivbCrnHydMA%3d&risl=&pid=ImgRaw&r=0",
      demoUrl: "https://hackathon-v1.vercel.app/",
      githubUrl: "https://github.com/yourusername/project",
      technologies: ["Next.js", "Tailwind CSS", "Firebase", "TypeScript"]
    },
    {
      key: "ecommerce",
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js and MongoDB",
      image: "https://th.bing.com/th/id/OIP.bI8KDjd8-nDvzTX_PhWv7wHaEo?pid=ImgDet&rs=1",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/yourusername/project",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe"]
    },
    {
      key: "taskmanager",
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "https://th.bing.com/th/id/OIP.7pC18PAo9-712G7RREGfnwHaE8?pid=ImgDet&rs=1",
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
        imageUrl="https://th.bing.com/th/id/R.af46319998cc9bb2a021b162c13655e9?rik=ly90FrRL5K46dQ&riu=http%3a%2f%2fwww.hourglassit.com%2fimages%2fresponsive-design.png&ehk=vv1eY5lAd9%2bYZGoQBEx8xr4t5Me4UmzhivbCrnHydMA%3d&risl=&pid=ImgRaw&r=0"
      />
      <Skills skillsData={skillsData} />
      <Projects projects={projects} />
      <Contact socialLinks={socialLinks} />
    </main>
  );
}
