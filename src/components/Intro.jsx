import { forwardRef } from "react";

const Intro = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id={props.id}
      className="flex items-center justify-center flex-col text-center pt-20 pb-6"
    >
      <img
        src="/assets/profile.jpg"
        alt="Picture of me"
        className="w-32 md:w-64 h-32 md:h-64 object-cover rounded-full mb-4 ring-2 ring-blue-600 shadow-2xl"
      />
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Ilir
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Systems Administrator & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Welcome to my portfolio! My name is Ilir Hajdari and I am in the process
        of learning how to become a Web Developer. Give my portfolio a look and
        let me know what you think by sending me a message through the contact
        form. Thank you!
      </p>
    </div>
  );
});

Intro.displayName = "Intro";

export default Intro;
