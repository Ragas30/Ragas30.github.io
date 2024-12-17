export default function Navbar() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-orange-500  fixed top-0 left-0 right-0 sm:px-6 lg:px-8 shadow-2xl z-50">
      <div className="flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-white flex gap-1">
          <a href="#home" onClick={() => handleScrollTo("home")}>
            Wellcome To My BIOS
          </a>
        </h1>
        <ul className="flex gap-3 font-semibold text-white">
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
    </nav>
  );
}
