import { FaBars } from "react-icons/fa";
import { SideBarStateProps } from "../App";

const ToggleBtn = ({ setIsSidebarOpen, isSidebarOpen }: SideBarStateProps) => {
  return (
    <button
      className="sidebar-toggle"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <FaBars />
    </button>
  );
};

export default ToggleBtn;
