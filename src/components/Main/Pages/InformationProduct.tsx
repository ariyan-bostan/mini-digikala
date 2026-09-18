import React, { useContext, useState } from "react";
import { contextWidth } from "../../App";
import useProduct from "../../Hooks/useProduct";
import { useParams } from "react-router";
import useRunningOutIncredibleProducts from "../../Hooks/useRunningOutIncredibleProducts";

const InformationProduct = () => {
  const property = useContext(contextWidth)!;
  const paramURL = useParams();
  const { objectProduct:lists, error, isLoading } =paramURL.typeObject==="products"? useProduct(paramURL.title || ""): useRunningOutIncredibleProducts();
  let resault = lists?.products.find((item) => {
    if (item.title.includes(paramURL.titleProduct || "")) return item;
  });
  const [selectImg, setSelectImg] = useState(resault?.images.mainImg || "");

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
          className="w-75 h-75">
          {!selectImg ? (
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <p style={{fontWeight:"bolder"}} className=" m-0 p-0 text-danger">select product image</p>
            </div>
          ) : (
            <img className="w-100 h-100" src={selectImg} alt="" />
          )}
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
          <img
            onClick={() => setSelectImg(resault?.images.mainImg || "")}
            style={{ flexShrink: 0, borderRadius: "10px" }}
            className="h-100 w-25"
            src={resault?.images.mainImg}
            alt=""
          />
        </div>
      </div>
      <div
        style={{ borderRadius: "10px", overflow: "hidden" }}
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
            <div className="d-flex flex-row align-items-center">
              <label htmlFor="">برند : </label>
              <p className="m-0 p-0 me-2">{resault?.layer.brand}</p>
            </div>
          </div>

          <div
            className={[
              "w-100 border border-top",
              property.innerWidth < 850
                ? "d-flex flex-row-reverse justify-content-between align-items-center px-2"
                : "",
            ].join(" ")}>
            <div
              style={{ width: "10rem", height: "5rem" }}
              className=" d-flex flex-column gap-1">
              <div className="h-50  d-flex flex-row align-items-center gap-2 justify-content-center">
                <div
                  style={{
                    width: "3rem",
                    height: "2rem",
                    borderRadius: "50px",
                  }}
                  className="bg-danger d-flex flex-row justify-content-center align-items-center">
                  {resault?.price.percent}%
                </div>
                <div>
                  <p
                    style={{
                      textDecoration: "line-through",
                      color: "#bdbdbdc7",
                    }}
                    className="m-0 p-0">
                    {resault?.price.rrp_price}
                  </p>
                </div>
              </div>
              <div className="h-50 w-100  d-flex flex-row justify-content-center align-items-center">
                <p className={["m-0 p-0", "finalPriceIcredibleList"].join(" ")}>
                  {resault?.price.selling_price + " "} تومان
                </p>
              </div>
            </div>
            <button
              style={{ height: "2rem", width: "11rem" }}
              className="btn btn-danger p-0">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationProduct;
