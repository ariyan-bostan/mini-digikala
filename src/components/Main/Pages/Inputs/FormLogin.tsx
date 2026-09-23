import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useGetListNormalUser, {
  type UserNormal,
} from "../../../Hooks/useGetListNormalUser";
import { contextCheckInputUser, contextTypeUser } from "../../../App";
import z from "zod";
import Swal from "sweetalert2";
import { da } from "zod/v4/locales";
import { useNavigate, useParams } from "react-router";
import useGetListAdminUser from "../../../Hooks/useGetListAdminUser";

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
  const typeUsers=useContext(contextTypeUser)!;

  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });

  const { listUser, error, isLoading } =
    typeUsers.typeUsers !== "user-admin" ? useGetListNormalUser() : useGetListAdminUser();
  let [person, setPerson] = useState<UserNormal | undefined>(undefined);
  person?.["type-user"];
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("getUser") || "null");

    if (data) {
      checkInput.setCheckInputUser(true);
    }
  }, []);

  useEffect(() => {
    if (person) {

      Swal.fire({
        title: `خوش امدید ${person?.name}`,
        icon: "success",
      });
      localStorage.setItem(
        "getUser",
        JSON.stringify(person),
      );
      navigate("/");
    }
  }, [person]);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        let resault = listUser?.find((item) => {
          console.log(item);

          return (
            (item["user-name"] === data.userId ||
              item["number-phone"] === data.userId) &&
            item.password === data.password
          );
        });
        console.log(resault);

        if (!resault) setMessage("نام کاربری یا شماره تلفن یافت نشد !!");
        else setPerson(resault);

        reset();
      })}
      className="w-100 form">
      {message && <p style={{ color: "red" }}>{message}</p>}
      <div>
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor="">
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
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor="">
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
        style={{ color: "#474747" }}
        className="btn border p-0 px-3 py-1 mt-3">
        ورود
      </button>
    </form>
  );
};

export default FormLogin;
