import { useState } from "react";

export default function useHeaderLogic() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return { isModalOpen, toggleModal };
}
