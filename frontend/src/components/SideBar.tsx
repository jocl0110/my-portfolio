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
import React, { useEffect } from "react";
import Modal from "./Modal";
import { useLocation } from "react-router";
interface SideBarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalImage: React.Dispatch<React.SetStateAction<string>>;
  modalImage: string;
}

function SideBar({
  isSidebarOpen,
  setIsSidebarOpen,
  setIsModalOpen,
  isModalOpen,
  setModalImage,
  modalImage,
}: SideBarProps) {
  const openModal = () => {
    setIsModalOpen(true);
    setModalImage("../../images/me.png");
  };
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#home") {
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

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
              onClick={openModal}
              className="my_image"
              src="../../images/me.png"
              alt="me"
            />
          </li>
          <div className="header-text">
            <h1>Jose | Izquierdo</h1>
            <h3>Full Stack Developer</h3>
          </div>
          <div className="links_container">
            <li>
              <Link to={location.pathname === "/send_email" ? "/" : "/#home"}>
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
        <Modal setIsModalOpen={setIsModalOpen} image={modalImage} />
      )}
    </>
  );
}

export default SideBar;
