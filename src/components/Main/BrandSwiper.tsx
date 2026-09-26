import { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import {
    Autoplay,
    EffectCoverflow
} from "swiper/modules";
import style1 from "../Styles/Main/SwiperBrand.module.css";
import { ContextBannerSwiper } from "./Home";

const BrandSwiper = () => {
  const contextSwiper = useContext(ContextBannerSwiper)!;

  return (
    <div className={[style1.container,"m-1"].join(" ")}>
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
        modules={[EffectCoverflow, Autoplay]}
        className={[style1.swiper,"mySwiper"].join(" ")}
      >
        {contextSwiper.list?.map((item, index) => (
          <SwiperSlide className={[style1.swiper_slide].join(" ")} key={index}>
            <img className={style1.imgSwiper} src={item.imgURL} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSwiper;
