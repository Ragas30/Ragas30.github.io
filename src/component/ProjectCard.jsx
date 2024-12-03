import ProtoType from "prop-types";
export default function ProjectCard({ image, title, targetdir }) {
  return (
    <div className="relative w-24 h-2/4 bg-black rounded-xl m-12 group">
      <a href={targetdir} className="absolute text-white bg-blue-500 right-0 rounded opacity-0 group-hover:opacity-100 group-hover:translate-x-12 px-3 py-1 group-hover:-translate-y-6 transition-all duration-700">
        {title}
      </a>
      <img src={image} />
    </div>
  );
}

ProjectCard.propTypes = {
  image: ProtoType.string.isRequired,
  title: ProtoType.string.isRequired,
  targetdir: ProtoType.string.isRequired,
};
