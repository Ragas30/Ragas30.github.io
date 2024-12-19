import SocialMedia from "./component/SocialMedia";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-r from-blue-800 to-black grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-10 lg:px-20 py-10">
      {/* Bagian Gambar */}
      <div className="flex justify-center transform translate-y-0 opacity-100 transition-all duration-1000" data-aos="fade-down" data-aos-anchor-placement="center-bottom" data-aos-offset="200" data-aos-duration="1000">
        <img src="/foto/ragas.jpeg" alt="Ragas Algaluh" className="h-auto w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px] rounded-full border-4 border-white shadow-lg object-cover" />
      </div>

      {/* Bagian Deskripsi */}
      <div className="text-left text-white space-y-6 transform translate-y-0 opacity-100 transition-all duration-1000" data-aos="fade-left" data-aos-anchor-placement="center-bottom" data-aos-offset="200" data-aos-duration="1000">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold" data-aos="fade-up" data-aos-delay="100">
          Ragas Algaluh
        </h1>
        <p className="text-base md:text-lg lg:text-xl" data-aos="fade-up" data-aos-delay="200">
          Saya adalah seorang <span className="font-bold">fresh graduate</span> yang memiliki semangat besar dalam dunia teknologi, khususnya di bidang <span className="font-bold text-blue-400">frontend development</span>. Saya percaya
          bahwa sebuah desain yang baik dapat menjadi jembatan antara pengguna dan teknologi.
        </p>
        <p className="text-base md:text-lg lg:text-xl" data-aos="fade-up" data-aos-delay="300">
          Selama perjalanan akademik, saya telah mengerjakan beberapa proyek berbasis web yang memungkinkan saya untuk memadukan <span className="font-bold text-blue-400">desain UI/UX</span> dengan{" "}
          <span className="font-bold text-blue-400">pengembangan frontend</span>. Saya merasa nyaman bekerja dengan teknologi seperti <span className="font-bold text-blue-400">React.js</span>,{" "}
          <span className="font-bold text-blue-400">Tailwind CSS</span>, dan <span className="font-bold text-blue-400">JavaScript</span>. Selain itu, saya juga tertarik mendalami animasi dan interaktivitas menggunakan library modern.
        </p>
        <p className="text-base md:text-lg lg:text-xl" data-aos="fade-up" data-aos-delay="400">
          Fokus utama saya adalah menciptakan pengalaman pengguna yang sederhana, intuitif, dan menarik. Saya juga memiliki kemampuan untuk beradaptasi dengan cepat pada berbagai proyek dan senang bekerja dalam tim kolaboratif.
        </p>
        <p className="text-base md:text-lg lg:text-xl" data-aos="fade-up" data-aos-delay="500">
          Selain dunia pemrograman, saya juga aktif mengikuti tren teknologi terbaru, mengembangkan diri melalui kursus online, dan membangun proyek-proyek personal untuk terus meningkatkan keterampilan saya.
        </p>
        <p className="text-base md:text-lg lg:text-xl font-semibold text-blue-300" data-aos="fade-up" data-aos-delay="600">
          {"Sebagai seorang frontend developer, saya percaya bahwa setiap baris kode yang saya tulis adalah kontribusi untuk membuat dunia digital lebih baik."}
        </p>

        {/* Social Media */}
        <div data-aos="zoom-in" data-aos-anchor-placement="center-bottom" data-aos-offset="200" data-aos-delay="700">
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
