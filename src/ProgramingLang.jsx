import ProgramingList from "./component/ProgramingList";
import Title from "./component/Title";
import { data } from "./data/data";

export default function ProgramingLang() {
  return (
    <>
      <div className="mt-10 z-50 mb-10">
        <Title title={"My Skills"} />
        <marquee direction="right" className="text-5xl font-bold pb-2">
          Work In Progres
        </marquee>
      </div>
      <section id="skill" className="bg-gradient-to-r from-blue-800 to-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center p-10">
        {data.map((item, index) => {
          return <ProgramingList data-aos="zoom-out-down" key={index} image={item.Image} language={item.Language} deskripsi={item.Deskripsi} />;
        })}
      </section>
    </>
  );
}
