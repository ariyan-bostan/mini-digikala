import React, { useContext, useState } from "react";
import { contextWidth } from "../../App";
import useProduct from "../../Hooks/useProduct";
import { useParams } from "react-router";

const InformationProduct = () => {
  const property = useContext(contextWidth)!;
  const paramURL = useParams();
  const { objectProduct, error, isLoading } = useProduct(paramURL.title || "");
  let resault = objectProduct?.product.find((item) => {
    if (item.title.includes(paramURL.titleProduct||"")) return item;
  });
  const [selectImg,setSelectImg]=useState((resault?.images.mainImg)||"");
  
  console.log(resault);
  

  return (
    <div
      className={[
        "w-100",
        property.innerWidth < 850 ? "d-flex flex-column gap-2" : "",
      ].join(" ")}>
      <div
        style={{ height: "20rem" }}
        className={[
          "",
          property.innerWidth < 850
            ? "d-flex flex-column align-items-center py-2 gap-2"
            : "",
        ].join(" ")}>
        <div
          style={{ borderRadius: "10px", overflow: "hidden" }}
          className="w-75 h-75 bg-warning">
          <img className="w-100 h-100" src={selectImg} alt="" />
        </div>
        <div
          style={{ overflowX: "scroll", scrollbarWidth: "none" }}
          className="w-75 gap-3 h-25  d-flex flex-row">
          {resault?.images.listImg.map((item, index) => (
            <img
              onClick={() => setSelectImg(item)}
              key={index}
              style={{ flexShrink: 0, borderRadius: "10px" }}
              className="h-100 w-25"
              src={item}
              alt=""
            />
          ))}
        </div>
      </div>
      <div
        style={{borderRadius:"10px",overflow:"hidden"}}
        className={[
          "border",
          property.innerWidth < 850 ? "d-flex flex-column gap-1" : "",
        ].join(" ")}>
        <div className="w-100 pe-2 py-2 ">
          <p className="titleInformationProduct">{resault?.title}</p>
        </div>
        <div
          className={[
            "w-100",
            property.innerWidth < 850 ? "d-flex flex-column gap-1" : "",
          ].join(" ")}>
            
          <div className="w-100 pe-2">
            <div className="d-flex flex-row">
              <label htmlFor="">دسته بندی : </label>
              <p className="me-2">{resault?.layer.category}</p>
            </div>
            <div  className="d-flex flex-row align-items-center">
              <label htmlFor="">برند : </label>
              <p className="m-0 p-0 me-2">{resault?.layer.brand}</p>
            </div>
          </div>
          
          <div
            className={[
              "w-100 bg-warning",
              property.innerWidth < 850
                ? "d-flex flex-row-reverse justify-content-between px-2"
                : "",
            ].join(" ")}>
            <div>price</div>
            <button>فزودن به سبد خرید</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationProduct;
