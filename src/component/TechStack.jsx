import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function ProgrammingList({ image, language }) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6
      }}
      whileHover={{ scale: 1.02, x: 10 }}
      className="w-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl overflow-hidden"
    >
      <div className="flex items-center p-6 group">
        {/* Icon Container with Glow Effect */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg transform group-hover:scale-110 transition-transform duration-300" />
          <div className="relative w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20">
            <img 
              className="w-10 h-10 object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" 
              src={image} 
              alt={language}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="ml-6 flex-grow">
          <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {language}
          </h2>
          {/* Animated Underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="h-0.5 bg-blue-500/50 mt-2"
          />
        </div>

        {/* Arrow Indicator */}
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="ml-auto transform group-hover:translate-x-2 transition-transform duration-300"
        >
          <svg 
            className="w-6 h-6 text-blue-400 opacity-50 group-hover:opacity-100" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

ProgrammingList.propTypes = {
  image: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};