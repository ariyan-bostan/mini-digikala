import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contextCheckInputUser, contextWidth } from "../../../App";
import { z } from "zod";

import { data, Navigate, useNavigate, useNavigation } from "react-router";
import useGetListNormalUser from "../../../Hooks/useGetListNormalUser";
import LogoInputs from "./LogoInputs";
import FormLogin from "./FormLogin";



const Login = () => {
  
  const navigate = useNavigate();
  const property = useContext(contextWidth)!;
  
  return (
    <div
      className={[
        "w-100",
        property.innerWidth < 850
          ? "d-flex flex-column align-items-center gap-3"
          : "",
      ].join(" ")}>

      <LogoInputs />
      <div className="w-75 bg-info border p-4 rounded-4">
        <FormLogin />
        <p
          onClick={() => {
            navigate("/profile/profileInput/signup");
          }}
          style={{ fontSize: ".8rem" }}
          className="mt-4">
          ثبت نام نکردید؟
        </p>
      </div>
    </div>
  );
};

export default Login;
