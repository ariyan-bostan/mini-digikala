import React, { useContext, useState } from "react";
import { contextWidth } from "../../../App";
import useGetListNormalUser, {
  type UserNormal,
} from "../../../Hooks/useGetListNormalUser";
import styleAmz from "../../../Styles/Main/AmazingBox.module.css";
import { ar } from "zod/v4/locales";
import useAddProductToBoxProduct from "../../../Hooks/useAddProductToBoxProduct";
import type { Product, ProductRunningOut } from "../../../Services/Intefaces";
import toast, { Toaster } from "react-hot-toast";

const BoxProduct = () => {
  const property = useContext(contextWidth)!;
  const addProductToBoxProduct = useAddProductToBoxProduct();

  const [getUserNow, setGetUserNow] = useState<UserNormal>(
    JSON.parse(localStorage.getItem("getUser") || "null"),
  );

  let sumOfProductPrice = getUserNow?.["box-product"].reduce((sum, item) => {
    return (sum += sum + Number(item.price.rrp_price));
  }, 0);

  let finalResault = "";
  let array: string[] = [];
  if (sumOfProductPrice) {
    let i = String(sumOfProductPrice).length;
    let index = 0;
    while (i > 0) {
      finalResault = String(sumOfProductPrice).substring(i - 3, i) + ",";
      array[index++] = finalResault;
      // console.log(array);
      i -= 3;
    }
    finalResault = "";

    array.reverse().forEach((item) => {
      finalResault += item;
    });
  }
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />{" "}
      <div className="bg-danger d-flex flex-column align-items-center justify-content-center">
        <h3>مجموع خرید:</h3>
        <p>{finalResault.substring(0, finalResault.length - 1)}</p>
      </div>
      <div
        style={{ flexWrap: "wrap" }}
        className={[
          "px-3",
          property.innerWidth < 850
            ? "d-flex flex-column gap-1 py-2"
            : "d-flex flex-row gap-2 justify-content-center mt-4 py-4",
        ].join(" ")}>
        {getUserNow?.["box-product"].map((item, index) => (
          <>
            <Toaster position="top-center" reverseOrder={false} />{" "}
            {property.innerWidth < 850 ? (
              <div
                style={{
                  height: "10rem",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                key={index}
                className={[
                  "linkTo",
                  property.innerWidth < 850
                    ? "d-flex border flex-row gap-1  w-100"
                    : "bg-info",
                ].join(" ")}>
                <div
                  style={{ width: "30%", borderRadius: "5px" }}
                  className="h-100">
                  <img
                    className="w-100 h-100"
                    src={item.images.mainImg}
                    alt=""
                  />
                </div>
                <div
                  style={{ width: "70%", borderRadius: "5px" }}
                  className="h-100 d-flex flex-column">
                  <div className="h-50  p-2">
                    <p style={{ fontSize: ".8rem" }} className="p-0 m-0">
                      {item.title.substring(0, 50)}...
                    </p>
                  </div>
                  <div className="h-50 d-flex flex-row">
                    <div className="w-50  pe-2">
                      <div
                        style={{ width: "2rem", borderRadius: "10px" }}
                        className="bg-danger">
                        10%
                      </div>
                    </div>
                    <div className="w-50 d-flex flex-row justify-content-end ps-1">
                      <div className="w-75 h-100  d-flex flex-column align-items-end">
                        {item.price.rrp_price + " "}تومان
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      toast.success("پاک شد");

                      let update: UserNormal = {
                        ...getUserNow,
                        "box-product": getUserNow["box-product"].filter(
                          (item, index1) => {
                            if (index1 !== index) return item;
                          },
                        ),
                      };
                      localStorage.removeItem("getUser");
                      localStorage.setItem("getUser", JSON.stringify(update));
                      setGetUserNow(update);
                      addProductToBoxProduct.mutate({
                        updateItem: update,
                        id: getUserNow.id || "",
                      });
                    }}
                    className="btn btn-danger ms-1 mb-1">
                    پاک کردن از سبد خرید
                  </button>
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={[styleAmz.boxProduct, "linkTo", "border pb-2"].join(
                  " ",
                )}>
                <div className={[styleAmz.posterPro].join(" ")}>
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={item.images.mainImg}
                    alt=""
                  />
                </div>
                <div
                  className={[
                    styleAmz.titlePro,
                    "d-flex justify-content-center",
                  ].join(" ")}>
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
                    <p
                      style={{ fontSize: ".9rem", color: "white" }}
                      className="m-0">
                      ⁒10
                    </p>
                  </div>
                  <div
                    style={{ color: "gray", textDecoration: "line-through" }}>
                    {item.price.rrp_price}
                  </div>
                </div>
                <div
                  className={[
                    styleAmz.boxFinalPrice,
                    "d-flex flex-row justify-content-center align-items-center",
                  ].join(" ")}>
                  <p className="finalPriceIcredibleList m-0 p-0">
                    {item.price.rrp_price -
                      (10 / 100) * item.price.rrp_price +
                      " "}
                    تومان
                  </p>
                </div>
                <button
                  onClick={() => {
                    toast.success("پاک شد");

                    let update: UserNormal = {
                      ...getUserNow,
                      "box-product": getUserNow["box-product"].filter(
                        (item, index1) => {
                          if (index1 !== index) return item;
                        },
                      ),
                    };
                    localStorage.removeItem("getUser");
                    localStorage.setItem("getUser", JSON.stringify(update));
                    setGetUserNow(update);
                    addProductToBoxProduct.mutate({
                      updateItem: update,
                      id: getUserNow.id || "",
                    });
                  }}
                  className="w-100 btn btn-danger">
                  پاک کردن
                </button>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default BoxProduct;
