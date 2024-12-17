import Modal from "./component/ModalProject";
import { project } from "./data/project";
import { useState } from "react";

const ListProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-xl">Daftar Project</h1>

      {/* Tombol Lihat Project */}
      <button onClick={openModal} className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105 active:scale-95 duration-300">
        Lihat Project
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} projects={project} />
    </div>
  );
};

export default ListProject;
