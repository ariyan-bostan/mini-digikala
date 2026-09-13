import React, { useContext } from "react";
import Product from "../../IncredibleComponent/Product";
import { contextWidth } from "../../../App";
import useRunningOutIncredibleProducts from "../../../Hooks/useRunningOutIncredibleProducts";

interface Props {
  filter: {
    category: string;
    brand: string;
  };
}

const BoxProductIncredible = ({filter}:Props) => {
  const property = useContext(contextWidth)!;
  const { data: list, error, isLoading } = useRunningOutIncredibleProducts();
    if(filter.brand==="برند"&&filter.category!=="")

  return (
    <div
      style={{
        borderRadius: "10px",
        width: property.innerWidth > 850 ? "90%" : "",
      }}
      className={[
        "border p-3",
        property.innerWidth < 850 ? " mx-2 d-flex flex-column gap-2" : "ms-2",
      ].join(" ")}
    >
      <div
        style={{ borderRadius: "2rem", overflow: "hidden", height: "2rem" }}
        className=" d-flex flex-row align-items-center pe-4"
      >
        {list && list.products.length + " "}کالا
      </div>
      <div
        style={{ flexWrap: "wrap" }}
        className={[
          property.innerWidth < 850
            ? "d-flex flex-column gap-1"
            : "d-flex flex-row gap-2 justify-content-center",
        ].join(" ")}
      >
        {list?.products.map((item, index) => (
          <>
            {property.innerWidth < 850 ? (
              <div
                style={{
                  height: "10rem",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                className={[
                  property.innerWidth < 850
                    ? "d-flex border flex-row gap-1  w-100"
                    : "bg-info",
                ].join(" ")}
              >
                <div
                  style={{ width: "30%", borderRadius: "5px" }}
                  className="h-100"
                >
                  <img className="w-100 h-100" src={item.imgWEBP} alt="" />
                </div>
                <div
                  style={{ width: "70%", borderRadius: "5px" }}
                  className="h-100 d-flex flex-column"
                >
                  <div className="h-50  p-2">
                    <p style={{ fontSize: ".8rem" }} className="p-0 m-0">
                      {item.title}
                    </p>
                  </div>
                  <div className="h-50 d-flex flex-row">
                    <div className="w-50  pe-2">
                      <div
                        style={{ width: "2rem", borderRadius: "10px" }}
                        className="bg-danger"
                      >
                        10%
                      </div>
                    </div>
                    <div className="w-50 d-flex flex-row justify-content-end ps-1">
                      <div className="w-75 h-100  d-flex flex-column align-items-end">
                        {item.price.rrp_price.toString() + " "}تومان
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Product item={item} index={index} />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default BoxProductIncredible;
