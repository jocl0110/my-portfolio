import { FaBars } from "react-icons/fa";
import { SideBarStateProps } from "../App";

const ToggleBtn = ({ setIsSidebarOpen }: SideBarStateProps) => {
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
