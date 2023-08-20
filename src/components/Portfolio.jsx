import { forwardRef } from "react";
import portfolioData from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

const Portfolio = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col med:flex-row items-center justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.map((project, index) => (
          <PortfolioItem
            key={index}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
});

Portfolio.displayName = "Portfolio";

export default Portfolio;
