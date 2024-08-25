import amateurPlayer from "../assets/Amateur-Players.png";
import sportsTeamAndClub from "../assets/Sports-Teams&Clubs.png";
import eventOrganization from "../assets/Event-Organizers.png";
import schoolAndCollage from "../assets/school.png";
import corporationTeam from "../assets/team.png";
import friendsAndFamily from "../assets/friends.png";

const whoCanUseData = [
  {
    image: amateurPlayer,
    name: "Amateur Player",
    title:
      "Perfect for those who enjoy playing their favorite sports without the need for a professional league.",
  },
  {
    image: sportsTeamAndClub,
    name: "Sports Teams & Clubs",
    title:
      "Easily book pitches for practice sessions, tournaments, or friendly matches.",
  },
  {
    image: eventOrganization,
    name: "Event Organizers",
    title:
      " Planning a sports event? Our platform makes it simple to reserve the ideal pitch.",
  },
  {
    image: schoolAndCollage,
    name: "Schools & Colleges",
    title:
      " Ideal for educational institutions looking for additional space for sports activities.",
  },
  {
    image: corporationTeam,
    name: "Corporate Teams",
    title:
      "Great for organizing team-building activities or company sports days.",
  },
  {
    image: friendsAndFamily,
    name: "Friends & Families",
    title:
      "Enjoy quality time with your loved ones by booking a pitch for a fun game.",
  },
];

type TWhoCanUse = {
  image: string;
  title: string;
  name: string;
};

const WhoCanUse = () => {
  return (
    <div className="dark:bg-slate-600 bg-slate-50">
      <div className="container mx-auto py-16">
        <div className="mb-16">
          <h3 className="heading-title">Who Can Use This Platform?</h3>
          <p className="heading-p px-20">
            Our platform is open to everyone! Whether you're a sports
            enthusiast, a casual player, or organizing a friendly match, our
            easy-to-use booking system is here to serve your needs. Here's who
            can
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 place-items-center">
          {whoCanUseData?.map((item: TWhoCanUse, index: number) => (
            <div
              key={index}
              className=" bg-white dark:bg-slate-500 shadow-sm px-8 py-6 rounded-md h-full m-6 sm:m-0"
            >
              <img className="size-20 mx-auto" src={item.image} alt="" />
              <p className="text-center my-4 text-xl font-semibold text-veryDarkViolet dark:text-white">
                {item?.name}
              </p>
              <p className="text-darkGrayishBlue dark:text-grayishBlue">
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoCanUse;
