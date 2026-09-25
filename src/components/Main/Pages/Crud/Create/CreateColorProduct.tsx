import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { contextCreateProduct } from "./CreateProduct";
import { da } from "zod/v4/locales";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  color: z.string().nonempty({ message: "رنگ وارد کن!" }),
  codeColor: z.string().nonempty({ message: "کد رنگ وارد کن" }).startsWith("#",{message:"کد رنگ درست وارد کن"}),
});
type formData = z.infer<typeof schema>;

const CreateColorProduct = () => {
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
        if (resault.newProduct) {
          resault.setNewProduct({
            ...resault.newProduct,
            theme:{
                title:data.color,
                code:data.codeColor
            }
          });
          resault.setCheckState({ ...resault.checkState, colors: true });
        }

        reset();
      })}
      className="form pe-4"
    >
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
        رنگ:{" "}
        </label>
        <input
          {...register("color")}
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
        {errors.color && (
          <p className="text-danger">{errors.color.message}</p>
        )}
      </div>
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
         کد رنگ:{" "}
        </label>
        <input
          {...register("codeColor")}
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
        {errors.codeColor && (
          <p className="text-danger">{errors.codeColor.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-danger me-4 mb-3">
        ادامه
      </button>
    </form>
  );
};

export default CreateColorProduct;
