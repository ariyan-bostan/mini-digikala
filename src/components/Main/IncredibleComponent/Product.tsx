import React from "react";
import styleAmz from "../../Styles/Main/AmazingBox.module.css";
import type {  ProductRunningOut } from "../../Services/Intefaces";
import { Link } from "react-router";
interface Props {
  index: number;
  item: ProductRunningOut  ;
}
const Product = ({ item, index }: Props) => {
  return (
    <Link
      to={`/products/incredible-Offers/incredible-Offers/${item.layer.category}/${item.title}`}
      key={index}
      className={["linkTo", styleAmz.boxProduct, "border pb-2"].join(" ")}>
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
        )}>
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
          <p style={{ fontSize: ".9rem", color: "white" }} className="m-0">
            ⁒10
          </p>
        </div>
        <div style={{ color: "gray", textDecoration: "line-through" }}>
          {item.price.rrp_price}
        </div>
      </div>
      <div
        className={[
          styleAmz.boxFinalPrice,
          "d-flex flex-row justify-content-center align-items-center",
        ].join(" ")}>
        <p className="finalPriceIcredibleList m-0 p-0">
          {item.price.rrp_price - (10 / 100) * item.price.rrp_price + " "}تومان
        </p>
      </div>
    </Link>
  );
};

export default Product;
