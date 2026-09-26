import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { da, id } from "zod/v4/locales";
import useGetProduct from "../../../../Hooks/useGetProduct";
import useDeleteProduct from "../../../../Hooks/useDeleteProduct";
import toast, { Toaster } from "react-hot-toast";
import { contextWidth } from "../../../../App";
const schema = z.object({
  subject: z.string().nonempty({ message: "موضوع را انتخاب کن" }),
  nameProduct: z.string().nonempty({ message: "نام محصول را وارد کن" }),
});
type formData = z.infer<typeof schema>;
const DeleteProduct = () => {
    const property=useContext(contextWidth)!;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });
  const [selectSubject, setSelectSubject] = useState(
    " ویتامین‌ها و مواد معدنی",
  );
  const { data: list, error, isLoading } = useGetProduct(selectSubject);
  const deleteProduct = useDeleteProduct();
  const [message, setMessage] = useState("");

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />{" "}
      <form
        onSubmit={handleSubmit((dataForm) => {
          // console.log(dataForm.nameProduct);
          let findProduct =
            list &&
            list.find((item, index) => {
              console.log(item.title);
              console.log(dataForm.nameProduct);

              console.log(
                item.title.trim().includes(dataForm.nameProduct.trim()),
              );

              return item.title.trim() === dataForm.nameProduct.trim();
            });

          if (findProduct) {
            deleteProduct.mutate({
              idUser: findProduct.id || "",
              endPoint: selectSubject,
            });
            toast.success("پاک کردن ایتم مورد نظر");
          } else {
            setMessage("ایتم مورد نظر پیدا نشد!");
          }
          reset();
        })}
        className="form">
        {message && <p className="text-danger me-3 mt-2">{message}</p>}
        <div className="my-3 me-2">
          <label
            style={{ color: "#8f8d8d", fontSize: ".8rem" }}
            className=""
            htmlFor="">
            موضوع را انتخاب کن:{" "}
          </label>
          <select
            {...register("subject")}
            onChange={(e) => {
              setSelectSubject(e.target.value);
            }}
            className={[property.innerWidth<850?"form-select w-50":"form-select w-25"].join(" ")}>
            <option value="">موضوع را انتخاب کن</option>
            <option
              style={{ background: "red" }}
              value="ویتامین‌ها و مواد معدنی">
              ویتامین‌ها و مواد معدنی
            </option>
            <option value="مانیتور">مانیتور</option>
            <option value="گوشی موبایل">گوشی موبایل</option>
            <option value="دفتر">دفتر</option>
          </select>
        </div>
        {errors.subject && (
          <p className="text-danger">{errors.subject.message}</p>
        )}
        <div className="mt-2">
          <label
            style={{ color: "#8f8d8d", fontSize: ".8rem" }}
            className=""
            htmlFor="">
            نام محصول:{" "}
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
        </div>

        {errors.nameProduct && (
          <p className="text-danger">{errors.nameProduct.message}</p>
        )}
        <button
          style={{ color: "#474747" }}
          className="btn border p-0 px-3 py-1 my-3 me-4">
          پاک کردن
        </button>
      </form>
    </>
  );
};
export default DeleteProduct;
