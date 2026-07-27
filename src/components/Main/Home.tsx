import React from "react";
import type { bannerSwiper } from "../Services/APIClient";
import useBannerSwiper from "../Hooks/useBannerSwiper";
import BrandSwiper from "./BrandSwiper";
import Titles from "./Titles";
import styleAmz from "../Styles/Main/AmazingBox.module.css";

interface TypeContextBannerSwiper {
  list: bannerSwiper[] | undefined;
  error: Error | null;
  isLoading: boolean;
}

export const ContextBannerSwiper = React.createContext<
  TypeContextBannerSwiper | undefined
>(undefined);

const Home = () => {
  const { data: list, error, isLoading } = useBannerSwiper();

  return (
    <div className="w-100 border border-danger">
      <ContextBannerSwiper.Provider value={{ list, error, isLoading }}>
        <BrandSwiper />
      </ContextBannerSwiper.Provider>

      <Titles />
      <div className={[styleAmz.containerAmz,"d-flex flex-column"].join(" ")}>
        <div className="title border h-25 d-flex flex-row">
            <div className="w-75 border border-info d-flex flew-row">
                <div className="w-50 d-flex align-items-center">
                    <img style={{width:"2.5rem",height:"auto"}} className="object-fit-contain ms-2" src="https://dkstatics-public.digikala.com/digikala-static/0d072059918d0c22b88320554ce4b3e07d0472f2_1746354551.svg" alt="" />
                    <img style={{width:"7rem",height:"auto"}} className="object-fit-contain" src="https://dkstatics-public.digikala.com/digikala-static/e0c05f5d67bf71be7605ec22cb3ee6be57d43e94_1746354561.svg" alt="" />
                </div>
                <div  className="clock d-flex align-items-center gap-2">
                    <div className={[styleAmz.boxClock,"d-flex align-items-center justify-content-center"].join(" ")}>00</div>
                    <div className={[styleAmz.boxClock,"d-flex align-items-center justify-content-center"].join(" ")}>00</div>
                    <div className={[styleAmz.boxClock,"d-flex align-items-center justify-content-center"].join(" ")}>00</div>
                </div>
            </div>
            <div className="w-25 border border-primary d-flex justify-content-center align-items-center">
                <p>همه</p>
            </div>
        </div>
        <div className="posters border h-75">2</div>
      </div>
    </div>
  );
};

export default Home;
