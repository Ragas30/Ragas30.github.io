import { useState, useEffect } from "react";
import SocialMedia from "./component/SocialMedia";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  // Skills data with categories
  const skillsData = {
    frontend: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "PHP"],
    database: ["MongoDB", "Postgre SQL", "MySQL"],
    tools: ["Git", "Figma"],
  };

  const experiences = [
    {
      year: "May 2025 - Oct 2025",
      title: "Web Developer Intern",
      company: "Mediatama Web Indonesia",
      description: "Worked on responsive web applications and collaborated with senior developers.",
    },
    {
      year: "2024 - now",
      title: "Fullstack Developer",
      company: "Freelance",
      description: "Developing custom websites and applications for various clients.",
    },
  ];

  // State for animated text
  const [animatedText, setAnimatedText] = useState("");
  const fullText = "Read Something";

  // State for active skill category
  const [activeSkillTab, setActiveSkillTab] = useState("frontend");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  // Text animation effect
  useEffect(() => {
    if (animatedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setAnimatedText(fullText.slice(0, animatedText.length + 1));
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [animatedText]);

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 py-20 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Keep original background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-blue-900 opacity-90"></div>

        {/* Blue accent lines */}
        <div className="absolute top-0 left-0 w-1/4 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-blue-400 to-transparent"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full border border-blue-500/10"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full border border-cyan-500/5"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400/30 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-cyan-400/20 rounded-full blur-sm"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with animated text */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4">
            <span className="inline-block px-3 py-1 text-xs tracking-widest uppercase border border-cyan-400/30 text-cyan-400 rounded-sm">
              {animatedText}
              {animatedText.length < fullText.length && <span className="inline-block w-1 h-4 ml-0.5 bg-cyan-400 animate-pulse"></span>}
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-5xl md:text-6xl font-bold mb-6 text-white">
            <span className="relative inline-block mr-3">
              About
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></span>
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 text-transparent bg-clip-text">Me</span>
          </motion.h1>
        </div>

        {/* Profile content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column - Profile photo and basic info */}
          <motion.div className="lg:col-span-5 flex flex-col items-center lg:items-start" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            {/* Profile image with blue gradient border effect */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative rounded-full overflow-hidden h-64 w-64 md:h-72 md:w-72 border-2 border-cyan-400/20">
                <img src="/foto/ragas.jpeg" alt="Ragas Algaluh" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>

            {/* Name and title */}
            <motion.div className="text-center lg:text-left" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Ragas Algaluh</h1>
              <div className="relative group inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition duration-500"></div>
                <div className="relative px-4 py-1 bg-slate-900 rounded-full border border-cyan-400/30 text-cyan-400 font-medium">Web Developer</div>
              </div>

              {/* Social Media */}
              <motion.div className="mt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
                <SocialMedia />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column - Details */}
          <motion.div className="lg:col-span-7 text-white space-y-8" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            {/* About Me section */}
            <motion.div className="backdrop-blur-md rounded-xl p-6 border border-cyan-500/10 bg-slate-900/40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">About Me</h2>
              <p className="text-gray-300 mb-4">I am a Developer with primary expertise in Front-End Development using HTML, CSS, and JavaScript. In addition to creating responsive web interfaces,</p>
              <p className="text-gray-300">
                I also have an interest in back-end development and am ready to grow into a full-stack developer. With a high spirit of learning and always following the latest technological developments, I am ready to contribute to the
                development of innovative digital solutions with the team.
              </p>
            </motion.div>

            {/* Skills section */}
            <motion.div className="backdrop-blur-md rounded-xl p-6 border border-cyan-500/10 bg-slate-900/40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Skills</h2>

              {/* Skill category tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.keys(skillsData).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveSkillTab(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      activeSkillTab === category ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium shadow-lg shadow-blue-500/20" : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/60 border border-slate-700"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>

              {/* Skills list with animation */}
              <AnimatePresence mode="wait">
                <motion.div key={activeSkillTab} variants={containerVariants} initial="hidden" animate="visible" exit={{ opacity: 0 }} className="flex flex-wrap gap-2">
                  {skillsData[activeSkillTab].map((skill, index) => (
                    <motion.span key={skill} variants={itemVariants} className="px-3 py-1 border border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm rounded-full text-sm text-cyan-100">
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Experience section */}
            <motion.div className="backdrop-blur-md rounded-xl p-6 border border-cyan-500/10 bg-slate-900/40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Experience</h2>

              <div className="space-y-6 relative">
                {/* Blue line connecting experiences */}
                <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/80 via-blue-500/40 to-cyan-400/10"></div>

                {/* Experience items */}
                {experiences.map((exp, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 * index + 0.6, duration: 0.6 }} className="flex items-start gap-6 relative pl-8">
                    {/* Gold dot marker */}
                    <div className="absolute left-0 top-1.5 w-6 h-6">
                      <div className="absolute inset-0 rounded-full bg-amber-300/20 animate-pulse"></div>
                      <div className="absolute inset-1.5 rounded-full bg-amber-300"></div>
                    </div>

                    {/* Experience content */}
                    <div>
                      <div className="mb-1">
                        <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                        <p className="text-amber-300/80 text-sm">{exp.year}</p>
                      </div>
                      <p className="text-gray-400 font-medium mb-1">{exp.company}</p>
                      <p className="text-gray-300 text-sm">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Button */}
            <motion.div className="flex justify-start mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <button className="relative flex items-center justify-center px-6 py-3 bg-slate-950 text-amber-300 font-medium tracking-wider rounded-full border border-amber-300/20 hover:bg-gradient-to-br hover:from-slate-900 hover:to-blue-950 transition-all duration-300 ease-out group-hover:text-yellow-300">
                  Lihat Project
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
