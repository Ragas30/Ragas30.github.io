export default function Wellcome() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/background/1123013.jpg')" }} // Ganti dengan path gambar Anda
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-60">
      </div>

      
      <div className="relative z-10 text-center px-6">
        <h1 data-aos="fade-up" data-aos-duration="1000" className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-wide text-blue-400">
          Welcome To My <span className="text-white">BIOS</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="text-lg sm:text-2xl mb-6">
          Selamat Datang di Halaman Website Pribadi Saya
        </p>

        
        <button
          href="#about"
          onClick={() => handleScroll("about")}
          data-aos="zoom-in"
          data-aos-delay="400"
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Lihat Profil Saya
        </button>
      </div>

      
      <div className="absolute bottom-10 flex justify-center w-full">
        <button onClick={() => handleScroll("about")} className="text-white animate-bounce text-sm">
          Scroll Down ↓
        </button>
      </div>
    </section>
  );
}
