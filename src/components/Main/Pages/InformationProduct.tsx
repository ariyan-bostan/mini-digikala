import React, { useContext, useEffect, useState } from "react";
import { contextWidth } from "../../App";
import useProduct from "../../Hooks/useProduct";
import { useParams } from "react-router";
import useRunningOutIncredibleProducts from "../../Hooks/useRunningOutIncredibleProducts";
import ImagesProduct from "./InformationProductComponents/ImagesProduct";
import TitleProduct from "./InformationProductComponents/TitleProduct";
import CategoryProduct from "./InformationProductComponents/CategoryProduct";
import PriceProduct from "./InformationProductComponents/PriceProduct";
import style from "../../Styles/Layout.module.css";
import UserNormal from "./Users/UserNormal";
import { Toaster } from "react-hot-toast";


const InformationProduct = () => {
  const property = useContext(contextWidth)!;
  const paramURL = useParams();
  const { objectProduct:lists, error, isLoading } =paramURL.typeObject==="products"? useProduct(paramURL.title || ""): useRunningOutIncredibleProducts();
  let resault =lists&& lists.products.find((item) => {
    if (item.title.includes(paramURL.titleProduct || "")) return item;
  });
  const [selectImg, setSelectImg] = useState(resault?.images.mainImg || "");
  useEffect(() => {
    document.querySelector(`.${style.containerMainFooter}`)?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
   

  return (
    <div
      className={[
        "w-100",
        property.innerWidth < 850
          ? "d-flex flex-column gap-2"
          : "d-flex flex-row",
      ].join(" ")}>
      <Toaster position="top-center" reverseOrder={false} />{" "}
      <ImagesProduct
        resault={resault}
        selectImg={selectImg}
        setSelectImg={setSelectImg}
      />
      <div
        style={{ borderRadius: "10px", overflow: "hidden" }}
        className={[
          "border",
          property.innerWidth < 850 ? "d-flex flex-column gap-1" : "w-75",
        ].join(" ")}>
        <TitleProduct>{resault?.title}</TitleProduct>

        <div
          className={[
            "w-100",
            property.innerWidth < 850
              ? "d-flex flex-column gap-1"
              : "d-flex flex-row",
          ].join(" ")}>
          <CategoryProduct resault={resault} />

          <PriceProduct resault={resault} />
        </div>
      </div>
    </div>
  );
};

export default InformationProduct;
