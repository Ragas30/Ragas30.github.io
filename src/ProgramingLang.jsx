import ProgramingList from "./component/ProgramingList";
import Title from "./component/Title";
import { data } from "./data/data";

export default function ProgramingLang() {
  return (
    <>
      <div className="mt-10 z-50 mb-10">
        <Title title={"Programing Language"} />
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {data.map((item, index) => {
          return <ProgramingList key={index} image={item.Image} language={item.Language} deskripsi={item.Deskripsi} />;
        })}
      </section>
    </>
  );
}
