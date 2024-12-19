import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); 
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-orange-500 fixed top-0 left-0 right-0 sm:px-6 lg:px-8 shadow-2xl z-50 ">
      <div className="flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-2xl font-bold text-white">
          <button onClick={() => handleScrollTo("home")}>Wellcome To My BIOS</button>
        </h1>

        
        <button className="sm:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

        
        <ul className="hidden sm:flex gap-6 font-semibold text-white">
          <li className="hover:text-gray-300">
            <button onClick={() => handleScrollTo("home")}>Home</button>
          </li>
          <li className="hover:text-gray-300">
            <button onClick={() => handleScrollTo("about")}>About</button>
          </li>
          <li className="hover:text-gray-300">
            <button onClick={() => handleScrollTo("skill")}>Skill</button>
          </li>
        </ul>
      </div>

      
      {isMenuOpen && (
        <ul className="sm:hidden flex flex-col gap-4 bg-yellow-500 text-white font-semibold py-4 px-6">
          <li className="hover:text-gray-300">
            <button onClick={() => handleScrollTo("home")}>Home</button>
          </li>
          <li className="hover:text-gray-300">
            <button onClick={() => handleScrollTo("about")}>About</button>
          </li>
          <li className="hover:text-gray-300">
            <button onClick={() => handleScrollTo("skill")}>Skill</button>
          </li>
        </ul>
      )}
    </nav>
  );
}
