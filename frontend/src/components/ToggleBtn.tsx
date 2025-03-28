import { FaBars } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";

interface ToggleBtnProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const ToggleBtn = ({ setIsSidebarOpen }: ToggleBtnProps) => {
  return (
    <button
      className="sidebar-toggle"
      onClick={() => setIsSidebarOpen((prev) => !prev)}
    >
      <FaBars />
    </button>
  );
};

export default ToggleBtn;
