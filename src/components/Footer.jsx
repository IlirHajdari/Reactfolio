function Footer() {
  return (
    <div className="py-5 text-center">
      {/* Social Icons */}
      <div className="mb-3">
        <a
          href="https://github.com/IlirHajdari"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
          aria-label="Ilir's GitHub profile"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ilir-hajdari/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
          aria-label="Ilir's LinkedIn profile"
        >
          <i className="fab fa-linkedin fa-2x"></i>
        </a>

        <a
          href="https://drive.google.com/drive/folders/15FJIAcbVyGJp0FMQBFkkdhrVb1JFvR_c?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mx-2"
          aria-label="Ilir's Resume Download Link"
        >
          <i className="fas fa-file-alt fa-2x"></i>
        </a>
        {/* Add more icons similarly */}
      </div>

      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Ilir Hajdari. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
