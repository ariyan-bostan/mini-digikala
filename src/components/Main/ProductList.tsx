import React, { useContext, useEffect } from "react";
import useProduct from "../Hooks/useProduct";
import style from "../Styles/Main/ProductList.module.css";
import { contextWidth } from "../App";
import PercentPrice from "./PercentPrice";
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router";

interface Props {
  title: string;
}

const ProductList = ({ title }: Props) => {
  const property = useContext(contextWidth)!;
  const { objectProduct, error, isLoading } = useProduct(title);
  
  return (
    <div
      className={[
        style.container,
        property?.innerWidth > 850 && "border rounded-4",
        "w-100  mt-2",
      ].join(" ")}>
      <div
        className={[
          style.boxTitle,
          "d-flex flex-row justify-content-between align-items-center p-3",
        ].join(" ")}>
        <h3>{title}</h3>

        <Link className="linkTo" to={`/products/${title}`}>
          مشاهده همه
        </Link>
      </div>
      <div
        className={[
          style.containerProduct,
          "d-flex flex-row gap-2 align-items-center p-2",
        ].join(" ")}>
        {objectProduct?.products.map((item, index) => (
          <Link
            to={`/products/informationProduct/products/${title}/${item.title}`}
            key={index}
            className={[
              "linkTo",
              style.product,
              "d-flex flex-column gap-2 border p-1",
            ].join(" ")}>
            <img
              className={[style.imgProduct, "w-100 object-fit-cover"].join(" ")}
              src={item.images.mainImg}
              alt=""
            />

            <div className={[style.containerTitle].join(" ")}>
              <p className={[style.title].join(" ")}>
                {item.title.length > 50
                  ? item.title.substring(0, 50) + "..."
                  : item.title}
              </p>
            </div>

            <div
              className={[
                style.containerPercentPrice,
                "d-flex flex-row justify-content-end",
              ].join(" ")}>
              {item.price.percent > 0 && <PercentPrice itemProduct={item} />}
            </div>
            <div
              style={{ height: "10%", overflow: "hidden" }}
              className="d-flex flex-row justify-content-center">
              <p className="fw-bold">{item.price.selling_price}تومان</p>
            </div>
          </Link>
        ))}
        <div
          className={[
            style.product,
            "d-flex flex-column gap-2  align-items-center justify-content-center",
          ].join(" ")}>
          <FiArrowLeftCircle fontSize={"4rem"} />
          <Link className="linkTo" to={`/products/${title}`}>
            مشاهده همه
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
