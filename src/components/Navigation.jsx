import { useState, useEffect, useRef } from "react";
import navData from "../data/navbar";

function Navigation() {
  const [activeSection, setActiveSection] = useState("About Me");

  const aboutMeRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-50px 0px -50px 0px",
      threshold: 0.6,
    });

    const currentAboutMeRef = aboutMeRef.current;
    const currentPortfolioRef = portfolioRef.current;

    if (currentAboutMeRef) {
      observer.observe(currentAboutMeRef);
    }

    if (currentPortfolioRef) {
      observer.observe(currentPortfolioRef);
    }

    return () => {
      if (currentAboutMeRef) {
        observer.unobserve(currentAboutMeRef);
      }

      if (currentPortfolioRef) {
        observer.unobserve(currentPortfolioRef);
      }
    };
  }, []);

  return (
    <nav>
      <ul>
        {navData.map((navItem) => (
          <li
            key={navItem.title}
            className={activeSection === navItem.title ? "highlighted" : ""}
          >
            <a href={navItem.link}>{navItem.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
