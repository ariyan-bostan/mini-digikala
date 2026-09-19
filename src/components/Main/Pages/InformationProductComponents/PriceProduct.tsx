import React, { useContext } from "react";
import type { Product, ProductRunningOut } from "../../../Services/Intefaces";
import { contextWidth } from "../../../App";
interface Props{
    resault: Product | ProductRunningOut | undefined
}

const PriceProduct = ({resault}:Props) => {
    const property=useContext(contextWidth)!;
  return (
    <div
      className={[
        " ",
        property.innerWidth < 850
          ? " w-100 d-flex flex-row-reverse justify-content-between align-items-center px-2 border border-top"
          : "w-50 d-flex flex-column justify-content-between align-items-center border rounded-4 px-2 py-4 ms-2",
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
  );
};

export default PriceProduct;
