import { Link } from "react-router";
function NavBar() {
  return (
    <nav>
      <ul>
        <div>
          <li>
            <img
              src=""
              style={{
                display: "block",
                borderRadius: "50%",
                width: "65px",
                height: "75px",
              }}
              alt="me"
            />
          </li>
        </div>
        <div>
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
  );
}

export default NavBar;
