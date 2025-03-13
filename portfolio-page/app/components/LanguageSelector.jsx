'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="flex gap-2 bg-white dark:bg-gray-800 p-1 rounded-full shadow-lg">
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            language === 'es'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm transition-colors ${
            language === 'en'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
        >
          EN
        </button>
      </div>
    </motion.div>
  );
};

export default LanguageSelector; 