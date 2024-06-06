import React from "react";
import girl from "../../assets/girl.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: girl,
    title: "Upto 50% off on all Men's Wear. ",
    description:
      "lorem his life will forever be cahged dolor sit amet,consectetur adipscing elit,sed do eiusmed tempor incident ut labore et dalore manga aliqua",
  },
  // {
  //   id: 2,
  //   img: girl,
  //   title: "New Collection for Women",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // },
];
export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const handleOrderNowClick = () => {
    alert("Ordering not available yet");
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <div>
          {ImageList.map((data) => (
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 ">
                <h1 
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  {data.title}
                </h1>
                <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100" 
                className="text-sm">{data.description}</p>
                <div>
                  <button
                    onClick={handleOrderNowClick}
                    className="  p-2 bg-primary inline-block rounded-full hover:scale-105 duration-200 text-white py-1/2 px-2"
                  >
                    Order now
                  </button>
                </div>
              </div>
              {/*Image section */}
              <div className="order-1 sm:order-2">
                <div
                data-aos="zoom-in"
                data-aos-once="true" 
                className="relative z-10 ">
                  <img
                    src={data.img}
                    alt="girl"
                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-125 object-contain  mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
