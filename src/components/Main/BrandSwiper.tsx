import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "../Styles/Main/Swiper.css";
import styleSwiper from "../Styles/Main/Swiper.module.css";

import {
  Autoplay,
  EffectCoverflow,
  FreeMode,
  Pagination,
} from "swiper/modules";
import useBannerSwiper from "../Hooks/useBannerSwiper";
import type { bannerSwiper } from "../Services/APIClient";
import { ContextBannerSwiper } from "./Home";

const BrandSwiper = () => {
  const contextSwiper = useContext(ContextBannerSwiper)!;

  return (
    <div className={[styleSwiper.container].join(" ")}>
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
        autoplay={{
          delay: 4500, // هر 3 ثانیه
          disableOnInteraction: false, // بعد از کلیک یا لمس هم ادامه بده
        }}
        loop={true}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {contextSwiper.list?.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.imgURL} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
