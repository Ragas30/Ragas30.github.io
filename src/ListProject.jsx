import ProjectCard from "./component/ProjectCard";
import Title from "./component/Title";
import { project } from "./data/project";
export default function ListProject() {
  return (
    <section className="bg-gradient-to-r from-blue-800 via-slate-300 to-black">
      <div className="flex flex-col py-16 mx-auto">
        <Title title={"My Project"} />
        <div className="bg-gradient-to-l from-white via-gray200 to-black">
          <marquee direction="right" speed="100" className="text-5xl font-bold text-white">
            Work In Progress
          </marquee>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 items-center p-10">
          {project.map((item, index) => {
            return <ProjectCard key={index} title={item.Title} image={item.Image} />;
          })}
        </div>
      </div>
    </section>
  );
}
