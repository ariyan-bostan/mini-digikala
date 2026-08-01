import React from "react";
import styleAmz from "../../Styles/Main/AmazingBox.module.css";
import type { ProductRunningOut } from "../../Services/APIClient";
interface Props {
  index: number;
  item: ProductRunningOut;
}
const Product = ({ item, index }: Props) => {
  return (
    <div key={index} className={[styleAmz.boxProduct].join(" ")}>
      <div className={[styleAmz.posterPro].join(" ")}>
        <img
          className="w-100 h-100 object-fit-cover"
          src={item.imgWEBP}
          alt=""
        />
      </div>
      <div
        className={[styleAmz.titlePro, "d-flex justify-content-center"].join(
          " ",
        )}
      >
        <p
          style={{
            width: "100%",
            fontSize: ".7rem",
            lineHeight: "1.2rem",
          }}
          className="p-0 m-1"
        >
          {item.title.substring(0, 50)}...
        </p>
      </div>
      <div
        className={[
          styleAmz.boxBP,
          "d-flex flex-row pe-3 align-items-center",
        ].join(" ")}
      >
        <div
          style={{ borderRadius: "5px" }}
          className="w-25 h-50 bg-danger ms-3 d-flex flex-row justify-content-center"
        >
          <p style={{ fontSize: ".9rem", color: "white" }} className="">
            ⁒10
          </p>
        </div>
        <div style={{ color: "white", textDecoration: "line-through" }}>
          {item.price.rrp_price}
        </div>
      </div>
      <div
        className={[
          styleAmz.boxFinalPrice,
          "d-flex flex-row justify-content-center align-items-center",
        ].join(" ")}
      >
        <p className="m-0 p-0 text-bold">
          {item.price.rrp_price - (10 / 100) * item.price.rrp_price}
        </p>
      </div>
    </div>
  );
};

export default Product;
