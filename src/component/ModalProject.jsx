import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Modal = ({ isOpen, onClose, projects }) => {
  if (!isOpen) return null;

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div className="fixed inset-0 flex items-center justify-center z-50 p-4" variants={overlayVariants} initial="hidden" animate="visible" exit="exit">
      {/* Backdrop with blur effect */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Main modal container */}
      <motion.div className="relative max-w-4xl w-full max-h-[85vh] z-10 overflow-hidden" variants={modalVariants} initial="hidden" animate="visible" exit="exit">
        {/* Gold border effect */}
        <div className="absolute inset-0 p-px bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-300 rounded-lg opacity-80"></div>

        {/* Modal content */}
        <div className="relative bg-gradient-to-br from-gray-900 to-blue-900 rounded-lg shadow-2xl overflow-hidden">
          <div className="px-8 py-6 border-b border-amber-300/20">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 text-transparent bg-clip-text">Exclusive</span> Projects
                </h2>
                <p className="text-gray-400 text-sm mt-1">A curated selection of premium work</p>
              </div>

              {/* Close button */}
              <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center text-amber-300 hover:bg-amber-300/10 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Projects list */}
          <div className="p-8 max-h-[60vh] overflow-auto custom-scrollbar">
            <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={listVariants} initial="hidden" animate="visible">
              {projects.map((project, index) => (
                <motion.li key={index} className="group relative overflow-hidden rounded-lg transition-all duration-300 bg-black/30 hover:bg-black/50" variants={itemVariants}>
                  <div className="absolute inset-0 p-px bg-gradient-to-br from-transparent via-amber-300/30 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

                  <div className="relative p-4 flex flex-col md:flex-row gap-4">
                    {/* Project image with overlay */}
                    <div className="relative overflow-hidden rounded-md w-full md:w-32 h-40 md:h-32">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                      <img src={project.Image} alt={project.Title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    </div>

                    {/* Project details */}
                    <div className="flex flex-col justify-between py-1 flex-1">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">{project.Title}</h3>
                        <p className="text-gray-400 text-sm line-clamp-2">{project.description || "Premium project with exclusive craftsmanship and attention to detail."}</p>
                      </div>

                      <div className="mt-3">
                        <a href={project.Targetdir} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-amber-300 hover:text-amber-200 transition-colors text-sm font-medium">
                          <span>View Details</span>
                          <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Footer */}
          <div className="px-8 py-5 border-t border-amber-300/20 bg-black/30 text-right">
            <button onClick={onClose} className="px-6 py-2.5 rounded-md text-sm font-medium relative group overflow-hidden">
              <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-gradient-to-r from-amber-300 to-yellow-400 group-hover:skew-x-12 group-hover:-translate-x-full"></span>
              <span className="absolute inset-0 w-full h-full transition-all delay-100 duration-300 ease-out transform skew-x-12 bg-gradient-to-r from-amber-300/80 to-amber-400/80 group-hover:skew-x-0 group-hover:translate-x-full"></span>
              <span className="absolute inset-0 w-full h-full transition-all delay-200 duration-300 ease-out transform -skew-x-12 bg-black border border-amber-300/30"></span>
              <span className="relative text-amber-300 group-hover:text-black transition-colors delay-100 duration-300 ease-out">CLOSE GALLERY</span>
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-6 right-40 w-20 h-20 border border-amber-300/5 rounded-full opacity-50"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border border-amber-300/10 rounded-full opacity-30"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Image: PropTypes.string.isRequired,
      Targetdir: PropTypes.string.isRequired,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default Modal;
