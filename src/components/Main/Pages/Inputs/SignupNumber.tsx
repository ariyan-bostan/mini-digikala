import React, { useContext } from "react";
import { contextStateSignupForm } from "./SignupInputs";
import { useForm } from "react-hook-form";
import { contextUserNormal } from "./Signup";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  numberSignup: z
    .string({ message: "شماره را وارد کن" })
    .nonempty({ message: "شماره را وارد کن" })
    .refine(
      (item) => {
        return /^\d+$/.test(item) && !item.startsWith("0") && item.length===10;
      },
      { message: "شماره تلفن درست وارد کن!" },
    ),
});

type formData = z.infer<typeof schema>;

const SignupNumber = () => {
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
        person.setNewPerson({ ...person.newPerson, "number-phone":data.numberSignup});
        stateSignup.setStateSignupForm({...stateSignup.stateSignupForm,numberPhone:true});
        reset();
      })}
      className="w-100 form">
      <div>
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor="">
          شماره تلفن :{" "}
        </label>
        <input
          {...register("numberSignup")}
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
      {errors.numberSignup && (
        <p style={{ fontSize: ".8rem" }} className="text-danger mt-2">
          {errors.numberSignup.message}
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

export default SignupNumber;
