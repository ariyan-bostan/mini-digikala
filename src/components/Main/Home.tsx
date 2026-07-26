import React from "react";
import type { bannerSwiper } from "../Services/APIClient";
import useBannerSwiper from "../Hooks/useBannerSwiper";
import BrandSwiper from "./BrandSwiper";
import Titles from "./Titles";
import styleAmz from "../Styles/Main/AmazingBox.module.css"

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
      <div className={[styleAmz.containerAmz].join(" ")}>
        <div>text</div>
        <div>poster</div>
      </div>
    </div>
  );
};

export default Home;
