import { useGetAllFacilityQuery } from "../redux/api/facility/facilityApi";
import stadium from "../assets/stadium.jpg";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

interface TFacilities {
  index: number;
  _id: string;
  image: string;
  name: string;
  description: string;
  location: string;
  pricePerHour: number;
}

const FeaturedFacilities = () => {
  const navigate = useNavigate();
  const {
    data: facilities,
    isLoading,
    isError,
  } = useGetAllFacilityQuery({
    page: 1,
    limit: 4,
  });

  if (isLoading || isError) {
    return <Loading />;
  }

  return (
    <div className="dark:bg-neutral-800 bg-neutral-100">
      <div className="container py-16 mx-auto">
        <div className="mb-16">
          <h3 className="heading-title">Featured Facilities</h3>
          <p className="heading-p px-20">
            Explore our top-rated sports venues with a handpicked selection of
            popular facilities. Each facility is showcased with high-quality
            images, names, and a brief description to help you find the perfect
            location for your next game.
          </p>
        </div>
        <div className="flex  items-center justify-center mb-16 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {facilities?.data?.map((item: TFacilities) => (
              <div
                key={item._id}
                className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
              >
                <div className="h-96 w-72">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={item?.image ? item?.image : stadium}
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className=" text-3xl font-bold text-white">
                    {item.name.substring(0, 20)}
                  </h1>
                  <p className="mb-4 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span>
                      {item.description.length > 50
                        ? `${item.description.substring(0, 50)}...`
                        : item.description}
                    </span>
                  </p>
                  <p className="text-lightBlue my-4 text-2xl font-semibold">
                    $ {item.pricePerHour} / Hour
                  </p>
                  <button
                    onClick={() => navigate(`/facility-listing/${item._id}`)}
                    className="rounded-full bg-teal-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFacilities;
