/* eslint-disable react/prop-types */
function PortfolioItem({ imgUrl, title, stack, link }) {
  return (
    <div className="border-2 border-stone-900 rounded-md dark:border-white overflow-hidden">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
      </a>
      <div className="w-full p-4">
        <h3 className="text-large md:text-xl mb-2 md:mb-3 font-semibold text-center dark:text-white">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs md:text-sm dark:text-white ">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
