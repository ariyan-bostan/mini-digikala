import React, { useContext } from "react";
import { useParams } from "react-router";
import useProduct from "../../Hooks/useProduct";
import styleAmz from "../../Styles/Main/AmazingBox.module.css";

import { contextWidth } from "../../App";

const Products = () => {
  const parameters = useParams();
  const {objectProduct,error,isLoading}=useProduct(parameters.title||"");
  const property=useContext(contextWidth)!;

  console.log("kk",objectProduct?.title);
  
  return (
    <div className="w-100">
      <div
        style={{
          height: "10rem",
          background:
            "url(https://www.digikala.com/statics/img/svg/typography/bestSellingPattern.svg)",
          backgroundSize: "100% 100%",
        }}
        className="w-100 d-flex flex-row justify-content-center align-items-center">
        <h1>{parameters.title}</h1>
      </div>
      <div
        style={{ flexWrap: "wrap" }}
        className={[
          "px-3",
          property.innerWidth < 850
            ? "d-flex flex-column gap-1"
            : "d-flex flex-row gap-2 justify-content-center mt-4",
        ].join(" ")}>
        {objectProduct?.product?.map((item, index) => (
          <>
            {property.innerWidth < 850 ? (
              <div
                style={{
                  height: "10rem",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                key={index}
                className={[
                  property.innerWidth < 850
                    ? "d-flex border flex-row gap-1  w-100"
                    : "bg-info",
                ].join(" ")}>
                <div
                  style={{ width: "30%", borderRadius: "5px" }}
                  className="h-100">
                  <img
                    className="w-100 h-100"
                    src={item.images.mainImg}
                    alt=""
                  />
                </div>
                <div
                  style={{ width: "70%", borderRadius: "5px" }}
                  className="h-100 d-flex flex-column">
                  <div className="h-50  p-2">
                    <p style={{ fontSize: ".8rem" }} className="p-0 m-0">
                      {item.title.substring(0, 50)}...
                    </p>
                  </div>
                  <div className="h-50 d-flex flex-row">
                    <div className="w-50  pe-2">
                      <div
                        style={{ width: "2rem", borderRadius: "10px" }}
                        className="bg-danger">
                        10%
                      </div>
                    </div>
                    <div className="w-50 d-flex flex-row justify-content-end ps-1">
                      <div className="w-75 h-100  d-flex flex-column align-items-end">
                        {item.price.rrp_price + " "}تومان
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={[styleAmz.boxProduct, "border pb-2"].join(" ")}>
                <div className={[styleAmz.posterPro].join(" ")}>
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={item.images.mainImg}
                    alt=""
                  />
                </div>
                <div
                  className={[
                    styleAmz.titlePro,
                    "d-flex justify-content-center",
                  ].join(" ")}>
                  <p
                    style={{
                      width: "100%",
                      fontSize: ".7rem",
                      lineHeight: "1.2rem",
                    }}
                    className="p-0 m-1">
                    {item.title.substring(0, 50)}...
                  </p>
                </div>
                <div
                  className={[
                    styleAmz.boxBP,
                    "d-flex flex-row pe-3 align-items-center",
                  ].join(" ")}>
                  <div
                    style={{ borderRadius: "5px" }}
                    className="w-25 h-50 bg-danger ms-3 d-flex flex-row justify-content-center">
                    <p
                      style={{ fontSize: ".9rem", color: "white" }}
                      className="m-0">
                      ⁒10
                    </p>
                  </div>
                  <div
                    style={{ color: "gray", textDecoration: "line-through" }}>
                    {item.price.rrp_price}
                  </div>
                </div>
                <div
                  className={[
                    styleAmz.boxFinalPrice,
                    "d-flex flex-row justify-content-center align-items-center",
                  ].join(" ")}>
                  <p className="finalPriceIcredibleList m-0 p-0">
                    {item.price.rrp_price -
                      (10 / 100) * item.price.rrp_price +
                      " "}
                    تومان
                  </p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default Products;
