import { useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useParams } from "react-router";
import { contextWidth } from "../../App";
import useGetProduct from "../../Hooks/useGetProduct";
import useRunningOutIncredibleProducts1 from "../../Hooks/useRunningOutIncredibleProducts1";
import style from "../../Styles/Layout.module.css";
import CategoryProduct from "./InformationProductComponents/CategoryProduct";
import ImagesProduct from "./InformationProductComponents/ImagesProduct";
import PriceProduct from "./InformationProductComponents/PriceProduct";
import TitleProduct from "./InformationProductComponents/TitleProduct";


const InformationProduct = () => {
  const property = useContext(contextWidth)!;
  const paramURL = useParams();
  const {
    data: lists,
    error,
    isLoading,
  } = paramURL.typeObject === "products"
    ? useGetProduct(paramURL.title || "")
    : useRunningOutIncredibleProducts1();
  let resault =lists&& lists.find((item) => {
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
