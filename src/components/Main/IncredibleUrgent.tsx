import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { contextWidth } from "../App";
import useCategoriHome from "../Hooks/useCategoriHome";
import useListCategories from "../Hooks/useListCategories";
import useRunningOutIncredibleProducts from "../Hooks/useRunningOutIncredibleProducts";
import Product from "./IncredibleComponent/Product";
import type { ProductRunningOut } from "../Services/Intefaces";

const IncredibleUrgent = () => {
  const property = useContext(contextWidth)!;
  const { listCategori, errorCategori, isLoadingCategori } =
    useListCategories();
  const { objectProduct: list, error, isLoading } = useRunningOutIncredibleProducts();

  const [selectCategori, setSelectCategori] = useState("");
  let mainListProduct: ProductRunningOut[] | undefined = list?.products || [];
  list?.products;
  if (selectCategori !== "همه دسته‌بندی‌ها") {
    mainListProduct = list?.products.filter((item) => {
      if (item.layer.category.includes(selectCategori)) {
        return item;
      }
    });
  }
  return (
    <div
      style={{
        background:
          "linear-gradient(to left bottom, rgb(255, 249, 229), rgb(255, 249, 229))",
        width: "100%",
        height: "25rem",
        borderRadius: property.innerWidth > 850 ? "20px" : "",
      }}
      className=" d-flex flex-column gap-1">
      <div
        style={{ height: "5rem" }}
        className=" d-flex flex-row align-items-center justify-content-between px-2">
        <p className="m-0">
          <span style={{ fontWeight: "bolder" }} className="px-2 bg-warning">
            سه ساعته
          </span>{" "}
          تحویل بگیر
        </p>
        <Link className="linkTo" to={"/incredible-Offers"}>
          همه
        </Link>
      </div>
      <div
        style={{ height: "5rem", overflow: "scroll", scrollbarWidth: "none" }}
        className=" d-flex flex-row px-1 align-items-center gap-2">
        {listCategori?.map((item, index) => (
          <button
            style={{ width: "10rem", flexShrink: 0, fontSize: ".8rem" }}
            className="btn border"
            onClick={() => setSelectCategori(item.title)}>
            {item.title}
          </button>
        ))}
      </div>
      <div
        style={{ overflow: "scroll", scrollbarWidth: "none" }}
        className=" d-flex flex-row gap-2 py-2 px-2">
        {mainListProduct?.map((item, index) => (
          <Product item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default IncredibleUrgent;
