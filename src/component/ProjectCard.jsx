import ProtoType from "prop-types";
export default function ProjectCard({ image, title, description }) {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full object-cover" src={image} alt="Project" />
      <div className="p-4"></div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

ProjectCard.propTypes = {
  image: ProtoType.string.isRequired,
  title: ProtoType.string.isRequired,
  description: ProtoType.string.isRequired,
};
