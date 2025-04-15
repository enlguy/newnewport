"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../style.css";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <p className="text-4xl text-center font-bold mt-5">Projects</p>
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
          <div
            style={{ position: "relative", height: "500px", width: "500px" }}
          >
            <Link href="https://www.potentiam.co.uk">
              <Image src="/crm.png" alt="nature1" fill={true} />
            </Link>
            <p className="absolute bottom-0 text-white">
              Large data management and optimization project for HubSpot and web
              integrations
            </p>
          </div>
          <p className="text-center font-bold">
            Optimizing HubSpot for a Global Business
          </p>
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
