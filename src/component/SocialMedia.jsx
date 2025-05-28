export default function SocialMedia() {
  return (
    <div className="flex flex-wrap justify-center gap-4 bg-blue-900 rounded-xl p-6 shadow-lg border border-gray-800 relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-gray-800 to-gray-700 opacity-20 blur-xl z-0"></div>

      <div className="w-full text-center mb-4 relative z-10">
        <h1 className="font-bold text-blue-300 text-sm md:text-xl lg:text-2xl tracking-widest">CONNECT WITH ME</h1>
      </div>

      {/* Container untuk ikon */}
      <div className="flex flex-wrap justify-center gap-6 w-full relative z-10">
        <a href="https://www.instagram.com/ralgaluh_/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all duration-300 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-lg border border-gray-800 group-hover:border-purple-500">
            <img src="/icon/instagram.png" alt="Instagram" className="w-6 h-6 md:w-7 md:h-7" />
          </div>
        </a>

        <a href="https://www.linkedin.com/in/ragas-algaluh-3a2a6a303/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all duration-300 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-lg border border-gray-800 group-hover:border-blue-500">
            <img src="/icon/linkedin.png" alt="LinkedIn" className="w-6 h-6 md:w-7 md:h-7" />
          </div>
        </a>

        <a href="https://www.tiktok.com/@ragasgaluh_" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all duration-300 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-lg border border-gray-800 group-hover:border-pink-400">
            <img src="/icon/tiktok.png" alt="TikTok" className="w-6 h-6 md:w-7 md:h-7" />
          </div>
        </a>

        <a href="https://github.com/Ragas30" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all duration-300 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-lg border border-gray-800 group-hover:border-gray-400">
            <img src="/icon/github.png" alt="GitHub" className="w-6 h-6 md:w-7 md:h-7" />
          </div>
        </a>

        <a href="https://discordapp.com/users/530622192870883330" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-all duration-300 group">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-lg border border-gray-800 group-hover:border-indigo-400">
            <img src="/icon/discord.png" alt="Discord" className="w-6 h-6 md:w-7 md:h-7" />
          </div>
        </a>
      </div>

      {/* Subtle animated border */}
      <div className="absolute inset-0 border border-gray-700 rounded-xl animate-pulse opacity-30 z-0"></div>
    </div>
  );
}
