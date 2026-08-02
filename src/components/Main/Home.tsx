import React, { useContext } from "react";
import type { bannerSwiper } from "../Services/APIClient";
import useBannerSwiper from "../Hooks/useBannerSwiper";
import BrandSwiper from "./BrandSwiper";
import Titles from "./Titles";

import styleAmz from "../Styles/Main/AmazingBox.module.css";
import IncredibleOffers from "./Pages/IncredibleOffers";
import IncredibleList from "./IncredibleList";
import { contextWidth } from "../App";
import Banner from "./Banner";

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
      <IncredibleList numberList={1} />
      <Banner number={1} />
      <div style={{ width: "100%", height: "25rem" }} className="bg-info"></div>
      <Banner number={2} />
      <IncredibleList numberList={2} />
    </div>
  );
};

export default Home;
