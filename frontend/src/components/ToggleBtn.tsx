import { FaBars } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";

interface ToggleBtnProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const ToggleBtn = ({ setIsSidebarOpen, isSidebarOpen }: ToggleBtnProps) => {
  return (
    <button
      className={`sidebar-toggle ${isSidebarOpen ? "hidden" : ""}`}
      onClick={() => setIsSidebarOpen((prev) => !prev)}
    >
      <FaBars />
    </button>
  );
};

export default ToggleBtn;
