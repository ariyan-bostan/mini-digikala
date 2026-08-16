import React from "react";
import type { Product, productItem } from "../Services/APIClient";

interface Props {
  itemProduct: Product;
}

const PercentPrice = ({ itemProduct }: Props) => {
  return (
    <div className="d-flex flex-row gap-1">
      <div
        style={{ borderRadius: "5px" ,width:"2rem"}}
        className=" h-75 bg-danger  ms-3 d-flex flex-row justify-content-center"
      >
        <p style={{ fontSize: ".9rem", color: "white" }} className="">
          {itemProduct.price.percent + "%"}
        </p>
      </div>
      <p style={{ color: "#c8c6c6" }} className="text-decoration-line-through">
        {itemProduct.price.rrp_price}
      </p>
    </div>
  );
};

export default PercentPrice;
