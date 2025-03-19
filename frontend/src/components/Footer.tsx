function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
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
