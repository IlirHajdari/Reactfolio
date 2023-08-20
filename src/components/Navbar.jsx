import navLinks from "../data/navbar";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5">
      {navLinks.map((link, index) => (
        <a key={index} href={link.link} className="mr-4">
          {link.title}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
