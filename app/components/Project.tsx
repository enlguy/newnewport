import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";
import Image from "next/image";

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: false,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 2.5,
    slideShadows: true,
  },
});

const Project = () => {
  return (
    <div className="h-screen bg-[#041464] flex justify-center items-center">
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="content swiper-slide">
            <Image src="/menu.png" alt="" width={50} height={50} />
            <div className="flex justify-center items-center flex-col">
              <h3>Photography</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                accusamus ratione nesciunt atque, dolores vel culpa debitis
                officia expedita unde?
              </p>
              <button className="btn">Read more</button>
            </div>
          </div>
          <div className="content swiper-slide">
            <Image src="/hubspot.png" alt="" width={50} height={50} />
            <div className="flex justify-center items-center flex-col">
              <h3>Photography</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                accusamus ratione nesciunt atque, dolores vel culpa debitis
                officia expedita unde?
              </p>
              <button className="btn">Read more</button>
            </div>
          </div>
          <div className="content swiper-slide">
            <Image src="/more.png" alt="" width={50} height={50} />
            <div className="flex justify-center items-center flex-col">
              <h3>Photography</h3>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                accusamus ratione nesciunt atque, dolores vel culpa debitis
                officia expedita unde?
              </p>
              <button className="btn">Read more</button>
            </div>
          </div>
          <div className="content swiper-slide">
            <Image src="/menu.png" alt="" width={50} height={50} />
            <div className="text-content">
              <h3>Photography</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                accusamus ratione nesciunt atque, dolores vel culpa debitis
                officia expedita unde?
              </p>
              <button className="btn">Read more</button>
            </div>
          </div>
          <div className="content swiper-slide">
            <Image src="/close.png" alt="" width={150} height={150} />
            <div className="text-content">
              <h3>Photography</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                accusamus ratione nesciunt atque, dolores vel culpa debitis
                officia expedita unde?
              </p>
              <button className="btn">Read more</button>
            </div>
          </div>
          <div className="content swiper-slide">
            <Image src="/menu.png" alt="" width={250} height={250} />
            <div className="text-content">
              <h3>Photography</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                accusamus ratione nesciunt atque, dolores vel culpa debitis
                officia expedita unde?
              </p>
              <button className="btn">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
