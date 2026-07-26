import React from "react";
import type { bannerSwiper } from "../Services/APIClient";
import useBannerSwiper from "../Hooks/useBannerSwiper";
import BrandSwiper from "./BrandSwiper";



interface TypeContextBannerSwiper{
    list:bannerSwiper[]|undefined,
    error:Error|null,
    isLoading:boolean
}

export const ContextBannerSwiper=React.createContext<TypeContextBannerSwiper|undefined>(undefined);

const Home = () => {

   const {data:list,error,isLoading}= useBannerSwiper();

  return (
    <div className="w-100 bg-info border border-danger">
     <ContextBannerSwiper.Provider value={{list,error,isLoading}}>
        <BrandSwiper />
     </ContextBannerSwiper.Provider>
    </div>
  );
};

export default Home;
