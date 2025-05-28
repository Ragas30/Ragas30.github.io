import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["home", "about", "skill"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-gradient-to-r from-black/40 via-indigo-900/30 to-black/40 backdrop-blur-md shadow-lg shadow-indigo-500/10 py-2" : "bg-transparent py-6"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between md:justify-center relative">
          {/* Logo - Redesigned with animation */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <button onClick={() => handleScrollTo("home")} className="text-white hover:text-blue-200 transition-colors flex items-center gap-1 group">
                <span className="text-blue-400 transform group-hover:rotate-90 transition-transform duration-500">&lt;</span>
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-extrabold tracking-tight">R30 Portfolio</span>
                <span className="text-pink-400 transform group-hover:-rotate-90 transition-transform duration-500">/&gt;</span>
              </button>
            </h1>
          </div>

          {/* Desktop Menu - Enhanced with glass effect */}
          <div className="hidden md:flex ml-12">
            <div className="relative px-8 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-inner shadow-white/5">
              <ul className="flex space-x-10">
                {["Home", "About"].map((item) => {
                  const isActive = activeSection === item.toLowerCase();
                  return (
                    <li key={item}>
                      <button
                        onClick={() => handleScrollTo(item.toLowerCase())}
                        className={`relative px-3 py-1 overflow-hidden transition-all duration-300 text-sm tracking-wider
                          ${isActive ? "text-white font-medium" : "text-gray-300 hover:text-white font-light"}`}
                      >
                        {/* Active section indicator */}
                        {isActive && <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></span>}

                        <span className="relative z-10">{item}</span>

                        {/* Bottom line animation */}
                        <span className={`absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button - Redesigned */}
          <div className="md:hidden absolute right-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative p-2 rounded-full transition-all duration-300 focus:outline-none overflow-hidden
                ${isMenuOpen ? "bg-white/10" : "hover:bg-white/5"}
              `}
              aria-label="Toggle menu"
            >
              <div className="relative z-10">
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </div>

              {/* Button hover effect */}
              <span className={`absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0"}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Redesigned with cool effects */}
      <div
        className={`
          absolute top-full left-0 right-0 bg-gradient-to-b from-black/80 to-indigo-900/60 backdrop-blur-lg
          transition-all duration-500 ease-in-out md:hidden
          ${isMenuOpen ? "max-h-screen opacity-100 border-t border-indigo-500/20" : "max-h-0 opacity-0 pointer-events-none"}
          overflow-hidden
        `}
      >
        <div className="px-4 py-4">
          <ul className="flex flex-col items-center space-y-5">
            {["Home", "About", "Skill"].map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <li key={item} className="w-full max-w-xs">
                  <button
                    onClick={() => handleScrollTo(item.toLowerCase())}
                    className={`w-full py-2 px-4 rounded-lg transition-all duration-300 text-center relative overflow-hidden group
                      ${isActive ? "text-white font-medium" : "text-gray-300 font-light"}`}
                  >
                    {/* Button background */}
                    <span className={`absolute inset-0 transition-opacity duration-300 rounded-lg ${isActive ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-100" : "bg-white/5 opacity-0 group-hover:opacity-100"}`}></span>

                    {/* Button border */}
                    <span className={`absolute inset-0 border rounded-lg transition-opacity duration-300 ${isActive ? "border-indigo-500/30 opacity-100" : "border-white/10 opacity-0 group-hover:opacity-100"}`}></span>

                    {/* Button text */}
                    <span className="relative z-10 tracking-wider uppercase text-sm">{item}</span>

                    {/* Active indicator dot */}
                    {isActive && <span className="absolute right-3 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"></span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
