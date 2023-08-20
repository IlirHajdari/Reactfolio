import { forwardRef } from "react";

const Intro = forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-center justify-center flex-col text-center pt-20 pb-6"
    >
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Ilir
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Systems Administrator & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Welcome to my portfolio!
      </p>
    </div>
  );
});

Intro.displayName = "Intro";

export default Intro;
