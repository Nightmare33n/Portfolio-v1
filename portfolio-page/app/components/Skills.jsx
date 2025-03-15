'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const SkillCard = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-[#1B2430] p-6 rounded-lg shadow-lg"
  >
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="text-gray-300">{skill.name}</span>
            <span className="text-gray-300">{skill.level}%</span>
          </div>
          <div className="w-full bg-[#2D3748] rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-[#4F46E5] h-2 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = ({ skillsData }) => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 