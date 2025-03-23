import { useState } from "react";
import { Link } from "react-router";
import {
  FaHome,
  FaGraduationCap,
  FaUser,
  FaCode,
  FaEnvelope,
  FaFileDownload,
  FaTimes,
} from "react-icons/fa";
import { SideBarStateProps } from "../App";

function SideBar({ isSidebarOpen, setIsSidebarOpen }: SideBarStateProps) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <aside className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <button
          className="sidebar-close"
          onClick={() => setIsSidebarOpen?.(!isSidebarOpen)}
        >
          <FaTimes />
        </button>
        <ul>
          <li>
            <img
              onClick={() => setIsModalOpen(true)}
              className="my_image"
              src="../../images/me.png"
              alt="me"
            />
          </li>
          <div className="header-text">
            <h1>Jose | Izquierdo</h1>
            <h3>MERN Stack Developer</h3>
          </div>
          <div className="links_container">
            <li>
              <Link to={"/"}>
                <FaHome className="nav-icon" /> Home
              </Link>
            </li>
            <li>
              <a href="#education">
                <FaGraduationCap className="nav-icon" /> Education
              </a>
            </li>
            <li>
              <a href="#about_me">
                <FaUser className="nav-icon" /> About Me
              </a>
            </li>
            <li>
              <a href="#projects">
                <FaCode className="nav-icon" /> Projects
              </a>
            </li>
            <li>
              <Link to={"/send_email"}>
                <FaEnvelope className="nav-icon" /> Let's connect
              </Link>
            </li>
            <li>
              <a href="my_resume.pdf" download>
                <FaFileDownload className="nav-icon" /> Download CV
              </a>
            </li>
          </div>
        </ul>
      </aside>

      {isModalOpen && (
        <div
          className="modal"
          onClick={() => setIsModalOpen(false)} // Close when clicking outside
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <img src="../../images/me.png" alt="me" />
          </div>
        </div>
      )}
    </>
  );
}

export default SideBar;
