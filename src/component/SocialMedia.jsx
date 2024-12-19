export default function SocialMedia() {
  return (
    <div className="flex flex-wrap justify-center gap-4 border-2 border-white rounded-full p-4 bg-gray-300">
      <div className="w-full text-center mb-2 md:mb-0">
        <h1 className="font-bold text-black text-sm md:text-base lg:text-lg">Social Media:</h1>
      </div>

      <a href="https://www.instagram.com/ralgaluh_/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
        <img src="/icon/instagram.png" alt="Instagram" className="w-8 h-8 md:w-10 md:h-10" />
      </a>
      <a href="https://www.linkedin.com/in/ragas-algaluh-3a2a6a303/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
        <img src="/icon/linkedin.png" alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10" />
      </a>
      <a href="https://www.tiktok.com/@uicodes/video/7410358646762163462" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
        <img src="/icon/tiktok.png" alt="TikTok" className="w-8 h-8 md:w-10 md:h-10" />
      </a>
      <a href="https://github.com/Ragas30" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
        <img src="/icon/github.png" alt="GitHub" className="w-8 h-8 md:w-10 md:h-10" />
      </a>
      <a href="https://discordapp.com/users/530622192870883330" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
        <img src="/icon/discord.png" alt="Discord" className="w-8 h-8 md:w-10 md:h-10" />
      </a>
    </div>
  );
}
