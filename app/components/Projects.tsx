"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";

const Projects = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src="/hubspot.png" alt="nature1" width={400} height={400} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/menu.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/close.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/hubspot.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/close.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/menu.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Projects;
