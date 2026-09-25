import React, { useContext } from "react";
import { FiBell } from "react-icons/fi";
import { FaRegUser, FaUserTie } from "react-icons/fa";
import style from "../Styles/Header/header.module.css";
import { contextHeader } from "./Header";
import { NavLink } from "react-router";
import type { UserNormal } from "../Hooks/useGetListNormalUser";
import useProduct from "../Hooks/useProduct";

const User = () => {
    const property=useContext(contextHeader)!;
    const getTypeUser:UserNormal=JSON.parse(localStorage.getItem("getUser")||"null")||"";
    
  return (
    <div
      className={[
        style.boxUser,
        property.innerWidth > 850 ? "gap-4 border-0" : " ",
        "d-flex flex-row justify-content-center align-items-center gap-4",
      ].join(" ")}>
      {/* <NavLink to={"/profile/notification"}>
          <FiBell fontSize={25} color="gray"  />
      </NavLink> */}
      <NavLink to={"/profile"}>
        {getTypeUser["type-user"] === "ادمین-کاربر" ? (
          <FaUserTie color="black" fontSize={20} />
        ) : (
          <FaRegUser color="black" fontSize={20} />
        )}
      </NavLink>
    </div>
  );
};

export default User;
