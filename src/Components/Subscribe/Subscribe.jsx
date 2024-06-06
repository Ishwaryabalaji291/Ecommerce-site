import React from "react";
import Banner from "../Banner/Banner";
import orangeBgImage from "../../assets/Orangebg.jpg";

const orangeBgStyle = {
  backgroundImage: `url(${orangeBgImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

export default function Subscribe() {
  return (
    <div>
      <div
        data-aos="zoom-in"
        className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
        style={orangeBgStyle}
      >
        <div className="container backdrop-blur-sm py-10">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
              Get Notified About New Products
            </h1>
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Your email"
              className="w-full p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
