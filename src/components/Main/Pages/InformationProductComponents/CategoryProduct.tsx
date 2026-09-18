import React from "react";
import type { Product, ProductRunningOut } from "../../../Services/Intefaces";
interface Props{
    resault: Product | ProductRunningOut | undefined
}

const CategoryProduct = ({resault}:Props) => {
  return (
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
  );
};

export default CategoryProduct;
