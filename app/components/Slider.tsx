import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slideData = [
  {
    imgSrc: "",
    title: "",
    description: "",
    categories: [""],
  },
  {
    imgSrc: "",
    title: "",
    description: "",
    categories: [""],
  },
  {
    imgSrc: "",
    title: "",
    description: "",
    categories: [""],
  },
  {
    imgSrc: "",
    title: "",
    description: "",
    categories: [""],
  },
];

export const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        grabCursor
        initialSlide={2}
        centeredSlides
        slidesPerView="auto"
        speed={800}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.imgSrc} alt={slide.title} />
            <div className="">
              <h1>{slide.title}</h1>
            </div>
            <div className="content">
              <div className="text-box">
                <p>{slide.description}</p>
              </div>
              <div className="footer">
                <div className="category">
                  {slide.categories.map((category, idx) => (
                    <span key={idx}>{category}</span>
                  ))}
                </div>
                <button>
                  <span className="label">More..</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
