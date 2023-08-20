import navLinks from "../data/navbar";

const styles = {
  "About Me": {
    base: "bg-red-800 hover:bg-red-700 dark: bg-red-200 dark:text-white",
    text: "text-black",
  },
  Portfolio: {
    base: "bg-green-800 hover:bg-green-700 dark:text-white",
    text: "text-black",
  },
  Contact: {
    base: "bg-blue-800 hover:bg-blue-700 dark:text-white",
    text: "text-black",
  },
  Resume: {
    base: "bg-yellow-600 hover:bg-yellow-500 dark:text-white",
    text: "text-black",
  },
};

function Navbar() {
  return (
    <nav className="flex justify-center items-center p-5">
      <ul className="flex space-x-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.link}
              className={`p-2 py-2 px-5 rounded transition-colors ${
                styles[link.title].base
              } ${styles[link.title].text}`}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
