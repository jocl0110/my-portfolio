import { FaBars } from "react-icons/fa";
import { ToggleBtnProps } from "../types/types";

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
