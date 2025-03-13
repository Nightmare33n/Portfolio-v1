'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ProjectCard = ({ project, index }) => {
  const { t } = useLanguage();
  const projectKey = project.key || 'portfolio'; // Default to portfolio if no key specified

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative h-48">
        <img
          src="C:\Users\andre\Desktop\Portfolio-v1\portfolio-page\app\img\EmpleOnlineDemo.png"
          alt={t(`projects.projects.${projectKey}.title`)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <a
              href="https://hackathon-v1.vercel.app/" // link de la pagina
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              {t('projects.liveDemo')}
            </a>
            <a
              href={project.githubUrl}  // link de la pagina
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              {t('projects.github')}
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {t(`projects.projects.${projectKey}.title`)}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {t(`projects.projects.${projectKey}.description`)}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ projects }) => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-20 bg-gray-50 dark:bg-gray-900">
      {/* Top gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-900 to-transparent opacity-10 dark:opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent opacity-10 dark:opacity-20"></div>
    </section>
  );
};

export default Projects; 