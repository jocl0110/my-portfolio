import { SideBarStateProps } from "../App";

function Footer({ isSidebarOpen }: SideBarStateProps) {
  const year = new Date().getFullYear();
  return (
    <footer className={isSidebarOpen ? "sidebar-open" : "sidebar-closed"}>
      <ul>
        <li>Twitter</li>
        <li>LinkedIn</li>
        <li>Github</li>
      </ul>
      <p>&copy; Jose Izquierdo {year}</p>
    </footer>
  );
}

export default Footer;
