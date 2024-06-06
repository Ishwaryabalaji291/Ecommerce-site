import React from "react";
import Img1 from "../../assets/Img1.jpg";
import Img2 from "../../assets/Img2.jpg";
import Img3 from "../../assets/Img3.jpg";
import Img4 from "../../assets/Img4.jpg";
import Img5 from "../../assets/Img5.jpg";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const productsData = [
  {
    id: 1,
    img: Img1,
    title: "women ethnic",
    rating: 4.9,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "women Western",
    rating: 4.8,
    author: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "goggles",
    rating: 4.5,
    author: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printd T-shirt",
    rating: 4.7,
    author: "yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashin T-shirt",
    rating: 4.7,
    author: "pink",
    aosDelay: "800",
  },
];

export default function Products() {
  const handleViewAllButtonClick = () => {
    alert("Here is latest collections");
  };
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top selling Produts for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit and consectetur, adipisicing elit.sit
            asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {productsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt="img"
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div>
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button
              onClick={handleViewAllButtonClick}
              className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md"
            >
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
