import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white">
      {/* Fancy background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-800 to-black z-0">
        {/* Animated gradient orb that follows mouse */}
        <div
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.3) 0%, rgba(59,130,246,0.1) 30%, transparent 70%)",
            position: "absolute",
            left: mousePosition.x,
            top: mousePosition.y,
            width: "600px",
            height: "600px",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />

        {/* Particles effect (simulated with pseudo-elements) */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-300 rounded-full"
              initial={{ x: `${Math.random() * 100}vw`, y: -20, opacity: 0.7 }}
              animate={{
                y: "120vh",
                opacity: [0.7, 0.9, 0.7, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                ease: "linear",
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

      {/* Main content */}
      <motion.div className="relative z-10 text-center px-6 max-w-5xl mx-auto" variants={heroVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="mb-2 inline-block">
          <span className="px-4 py-1 text-xs font-medium tracking-wider text-blue-200 uppercase bg-blue-900/50 rounded-full border border-blue-700/30 backdrop-blur-sm">Personal Website</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight leading-none">
          Welcome To My{" "}
          <span className="relative">
            <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 text-transparent bg-clip-text">BIOS</span>
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 opacity-30 blur-md"></span>
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl sm:text-2xl mb-12 text-blue-100/80 font-light max-w-3xl mx-auto">
          Selamat Datang di Halaman Website Pribadi Saya
        </motion.p>

        <motion.div variants={itemVariants}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => handleScroll("about")} className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white bg-blue-600 rounded-full group">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-cyan-500 rounded-full group-hover:w-full group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-blue-900"></span>
              <span className="relative flex items-center">
                Lihat Profil Saya
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </button>

            {/* <button onClick={() => handleScroll("skill")} className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium bg-transparent rounded-full group">
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 border-2 border-blue-500 rounded-full group-hover:opacity-100"></span>
              <span className="relative flex items-center text-blue-100">
                Lihat Keahlian
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </span>
            </button> */}
          </div>
        </motion.div>
      </motion.div>

      {/* Tech-inspired decorative lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-4 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="absolute bottom-10 flex flex-col items-center gap-2 z-10">
        <motion.span className="text-sm font-light text-blue-200/70" animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          Scroll Down
        </motion.span>
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg className="w-6 h-6 text-blue-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
