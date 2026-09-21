import React, { useContext, useState } from "react";
import { contextUserNormal } from "./Signup";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contextStateSignupForm } from "./SignupInputs";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import useGetListNormalUser from "../../../Hooks/useGetListNormalUser";
const schema = z.object({
  usernameSignup: z
    .string({ message: "نام کاربری خودت را وارد کن" })
    .refine((item) => item.length > 7, { message: "نام کاربری درست وارد کن" }),
  passwordSignup: z.string({ message: "پسورد را وارد کن" }).refine(
    (item) => {
      return item.length > 7;
    },
    { message: "پسورد بهتری وارد کن" },
  ),
  duplicatePasswordSignup: z.string({ message: "پسورد را وارد کن" }).refine(
    (item) => {
      return item.length > 7;
    },
    { message: "پسورد بهتری وارد کن" },
  ),
});

type formData = z.infer<typeof schema>;

const SignupUsername = () => {
  const { listNormalUser, error, isLoading } = useGetListNormalUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });
  const person = useContext(contextUserNormal)!;
  const stateSignup = useContext(contextStateSignupForm)!;

  const [errorPassword, setErrorPassword] = useState("");

  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (data.passwordSignup !== data.duplicatePasswordSignup)
          setErrorPassword("پسورد یکسان نیست");
        else {
          person.setNewPerson({
            ...person.newPerson,
            "user-name": data.usernameSignup,
            password: data.passwordSignup,
            "id-user":
              (listNormalUser && String(listNormalUser.length + 2)) || "1",
          });
          stateSignup.setStateSignupForm({
            ...stateSignup.stateSignupForm,
            username: true,
          });
        }

        reset();
      })}
      className="w-100 form">
      {errorPassword && (
        <p style={{ fontSize: ".8rem" }} className="text-danger mt-2">
          {errorPassword}
        </p>
      )}
      <div>
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor="">
          نام کاربری :{" "}
        </label>
        <input
          {...register("usernameSignup")}
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
      {errors.usernameSignup && (
        <p style={{ fontSize: ".8rem" }} className="text-danger mt-2">
          {errors.usernameSignup.message}
        </p>
      )}
      <div>
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor="">
          رمز :{" "}
        </label>
        <input
          {...register("passwordSignup")}
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
      {errors.passwordSignup && (
        <p style={{ fontSize: ".8rem" }} className="text-danger mt-2">
          {errors.passwordSignup.message}
        </p>
      )}
      <div>
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor="">
          تکرار رمز :{" "}
        </label>
        <input
          {...register("duplicatePasswordSignup")}
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
      {errors.duplicatePasswordSignup && (
        <p style={{ fontSize: ".8rem" }} className="text-danger mt-2">
          {errors.duplicatePasswordSignup.message}
        </p>
      )}

      <button
        style={{ color: "#474747" }}
        className="btn border p-0 px-3 py-1 mt-3">
        ثبت
      </button>
    </form>
  );
};

export default SignupUsername;
