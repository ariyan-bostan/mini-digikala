import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { contextCreateProduct } from "./CreateProduct";
import { da } from "zod/v4/locales";
import useCategoriHome from "../../../../Hooks/useCategoriHome";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  mainImage: z
    .string()
    .nonempty({ message: "لینک تصویر اصلی وارد کن" })
    .endsWith(".webp", { message: "ادرس تصویر باید از نوع webp باشد" })
    .refine(
      (item) => item.startsWith("https://") || item.startsWith("http://"),
    ),
  img1: z
    .string()
    .nonempty({ message: "لینک تصویر اول وارد کن" })
    .endsWith(".webp", { message: "ادرس تصویر باید از نوع webp باشد" })
    .refine(
      (item) => item.startsWith("https://") || item.startsWith("http://"),
    ),
  img2: z
    .string()
    .nonempty({ message: "لینک تصویر دوم وارد کن" })
    .endsWith(".webp", { message: "ادرس تصویر باید از نوع webp باشد" })
    .refine(
      (item) => item.startsWith("https://") || item.startsWith("http://"),
    ),
  img3: z
    .string()
    .nonempty({ message: "لینک تصویر سوم وارد کن" })
    .endsWith(".webp", { message: "ادرس تصویر باید از نوع webp باشد" })
    .refine(
      (item) => item.startsWith("https://") || item.startsWith("http://"),
    ),
});
type formData = z.infer<typeof schema>;

const CreateImageProduct = () => {
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

        if (resault.newProduct) {

          resault.setNewProduct({
            ...resault.newProduct,
            images: {
              mainImg: data.mainImage,
              listImg: [data.img1, data.img2, data.img3],
            },
          });
          resault.setCheckState({ ...resault.checkState, images: true });
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
          تصویر اصلی :{" "}
        </label>
        <input
          {...register("mainImage")}
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
        {errors.mainImage && (
          <p className="text-danger">{errors.mainImage.message}</p>
        )}
      </div>
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          تصویر اول :{" "}
        </label>
        <input
          {...register("img1")}
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
        {errors.img1 && <p className="text-danger">{errors.img1.message}</p>}
      </div>
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          تصویر دوم :{" "}
        </label>
        <input
          {...register("img2")}
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
        {errors.img2 && <p className="text-danger">{errors.img2.message}</p>}
      </div>
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          تصویر سوم :{" "}
        </label>
        <input
          {...register("img3")}
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
        {errors.img3 && <p className="text-danger">{errors.img3.message}</p>}
      </div>

      <button type="submit" className="btn btn-danger me-4 mb-3">
        ادامه
      </button>
    </form>
  );
};

export default CreateImageProduct;
