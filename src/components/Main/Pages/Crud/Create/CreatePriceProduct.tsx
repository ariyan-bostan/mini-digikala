import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { contextCreateProduct } from "./CreateProduct";
import { da } from "zod/v4/locales";
import useCategoriHome from "../../../../Hooks/useCategoriHome";
import { zodResolver } from "@hookform/resolvers/zod";
import useAddProdut from "../../../../Hooks/useAddProduct";

const schema = z.object({
  sellingPrice: z
    .string()
    .nonempty({ message: "قیمت فروش فعلی را وارد کن" })
    .refine((item) => Number(item), { message: "قیمت درست وارد کن" }),

  rrpPrice: z
    .string()
    .nonempty({ message: "قیمت فروش اصلی را وارد کن" })
    .refine((item) => Number(item), { message: "قیمت درست وارد کن" }),
  percent: z
    .string()
    .nonempty({ message: "قیمت فروش اصلی را وارد کن" })
    .refine((item) => Number(item), { message: "قیمت درست وارد کن" }),
});
type formData = z.infer<typeof schema>;

const CreatePriceProduct = () => {
  const resault = useContext(contextCreateProduct)!;
  const addProduct = useAddProdut();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
        console.log(resault.newProduct);
        console.log(Number(data.sellingPrice) <= Number(data.rrpPrice));
        if (
          resault.newProduct &&
          Number(data.sellingPrice) <= Number(data.rrpPrice)
        ) {
          resault.setNewProduct({
            ...resault.newProduct,
            price: {
              rrp_price: Number(data.rrpPrice),
              selling_price: Number(data.sellingPrice),
              percent: Number(data.percent),
            },
          });
          console.log("kosi");
          console.log("endpoint", resault.title);

          addProduct.mutate({
            endPoint: resault.title,
            newProduct: {
              ...resault.newProduct,
              price: {
                rrp_price: Number(data.rrpPrice),
                selling_price: Number(data.sellingPrice),
                percent: Number(data.percent),
              },
            },
          });
          resault.setCheckState({ ...resault.checkState, price: true });
        }
      })}
      className="form pe-4"
    >
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          قیمت اصلی/مرجع محصول قبل از تخفیف :{" "}
        </label>
        <input
          {...register("rrpPrice")}
          style={{
            border: 0,
            background: "rgba(230, 0, 0, 0.76)",
            color: "white",
            outline: "0",
            boxShadow: "none",
          }}
          className="form-control mt-2"
          type="text"
        />
        {errors.rrpPrice && (
          <p className="text-danger">{errors.rrpPrice.message}</p>
        )}
      </div>
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          قیمت فروش فعلی محصول :{" "}
        </label>
        <input
          {...register("sellingPrice")}
          style={{
            border: 0,
            background: "rgba(230, 0, 0, 0.76)",
            color: "white",
            outline: "0",
            boxShadow: "none",
          }}
          className="form-control mt-2"
          type="text"
        />
        {errors.sellingPrice && (
          <p className="text-danger">{errors.sellingPrice.message}</p>
        )}
      </div>
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          تخفیف :{" "}
        </label>
        <input
          {...register("percent")}
          style={{
            border: 0,
            background: "rgba(230, 0, 0, 0.76)",
            color: "white",
            outline: "0",
            boxShadow: "none",
          }}
          className="form-control mt-2"
          type="text"
        />
        {errors.percent && (
          <p className="text-danger">{errors.percent.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-danger me-4 mb-3">
        ادامه
      </button>
    </form>
  );
};

export default CreatePriceProduct;
