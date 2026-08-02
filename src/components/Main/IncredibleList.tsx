import React, { useContext } from "react";
import styleAmz from "../Styles/Main/AmazingBox.module.css";
import useRunningOutIncredibleProducts from "../Hooks/useRunningOutIncredibleProducts";
import { FiArrowLeftCircle } from "react-icons/fi";
import Poster from "./IncredibleComponent/Poster";
import Timer from "./IncredibleComponent/Timer";
import Product from "./IncredibleComponent/Product";
import { contextWidth } from "../App";

interface Props{
    numberList:number
}

const IncredibleList = ({numberList}:Props) => {
  const property = useContext(contextWidth)!;

  const { data: list, error, isLoading } = useRunningOutIncredibleProducts();
  return (
    <div
      style={{
        background:(numberList===1)?
          "linear-gradient(225deg, rgb(210, 44, 78) 0%, rgb(238, 56, 78) 100%)"
          :
          "linear-gradient(225deg, rgb(107, 185, 39) 0%, rgb(157, 196, 77) 100%)",
          borderRadius:property.innerWidth>850?"20px":""
      }}
      className={[
        styleAmz.containerAmz,
        property?.innerWidth < 850
          ? "d-flex flex-column pb-2"
          : "d-flex flex-row justify-context-center align-items-center",
      ].join(" ")}
    >
      <div
        className={
          property?.innerWidth < 850
            ? "h-25 d-flex flex-row justify-content-between"
            : "d-flex flex-column  align-items-center"
        }
      >
        <div
          style={property?.innerWidth < 850 ? { width: "30rem" } : {}}
          className={
            property?.innerWidth < 850
              ? " d-flex flew-row"
              : "d-flex flex-column"
          }
        >
          <div
            className={
              property?.innerWidth < 850
                ? "w-100 d-flex flew-row"
                : "w-auto h-auto d-flex flex-column"
            }
          >
            <Poster />
            <Timer />
          </div>
        </div>
        <div
          className={
            property?.innerWidth < 850
              ? "w-25 d-flex justify-content-center align-items-center"
              : "w-auto"
          }
        >
          <p>همه</p>
        </div>
      </div>
      <div
        className={[
          styleAmz.Products,
          "posters h-75 d-flex flex-row align-items-center gap-2 pe-2 ps-2",
        ].join(" ")}
      >
        {list?.products.map((item, index) => (
          <Product item={item} index={index} />
        ))}

        <div
          className={[
            styleAmz.boxProduct,
            "d-flex flex-column align-items-center justify-content-center",
          ].join(" ")}
        >
          <FiArrowLeftCircle fontSize={"4rem"} />
          <p className=" mt-1 p-0">مشاهده همه</p>
        </div>
      </div>
    </div>
  );
};

export default IncredibleList;
