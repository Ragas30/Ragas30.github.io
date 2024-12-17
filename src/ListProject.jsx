import Modal from "./component/ModalProject";
import { project } from "./data/project";
import { useState } from "react";

const ListProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Daftar Project</h1>
      <button onClick={openModal} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Lihat Project
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} projects={project} />
    </div>
  );
};

export default ListProject;
