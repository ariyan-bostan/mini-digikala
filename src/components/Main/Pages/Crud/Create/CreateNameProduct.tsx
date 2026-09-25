import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { contextCreateProduct } from "./CreateProduct";
import { da } from "zod/v4/locales";

const schema = z.object({
  nameProduct: z.string().nonempty({ message: "نام وارد کن!" }),
});
type formData = z.infer<typeof schema>;

const CreateNameProduct = () => {
  const resault = useContext(contextCreateProduct)!;
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
            title: data.nameProduct,
          });
        reset();
        resault.setCheckState({...resault.checkState,nameProduct:true})
      })}
      className="form pe-4">
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor="">
          نام محصول وارد کن :{" "}
        </label>
        <input
          {...register("nameProduct")}
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
        {errors.nameProduct && (
          <p className="text-danger">{errors.nameProduct.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-danger me-4 mb-3">
        ادامه
      </button>
    </form>
  );
};

export default CreateNameProduct;
