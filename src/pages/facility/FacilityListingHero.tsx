const FacilityListingHero = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.freepik.com/premium-photo/blue-background-with-gold-blue-background-with-pattern-hexagons_1293074-51017.jpg?w=740')`,
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
            Facility Listing
          </h1>
          <p
            className="text-xl px-8 sm:text-2xl md:text-3xl lg:text-4xl"
            style={{
              // textShadow: "2px 2px 4px rgba(255, 255, 255, 0.4)"
              textShadow: "1px 1px 2px white, 0 0 1em #6173FF, 0 0 0.2em white",
            }}
          >
            Users can search by facility name and filter by price. Each facility
            is presented in a card with an image, name, price per hour, and a
            "View Details" button for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FacilityListingHero;
