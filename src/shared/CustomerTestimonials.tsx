import { Avatar } from "antd";
import { testimonialData } from "./fakeData";

const CustomerTestimonials = () => {
  return (
    <div className="dark:bg-slate-800">
      <div className="container mx-auto py-16 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-[50%]  flex justify-center items-center p-4 md:p-6">
          <div>
            <div>
              <p className="uppercase font-medium mb-6 leading-3 text-secondary-color ">
                Testimonials
              </p>
              <h2 className="text-2xl md:text-3xl leading-8  mb-8 text-veryDarkViolet dark:text-cyanLight">
                Once you play here, there's no going back
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {testimonialData?.slice(0, 4)?.map((item) => (
                <figure className="">
                  <Avatar size={64} src={item?.photo} />
                  <blockquote className="text-lg mt-2 mb-6 leading-6 text-third-color dark:text-slate-500">
                    {item?.comment}
                  </blockquote>
                  <p className="text-fourth-color">&mdash; {item?.name}</p>
                </figure>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 p-4 md:gap-6 md:p-6 overflow-hidden">
            {testimonialData?.slice(0, 12)?.map((item, index) => (
              <div key={index} className="block w-full  overflow-hidden">
                <img
                  className="w-full h-24 md:h-40 transition-all ease-in-out duration-500  hover:scale-110"
                  src={item?.thumbnail}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
