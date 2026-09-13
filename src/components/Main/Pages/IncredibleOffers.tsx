import React, { useContext } from "react";
// import style from "../../Styles/Main/IncredibleOffer.module.css"
import BackgroundIncredible from "./Incredible/BackgroundIncredible";
import CategoryIncredible from "./Incredible/CategoryIncredible";
import { FaArrowLeft } from "react-icons/fa";
import { contextWidth } from "../../App";
import BannerIncredible1 from "./Incredible/BannerIncredible";
import BannerIncredible2 from "./Incredible/BannerIncredible2";
import styleHeader from "../../Styles/Header/header.module.css";
import useRunningOutIncredibleProducts from "../../Hooks/useRunningOutIncredibleProducts";
import styleAmz from "../../Styles/Main/AmazingBox.module.css";
import Product from "../IncredibleComponent/Product";
import FormFilterIncredible from "./Incredible/FormFilterIncredible";
import BoxProductIncredible from "./Incredible/BoxProductIncredible";

const IncredibleOffers = () => {
  const property = useContext(contextWidth)!;
  const { data: list, error, isLoading } = useRunningOutIncredibleProducts();
  console.log(list);

  return (
    <div className="w-100">
      <BackgroundIncredible />
      <CategoryIncredible />
      <div
        style={{
          width: "100%",
          height: property.innerWidth < 850 ? "30rem" : "15rem",
        }}
        className={[
          "bannerIncredible  pt-4 px-2 d-flex flex-column gap-1",
        ].join(" ")}
      >
        <BannerIncredible1 />
        <BannerIncredible2 />
      </div>

      <div
        className={[
          property.innerWidth < 850
            ? "mt-4 d-flex flex-column gap-1"
            : "mt-4 d-flex flex-row gap-1",
        ].join(" ")}
      >
        <FormFilterIncredible />

        <BoxProductIncredible />
      </div>
    </div>
  );
};

export default IncredibleOffers;
{
}
{
  /* </div> */
}
