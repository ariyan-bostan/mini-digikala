import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { contextCreateProduct } from "./CreateProduct";
import { da } from "zod/v4/locales";
import useCategoriHome from "../../../../Hooks/useCategoriHome";

const schema = z.object({
  brandProduct: z.string().nonempty({ message: "نام وارد کن!" }),
  categoryProduct: z.string().nonempty({ message: "یکی از دسته بندی انتخاب کن" }),
  rateProduct: z.string().nonempty({ message: "امتیاز وارد کن" }).refine((item)=>{},{message:"امتیاز درست وارد کن"}),
});
type formData = z.infer<typeof schema>;

const Createlayer = () => {
  const resault = useContext(contextCreateProduct)!;
  const {data:list,error,isLoading}=useCategoriHome();
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
        if (resault.newProduct)
          resault.setNewProduct({
            ...resault.newProduct,
          });
        reset();
        resault.setCheckState({ ...resault.checkState, nameProduct: true });
      })}
      className="form pe-4">
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor="">
          برند:{" "}
        </label>
        <input
          {...register("brandProduct")}
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
        {errors.brandProduct && (
          <p className="text-danger">{errors.brandProduct.message}</p>
        )}
      </div>
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor="">
          برند:{" "}
        </label>
        <select {...register("categoryProduct")} className="form-select w-50">
          <option value="">موضوع را انتخاب کن</option>
         {list?.map((item,index)=>(
          <option key={index} value={item}>{item}</option>
         ))}
        </select>
        {errors.brandProduct && (
          <p className="text-danger">{errors.brandProduct.message}</p>
        )}
      </div>
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor="">
          برند:{" "}
        </label>
        <input
          {...register("brandProduct")}
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
        {errors.brandProduct && (
          <p className="text-danger">{errors.brandProduct.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-danger me-4 mb-3">
        ادامه
      </button>
    </form>
  );
};

export default Createlayer;
