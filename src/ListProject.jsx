import Modal from "./component/ModalProject";
import { project } from "./data/project";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ListProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animatedText, setAnimatedText] = useState("");
  const [textComplete, setTextComplete] = useState(false);
  const fullText = "Exclusive Portfolio";

  // Text animation effect
  useEffect(() => {
    if (textComplete) return;

    if (animatedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setAnimatedText(fullText.slice(0, animatedText.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setTextComplete(true);
    }
  }, [animatedText, textComplete]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Luxury background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-purple-900/40"></div>

        {/* Golden accents */}
        <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-amber-200 via-yellow-400 to-amber-200"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-amber-200 via-yellow-400 to-amber-200"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0yOCA2NkwwIDUwTDAgMTZMMjggMEw1NiAxNkw1NiA1MEwyOCA2NkwyOCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+CjxwYXRoIGQ9Ik0yOCAwTDI4IDY2TDAgNTBMMCA1MEw1NiA1MEw1NiAxNkwyOCAwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIiPjwvcGF0aD4KPC9zdmc+')]"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* Animated subtitle */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }} className="mb-3">
            <span className="inline-block px-4 py-1 text-xs tracking-widest uppercase border border-amber-300/30 text-amber-300 rounded-sm">
              {animatedText}
              {!textComplete && <span className="inline-block w-1 h-4 ml-0.5 bg-amber-300 animate-pulse"></span>}
            </span>
          </motion.div>

          {/* Elegant heading */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            <span className="relative inline-block">
              Daftar
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></span>
            </span>{" "}
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-300 text-transparent bg-clip-text">Project</span>
          </motion.h1>

          {/* Elegant description */}
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="max-w-2xl mx-auto text-base md:text-lg text-gray-300 font-light mb-10">
            Discover our meticulously crafted collection of premium projects, each representing the pinnacle of design and innovation excellence.
          </motion.p>

          {/* Luxury button */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button
              onClick={openModal}
              className="relative flex items-center justify-center px-8 py-4 bg-black text-amber-300 font-medium tracking-wider rounded-full border border-amber-300/20 hover:bg-gradient-to-r hover:from-blue-900 hover:to-indigo-900 transition-all duration-300 ease-out group-hover:text-yellow-300"
            >
              <span className="relative flex items-center">
                VIEW COLLECTION
                <svg className="w-5 h-5 ml-3 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 w-20 h-20 border border-amber-300/20 rounded-full"></div>
        <div className="absolute top-10 right-10 w-32 h-32 border border-amber-300/10 rounded-full"></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-amber-300/30 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-amber-300/20 rounded-full blur-md"></div>
      </div>

      {/* Modal with AnimatePresence for smooth transitions */}
      <AnimatePresence>{isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} projects={project} />}</AnimatePresence>
    </div>
  );
};

export default ListProject;
