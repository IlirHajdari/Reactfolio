import Header from "./Header";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/90aa5a03-b07f-4237-8fb5-930ebcab70b2"
          method="POST"
          className="flex flex-col w-full md:w-7/12"
        >
          <Header>Get In Touch!</Header>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent
            border-2 rounded-md
            focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="my-3 p-2 bg-transparent
            border-2 rounded-md
            focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent 
          border-2 rounded-md
          focus:outline-none"
          ></textarea>
          <button
            type="button"
            className="text-center inline-block
          px-4 opy-5 w-max text-base
          font-medium rounded-md text-white
          bg-gradient-to-r from-blue-500 
          to-green-500"
          >
            CONTACT ME!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
