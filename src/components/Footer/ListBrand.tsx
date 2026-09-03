import React from "react";
import useListFooter from "../Hooks/useListFooter";

const ListBrand = () => {
    const {list,error,isLoading}=useListFooter();
  return (
    <div className="w-100 border-top d-flex flex-wrap justify-content-center">
      {list&&list[list.length - 1].list.map((item, index) => (
        <div key={index}
          className="d-flex flex-row justify-content-center"
          style={{ width: "10rem", height: "5rem" }}
        >
          <img style={{ width: "5rem", height: "5rem" }} src={item} alt="" />
        </div>
      ))}
    </div>
  );
};

export default ListBrand;
