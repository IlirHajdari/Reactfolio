/* eslint-disable react/prop-types */
function PortfolioItem({ imgUrl, title, stack }) {
  return (
    <div>
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-26 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-large md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex felx-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md"
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
