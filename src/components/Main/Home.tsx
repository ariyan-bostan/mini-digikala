import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import { contextWidth } from "../App";
import useBannerSwiper from "../Hooks/useBannerSwiper";
import useGetNameListProduct from "../Hooks/useGetNameListProduct";
import type { bannerSwiper } from "../Services/Intefaces";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import BoxOrderProduct from "./BoxOrderedProducts";
import BrandSwiper from "./BrandSwiper";
import CategoryHome from "./CategoryHome";
import ContainerProductList from "./ContainerProductList";
import IncredibleList from "./IncredibleList";
import IncredibleUrgent from "./IncredibleUrgent";
import PopularBrand from "./PopularBrand";
import ProductList from "./ProductList";
import Titles from "./Titles";
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
  const {
    data: listName,
    error: errorList,
    isLoading: loadList,
  } = useGetNameListProduct();
  const property = useContext(contextWidth)!;
  return (
    <div className={["w-100"].join(" ")}>
      <Toaster position="top-center" reverseOrder={false} />{" "}
      <ContextBannerSwiper.Provider value={{ list, error, isLoading }}>
        <BrandSwiper />
      </ContextBannerSwiper.Provider>
      <div
        className={[
          property.innerWidth > 850
            ? "d-flex flex-column align-items-center"
            : "",
        ].join(" ")}>
        <div style={property.innerWidth > 850 ? { width: "85%" } : {}}>
          <Titles />
          <IncredibleList numberList={1} />
          <Banner number={1} />
          <IncredibleUrgent />
          <Banner number={2} />
          <IncredibleList numberList={2} />
          <CategoryHome />
          <Banner2 number={3} />
          <PopularBrand />
          <Banner2 number={4} />

          <ContainerProductList>
            {listName?.map((item, index) => (
              <ProductList key={index} title={item.title} />
            ))}
            {/* <ProductList title="گوشی موبایل" /> */}
            {/* <ProductList title="کیس" /> */}
            {/* <ProductList title="کیبرد" /> */}
            <BoxOrderProduct title="پرفروش ترینپرفروش‌ترین کالاها" />
            <BoxOrderProduct title="داغ‌ترین چند ساعت گذشته" />
          </ContainerProductList>
        </div>
      </div>
    </div>
  );
};

export default Home;
