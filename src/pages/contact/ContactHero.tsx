const ContactHero = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        // height: "calc(100vh - 100px)",
        height: "85vh",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto  h-full text-white text-center flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl "
            style={{
              textShadow:
                "1px 1px 2px #26BAA4, 0 0 1em #26BAA4, 0 0 0.2em #26BAA4",
            }}
          >
            Contact Us
          </h1>
          <p
            className="text-xl px-8 sm:text-2xl md:text-3xl lg:text-4xl"
            style={{
              // textShadow: "2px 2px 4px rgba(255, 255, 255, 0.4)"
              textShadow: "1px 1px 2px white, 0 0 1em #6173FF, 0 0 0.2em white",
            }}
          >
            Provide users with a way to reach out for support or give feedback.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
