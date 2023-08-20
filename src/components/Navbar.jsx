import { useState } from "react";
import navLinks from "../data/navbar";

const styles = {
  "About Me": {
    base: "bg-red-500 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700",
    text: "text-black dark:text-white",
  },
  Portfolio: {
    base: "bg-green-500 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700",
    text: "text-black dark:text-white",
  },
  Contact: {
    base: "bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700",
    text: "text-black dark:text-white",
  },
  Resume: {
    base: "bg-yellow-500 hover:bg-yellow-500 dark:bg-yellow-600 dark:hover:bg-yellow-500",
    text: "text-black dark:text-white",
  },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-center items-center p-5 w-full relative">
      <div
        className="absolute top-4 left-4 md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>

      <ul
        className={`flex space-x-4 ${
          isOpen ? "flex-col space-y-4 items-center" : "flex-row"
        } 
          md:flex-row md:space-y-0 md:items-center md:justify-center transition-all duration-300`}
      >
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`transition-transform duration-300 transform ${
              isOpen ? "scale-100" : "scale-0 md:scale-100"
            } ${link.title === "About Me" ? "pl-4 md:pl-0" : ""}`}
          >
            <a
              href={link.link}
              className={`p-2 py-2 px-5 rounded transition-colors 
      ${styles[link.title].base} ${styles[link.title].text}`}
              onClick={() => setIsOpen(false)}
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
