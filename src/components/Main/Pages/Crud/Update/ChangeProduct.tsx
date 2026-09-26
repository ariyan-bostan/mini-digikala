import React, { useContext } from "react";
import { contextUpdateProduct } from "./UpdateProduct";
import { useForm } from "react-hook-form";
import { number } from "zod";
import useApdateProduct from "../../../../Hooks/useApdateProduct";
import toast from "react-hot-toast";

const ChangeProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const update = useContext(contextUpdateProduct)!;
  const addUpdate = useApdateProduct();
  console.log(update.productU);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="form w-100 p-3"
    >
      <div>
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          نام محصول :{" "}
        </label>
        <input
          style={{
            border: 0,
            background: "rgba(230, 0, 0, 0.76)",
            color: "white",
            outline: "0",
            boxShadow: "none",
          }}
          value={update.productU.title}
          className="form-control mt-2"
          onChange={(e) => {
            if (e.target)
              update.setProductU({ ...update.productU, title: e.target.value });
          }}
          type="text"
        />
      </div>
      <div>
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          قیمت اصلی/مرجع محصول قبل از تخفیف :{" "}
        </label>
        <input
          style={{
            border: 0,
            background: "rgba(230, 0, 0, 0.76)",
            color: "white",
            outline: "0",
            boxShadow: "none",
          }}
          value={String(update.productU.price.selling_price)}
          className="form-control mt-2"
          onChange={(e) => {
            if (e.target && Number(e.target.value)) {
              update.setProductU({
                ...update.productU,
                price: {
                  ...update.productU.price,
                  selling_price: Number(e.target.value),
                },
              });
            }
          }}
          type="text"
        />
      </div>
      <div>
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          قیمت فروش فعلی محصول :{" "}
        </label>
        <input
          style={{
            border: 0,
            background: "rgba(230, 0, 0, 0.76)",
            color: "white",
            outline: "0",
            boxShadow: "none",
          }}
          value={String(update.productU.price.rrp_price)}
          className="form-control mt-2"
          onChange={(e) => {
            if (e.target && Number(e.target.value))
              update.setProductU({
                ...update.productU,
                price: {
                  ...update.productU.price,
                  rrp_price: Number(e.target.value),
                },
              });
          }}
          type="text"
        />
      </div>
      <div>
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          تخفیف :{" "}
        </label>
        <input
          style={{
            border: 0,
            background: "rgba(230, 0, 0, 0.76)",
            color: "white",
            outline: "0",
            boxShadow: "none",
          }}
          value={String(update.productU.price.percent)}
          className="form-control mt-2"
          onChange={(e) => {
            if (e.target && Number(e.target.value))
              update.setProductU({
                ...update.productU,
                price: {
                  ...update.productU.price,
                  percent: Number(e.target.value),
                },
              });
          }}
          type="text"
        />
      </div>

      <button
        onClick={() => {
          toast.success("بروز شد");

          addUpdate.mutate({
            endpoint: update.selectSubject,
            idProduct: update.productU.id || "",
            itemUpdate: update.productU,
          });
        }}
        className="btn mt-3 bg-success"
      >
        ذخیره تغییرات
      </button>
    </form>
  );
};

export default ChangeProduct;
