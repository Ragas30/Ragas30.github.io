import PropType from "prop-types";
export default function ProgramingList({ image, language, deskripsi }) {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden ">
      <img className="w-full  object-cover" src={image} alt={language} />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{language}</h3>
        <p className="text-gray-600 mt-2">{deskripsi}</p>
      </div>
    </div>
  );
}

ProgramingList.propTypes = {
  image: PropType.string.isRequired,
  language: PropType.string.isRequired,
  deskripsi: PropType.string.isRequired,
};
