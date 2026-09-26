import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { contextUserNormal } from "./Signup";
import { contextStateSignupForm } from "./SignupInputs";
import useAddNormalUser from "../../../Hooks/useAddNormalUser";

const schema = z.object({
  nameSignup: z
    .string({ message: "نام خودت را وارد کن" })
    .refine((item) => /^[a-zA-Z\u0600-\u06FF]+(?: [a-zA-Z\u0600-\u06FF]+)*$/.test(item),{
      message: "نام خودت درست وارد کن",
    }),
  lastnameSignup: z
    .string({ message: "نام خانوادگی خودت را وارد کن" })
    .refine((item) => /^[a-zA-Z\u0600-\u06FF]+(?: [a-zA-Z\u0600-\u06FF]+)*$/.test(item), {
      message: "نام خانوادگی خودت درست وارد کن",
    }),
});

type formData = z.infer<typeof schema>;

const SignupFullName = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(schema) });
  const person = useContext(contextUserNormal)!;
  const stateSignup = useContext(contextStateSignupForm)!;

  return (
    <form
      onSubmit={handleSubmit((data) => {
        person.setNewPerson({
          ...person.newPerson,
          name: data.nameSignup,
          "last-name": data.lastnameSignup,
        });
        stateSignup.setStateSignupForm({...stateSignup.stateSignupForm,fullName:true});
        reset();
      })}
      className="w-100 form"
    >
      <div>
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          نام :{" "}
        </label>
        <input
          {...register("nameSignup")}
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
      {errors.nameSignup && (
        <p style={{ fontSize: ".8rem" }} className="text-danger mt-2">
          {errors.nameSignup.message}
        </p>
      )}
      <div>
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor=""
        >
          نام خانوادگی :{" "}
        </label>
        <input
          {...register("lastnameSignup")}
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
      {errors.lastnameSignup && (
        <p style={{ fontSize: ".8rem" }} className="text-danger mt-2">
          {errors.lastnameSignup.message}
        </p>
      )}
      <button
        style={{ color: "#474747" }}
        className="btn border p-0 px-3 py-1 mt-3"
      >
        ثبت
      </button>
    </form>
  );
};

export default SignupFullName;
