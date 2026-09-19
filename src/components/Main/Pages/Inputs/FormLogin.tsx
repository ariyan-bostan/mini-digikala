import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useGetListNormalUser, {
  type User,
} from "../../../Hooks/useGetListNormalUser";
import { contextCheckInputUser } from "../../../App";
import z from "zod";
import Swal from "sweetalert2";
import { da } from "zod/v4/locales";

const schema = z.object({
  userId: z
    .string({ message: "فیلد را پر کنید" })
    .nonempty({ message: "فیلد را پر کنید" }),
  password: z
    .string({ message: "فیلد را پر کنید" })
    .nonempty({ message: "فیلد را پر کنید" }),
});

type formData = z.infer<typeof schema>;

const FormLogin = () => {
  const checkInput = useContext(contextCheckInputUser)!;
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const { listNormalUser, error, isLoading } = useGetListNormalUser();
  let [person, setPerson] = useState<User | undefined>(undefined);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("getUser") || "null");

    if (data) {
      checkInput.setCheckInputUser(true);
    }
  }, []);

  useEffect(() => {
    if (person) {
        Swal.fire({
        title: `خوش امدید ${person?.name }`,
        icon: "success",
      });
      localStorage.setItem("getUser", JSON.stringify(person));
    }
  }, [person]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        let resault = listNormalUser?.find((item) => {
          return (
            (item["user-name"] === data.userId ||
              item["number-phone"] === data.userId) &&
            item.password === data.password
          );
        });

        setPerson(resault);
        console.log(resault);

        if (!resault) setMessage("نام کاربری یا شماره تلفن یافت نشد !!");

        reset();
      })}
      className="w-100 form"
    >
      {message && <p>{message}</p>}
      <div>
        <label
          style={{ color: "whitesmoke", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          نام کاربری یا شماره تلفن :{" "}
        </label>
        <input
          {...register("userId")}
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
      {errors.userId && (
        <p style={{ fontSize: ".8rem" }} className="text-danger mt-2">
          {errors.userId.message}
        </p>
      )}

      <div className="mt-2">
        <label
          style={{ color: "whitesmoke", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          رمز عبور :{" "}
        </label>
        <input
          {...register("password")}
          style={{
            border: 0,
            background: "rgba(230, 0, 0, 0.76)",
            color: "white",
            outline: "0",
            boxShadow: "none",
          }}
          className="form-control mt-2"
          type="password"
        />
      </div>
      {errors.password && (
        <p style={{ fontSize: ".8rem" }} className="text-danger mt-2">
          {errors.password.message}
        </p>
      )}

      <button
        style={{ color: "white" }}
        className="btn border p-0 px-3 py-1 mt-3"
      >
        ورود
      </button>
    </form>
  );
};

export default FormLogin;
