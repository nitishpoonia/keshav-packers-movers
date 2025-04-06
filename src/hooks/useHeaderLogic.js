// src/hooks/useHeaderLogic.js
import { useState } from "react";

export default function useHeaderLogic() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return { isModalOpen, toggleModal };
}
