import React, { useContext } from "react";
import { contextWidth } from "../../../App";
import useListCategories from "../../../Hooks/useListCategories";

const CategoryIncredible = () => {
    const property=useContext(contextWidth)!;
    const {listCategori,isLoading,error}=useListCategories();
  return (
    <div
      style={{ width:property.innerWidth>850?"85%":"100%",height: "10rem", overflow: "scroll", scrollbarWidth: "none" }}
      className={" d-flex flex-row gap-4 p-1 align-items-center"}
    >
      {listCategori&&listCategori.map((item, index) => (
        <div
          key={index}
          style={{ width: "7rem", height: "90%", flexShrink: 0 }}
          className=" d-flex flex-column align-items-center"
        >
          <img
            style={{ width: "100%", height: "90%", objectFit: "cover" }}
            src={item.image}
            alt=""
          />
          <p style={{ fontSize: ".8rem" }} className="mt-1">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryIncredible;
