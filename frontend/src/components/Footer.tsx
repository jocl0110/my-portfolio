import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FooterProps } from "../types/types";

function Footer({ isSidebarOpen }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className={isSidebarOpen ? "sidebar-open" : "sidebar-closed"}>
      <p>&copy; Jose Izquierdo {year}</p>
      <div className="social-icons">
        <a
          href="https://github.com/jocl0110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jose-luis-izquierdo-hernandez-938064245/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/jocl0110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
