const Hero = () => {
  return (
    <div className="container mx-auto">
      <h1>Hello, Hero!</h1>
      <button className="p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80 text-white">
        Download
      </button>
      <button className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80 text-white">
        Down Ignore
      </button>
    </div>
  );
};

export default Hero;
