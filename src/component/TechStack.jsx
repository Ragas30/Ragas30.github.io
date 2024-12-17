import PropTypes from "prop-types";

export default function ProgramingList({ image, language }) {
  return (
    <div
      className="w-full bg-white shadow-lg rounded-lg overflow-hidden flex items-center p-4"
      data-aos="fade-up" // Tambahkan nilai class AOS langsung di sini
    >
      {/* Bagian Icon */}
      <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
        <img className="w-10 h-10 object-contain" src={image} alt={language} />
      </div>

      <div className="ml-4">
        <h2 className="text-lg font-bold text-gray-800">{language}</h2>
      </div>
    </div>
  );
}

ProgramingList.propTypes = {
  image: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
