import { useParams } from "react-router-dom";
import { useGetFacilityDetailsQuery } from "../../redux/api/facility/facilityApi";
import Loading from "../../shared/Loading";
import stadium from "../../assets/stadium.jpg";

const FacilityDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetFacilityDetailsQuery(id);

  const facility = data?.data[0];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="dark:bg-slate-600 bg-slate-50">
      <div className="container mx-auto py-12 px-4">
        <div className="bg-gradient-to-r from-blue-50 to-teal-50   shadow-lg rounded-xl overflow-hidden transition transform  duration-300">
          {/* Facility Image */}
          <div className="relative w-full h-96 md:h-[500px]">
            <img
              className="w-full h-full object-fit bg-cover rounded-t-xl"
              src={facility.image ? facility.image : stadium}
              alt={facility.name}
            />
            {/* Overlay Section */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent flex justify-between items-end">
              {/* Name and Price on the Right */}
              <div className="">
                <h1 className="text-3xl font-extrabold text-white">
                  {facility.name}
                </h1>
                <p className="text-lg font-semibold text-yellow-300 mt-2">
                  ${facility.pricePerHour} / hour
                </p>
              </div>
              {/* Location on the Left */}
              <div className="text-white text-right">
                <h2 className="text-lg font-semibold">{facility.location}</h2>
              </div>
            </div>
          </div>

          {/* Facility Info */}
          <div className="p-8 space-y-6">
            {/* Facility Description */}
            <div>
              <h2 className="text-xl font-semibold text-blue-700">
                Description
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {facility.description}
              </p>
            </div>

            {/* Book Now Button */}
            <div className="flex justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl hover:from-blue-600 hover:to-blue-800 transform transition hover:-translate-y-1 duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;
