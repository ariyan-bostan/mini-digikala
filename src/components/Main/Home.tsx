import React, { useContext } from "react";
import type { bannerSwiper } from "../Services/APIClient";
import useBannerSwiper from "../Hooks/useBannerSwiper";
import BrandSwiper from "./BrandSwiper";
import Titles from "./Titles";
import styleCategri from "../Styles/Main/CategoriHome.module.css"
import styleAmz from "../Styles/Main/AmazingBox.module.css";
import IncredibleOffers from "./Pages/IncredibleOffers";
import IncredibleList from "./IncredibleList";
import { contextWidth } from "../App";
import Banner from "./Banner";
import CategoryHome from "./CategoryHome";

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
  const property = useContext(contextWidth)!;
  return (
    <div className={["w-100 border border-danger"].join(" ")}>
      <ContextBannerSwiper.Provider value={{ list, error, isLoading }}>
        <BrandSwiper />
      </ContextBannerSwiper.Provider>
      <div className={[property.innerWidth>850?"d-flex flex-column align-items-center":""].join(" ")}>
        <div  style={property.innerWidth>850?{ width: "85%" }:{}}>
          <Titles />
          <IncredibleList numberList={1} />
          <Banner number={1} />
          <div
            style={{ width: "100%", height: "25rem",borderRadius:property.innerWidth>850?"20px":"" }}
            className="bg-info"
          ></div>
          <Banner number={2} />
          <IncredibleList numberList={2} />
          <CategoryHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
