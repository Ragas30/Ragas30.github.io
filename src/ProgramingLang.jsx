import ProgramingList from "./component/ProgramingList";
import Title from "./component/Title";

export default function ProgramingLang() {
  return (
    <>
      <div className="mt-10 z-50 mb-10">
        <Title Title={"Programing Language"} />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <ProgramingList image="/icon/html5.png" language="HTML" deskripsi="HTML merupakan bahasa pemrograman yang digunakan untuk membuat halaman web yang dinamis dan interaktif." />
        <ProgramingList image="/icon/css3.png" language="CSS" deskripsi="CSS merupakan bahasa pemrograman yang digunakan untuk membuat halaman web yang dinamis dan interaktif." />
        <ProgramingList image="/icon/javascript.png" language="Javascript" deskripsi="Javascript merupakan bahasa pemrograman yang digunakan untuk membuat halaman web yang dinamis dan interaktif." />
        <ProgramingList image="/icon/react.png" language="React" deskripsi="React merupakan framework yang digunakan untuk membuat halaman web yang dinamis dan interaktif." />
        <ProgramingList image="/icon/tailwind.png" language="Tailwind" deskripsi="Tailwind merupakan framework yang digunakan untuk membuat halaman web yang dinamis dan interaktif." />
      </section>
    </>
  );
}
