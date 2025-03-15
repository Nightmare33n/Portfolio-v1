'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Contact = ({ socialLinks }) => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1B2430] p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              {t('contact.form.title')}
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-[#2D3748] text-white border border-gray-600 rounded-lg focus:outline-none focus:border-[#4F46E5] transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-[#2D3748] text-white border border-gray-600 rounded-lg focus:outline-none focus:border-[#4F46E5] transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-[#2D3748] text-white border border-gray-600 rounded-lg focus:outline-none focus:border-[#4F46E5] transition-colors resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4F46E5] text-white py-3 px-6 rounded-lg hover:bg-[#4338CA] transition-colors duration-300 font-medium"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1B2430] p-8 rounded-lg shadow-lg"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contact.info.title')}
              </h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-300">
                  <svg
                    className="w-6 h-6 mr-3 text-[#4F46E5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  contact@example.com
                </p>
                <p className="flex items-center text-gray-300">
                  <svg
                    className="w-6 h-6 mr-3 text-[#4F46E5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +1 (555) 123-4567
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('contact.social.title')}
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#4F46E5] transition-colors duration-300"
                  >
                    <span className="sr-only">{link.icon}</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      {/* Add appropriate SVG paths for each social icon */}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 