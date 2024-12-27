import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, projects }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" data-aos="zoom-in" data-aos-duration="500">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[80vh] overflow-auto">
        {/* Header Modal */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Project yang Pernah Dikerjakan</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-3xl">
            &times;
          </button>
        </div>

        
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <li key={index} className="flex items-center space-x-4 border-b pb-4">
              <img src={project.Image} alt={project.Title} className="w-32 h-32 object-cover rounded-lg shadow-md" />
              <div>
                <h3 className="text-lg font-bold text-gray-700">{project.Title}</h3>
                <a href={project.Targetdir} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Lihat Detail
                </a>
              </div>
            </li>
          ))}
        </ul>

        
        <div className="mt-6 text-right">
          <button onClick={onClose} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Image: PropTypes.string.isRequired,
      Targetdir: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Modal;
