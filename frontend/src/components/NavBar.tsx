import { useState } from "react";
import { Link } from "react-router";
function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <img
              onClick={() => setIsModalOpen(true)}
              className="my_image"
              src="../../images/me.jpg"
              style={{
                display: "block",
                borderRadius: "100%",
                width: "70px",
                height: "auto",
              }}
              alt="me"
            />
          </li>
          <div className="links_container">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#about_me">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <Link to={"/send_email"}>Let's connect</Link>
            </li>
            <li>
              <a href="my_resume.pdf" download>
                Download
              </a>
            </li>
          </div>
        </ul>
      </nav>

      {isModalOpen && (
        <div
          className="modal"
          onClick={() => setIsModalOpen(false)} // Close when clicking outside
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <img src="../../images/me.jpg" alt="me" />
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
