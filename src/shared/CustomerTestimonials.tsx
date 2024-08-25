import { Avatar, Carousel, Col, Image, Row } from "antd";
import { testimonialData } from "./fakeData";
import React from "react";

const CustomerTestimonials = () => {
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "40px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    width: "100%",
  };

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className="dark:bg-slate-800">
      <div className="container mx-auto py-16 flex flex-col md:flex-row gap-4">
        <div className="w-full  md:w-[50%]  flex justify-center items-center p-4 md:p-6">
          <div>
            <div>
              <p className="uppercase font-medium mb-6 leading-3 text-secondary-color ">
                Testimonials
              </p>
              <h2 className="text-2xl md:text-3xl leading-8  mb-8 text-veryDarkViolet dark:text-cyanLight">
                Once you play here, there's no going back
              </h2>
            </div>
            {/* <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {testimonialData?.slice(0, 4)?.map((item, indx) => (
                <figure key={indx} className="">
                  <Avatar size={64} src={item?.photo} />
                  <blockquote className="text-lg mt-2 mb-6 leading-6 text-third-color dark:text-slate-500">
                    {item?.comment}
                  </blockquote>
                  <p className="text-fourth-color">&mdash; {item?.name}</p>
                </figure>
              ))}
            </div> */}
            <div className="bg-darkViolet h-[300px] w-[600px] p-8  rounded-md">
              <Carousel autoplay arrows dotPosition="bottom">
                {testimonialData?.slice(0, 4)?.map((item, indx) => (
                  <figure
                    key={indx}
                    style={{ lineHeight: "300px" }}
                    className="px-12 h-[256px]"
                  >
                    <Avatar size={64} src={item?.photo} />
                    <blockquote className="text-lg   text-white ">
                      {item?.comment}
                    </blockquote>
                    <p className="text-fourth-color my-2">
                      &mdash; {item?.name}
                    </p>
                  </figure>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <div className="grid grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 md:gap-6 md:p-6 overflow-hidden">
            {testimonialData?.slice(0, 12)?.map((item, index) => (
              <div key={index} className="block w-full  overflow-hidden">
                {/* <img
                  className="w-full h-24 md:h-40 transition-all ease-in-out duration-500  hover:scale-110"
                  src={item?.thumbnail}
                  alt=""
                /> */}
                <Image
                  className="w-full h-24 md:h-40 transition-all ease-in-out duration-500  hover:scale-110"
                  style={{
                    width: "100%",
                    height: "150px",
                    transition: "all 0.5s ease-in-out",
                    transform: "scale(1.1)",
                  }}
                  src={item?.thumbnail}
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
