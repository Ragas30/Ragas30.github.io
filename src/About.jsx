import SocialMedia from "./component/SocialMedia";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-r from-blue-800 to-black grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-10">
      {/* Bagian Gambar */}
      <div className="flex justify-center" data-aos="fade-right">
        <img src="/foto/ragas.jpeg" alt="Ragas Algaluh" className="h-full w-auto max-h-[500px] rounded-full border-4 border-white shadow-lg object-cover" />
      </div>

      {/* Bagian Deskripsi */}
      <div className="text-left text-white space-y-6" data-aos="fade-left">
        <h1 className="text-4xl font-bold" data-aos="fade-up">
          Ragas Algaluh
        </h1>
        <p className="text-lg" data-aos="fade-up" data-aos-delay="100">
          Saya adalah seorang <span className="font-bold">fresh graduate</span> yang memiliki semangat besar dalam dunia teknologi, khususnya di bidang <span className="font-bold text-blue-400">frontend development</span>. Saya percaya
          bahwa sebuah desain yang baik dapat menjadi jembatan antara pengguna dan teknologi.
        </p>
        <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
          Selama perjalanan akademik, saya telah mengerjakan beberapa proyek berbasis web yang memungkinkan saya untuk memadukan <span className="font-bold text-blue-400">desain UI/UX</span> dengan{" "}
          <span className="font-bold text-blue-400">pengembangan frontend</span>. Saya merasa nyaman bekerja dengan teknologi seperti <span className="font-bold text-blue-400">React.js</span>,{" "}
          <span className="font-bold text-blue-400">Tailwind CSS</span>, dan <span className="font-bold text-blue-400">JavaScript</span>. Selain itu, saya juga tertarik mendalami animasi dan interaktivitas menggunakan library modern.
        </p>
        <p className="text-lg" data-aos="fade-up" data-aos-delay="300">
          Fokus utama saya adalah menciptakan pengalaman pengguna yang sederhana, intuitif, dan menarik. Saya juga memiliki kemampuan untuk beradaptasi dengan cepat pada berbagai proyek dan senang bekerja dalam tim kolaboratif.
        </p>
        <p className="text-lg" data-aos="fade-up" data-aos-delay="400">
          Selain dunia pemrograman, saya juga aktif mengikuti tren teknologi terbaru, mengembangkan diri melalui kursus online, dan membangun proyek-proyek personal untuk terus meningkatkan keterampilan saya.
        </p>
        <p className="text-lg font-semibold text-blue-300" data-aos="fade-up" data-aos-delay="500">
          `Sebagai seorang frontend developer, saya percaya bahwa setiap baris kode yang saya tulis adalah kontribusi untuk membuat dunia digital lebih baik.`
        </p>

        {/* Social Media */}
        <div data-aos="zoom-in" data-aos-delay="600">
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
