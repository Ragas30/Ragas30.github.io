export default function SocialMedia() {
  return (
    <div className="flex justify-center gap-4 border-2 border-white rounded-full p-2 bg-gray-300">
      <div className="flex flex-row justify-evenly items-center">
        <h1 className="font-bold text-black">Social Media: </h1>
      </div>
      <a href="https://www.instagram.com/ralgaluh_/" target="_blank" rel="noopener noreferrer">
        <img src="/icon/instagram.png" alt="Instagram" className="w-8 h-8" />
      </a>
      <a href="https://www.linkedin.com/in/ragas-algaluh-3a2a6a303/" target="_blank" rel="noopener noreferrer">
        <img src="/icon/linkedin.png" alt="Linkedin" className="w-8 h-8" />
      </a>
      <a href="https://www.tiktok.com/@uicodes/video/7410358646762163462" target="_blank" rel="noopener noreferrer">
        <img src="/icon/tiktok.png" alt="Linkedin" className="w-8 h-8" />
      </a>
      <a href="https://github.com/Ragas30" target="_blank" rel="noopener noreferrer">
        <img src="/icon/github.png" alt="Linkedin" className="w-8 h-8" />
      </a>
      <a href="https://discordapp.com/users/530622192870883330" target="_blank" rel="noopener noreferrer">
        <img src="/icon/discord.png" alt="Linkedin" className="w-8 h-8" />
      </a>
    </div>
  );
}
