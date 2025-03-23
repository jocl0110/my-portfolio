import { FaBars } from "react-icons/fa";

const ToggleBtn = ({ setIsSidebarOpen, isSidebarOpen }) => {
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
