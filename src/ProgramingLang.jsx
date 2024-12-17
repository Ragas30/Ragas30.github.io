import ProgramingList from "./component/TechStack";
import Title from "./component/Title";
import { data } from "./data/data";

export default function ProgramingLang() {
  return (
    <>
      <div className="py-10 bg-gradient-to-r from-blue-800 to-black h-10">
        <div className=" z-50 mb-10 text-white">
          <Title title={"My Tech Stack"} />
        </div>
      </div>
      <section id="skill" className="bg-gradient-to-r from-blue-800 to-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center p-10">
        {data.map((item, index) => {
          return <ProgramingList data-aos="zoom-out-down" key={index} image={item.Image} language={item.Language} />;
        })}
      </section>
    </>
  );
}
