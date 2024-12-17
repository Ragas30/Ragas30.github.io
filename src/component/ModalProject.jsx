import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, projects }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-[80vh] overflow-auto">
        {/* Header Modal */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Project yang Pernah Dikerjakan</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        
        <ul className="space-y-4">
          {projects.map((project, index) => (
            <li key={index} className="flex items-center space-x-4 border-b pb-2">
              <img
                src={project.Image}
                alt={project.Title}
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <h3 className="text-lg font-bold">{project.Title}</h3>
                <a
                  href={project.Targetdir}
                  className="text-blue-500 hover:underline"
                >
                  Lihat Detail
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* Tombol Tutup */}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
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
