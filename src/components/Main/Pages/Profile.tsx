import React, { useContext, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { RiUser2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import UserNormal from "./Users/UserNormal";
import { contextWidth } from "../../App";
import BoxProduct from "./Profile/BoxProduct";
export interface TypeGetItem {
  "type-user": string;
}
const Profile = () => {
  const [selectSubject, setSelectSubject] = useState("نمایش اطلاعات");
  const getUser: TypeGetItem = JSON.parse(
    localStorage.getItem("getUser") || "null",
  );
  const property = useContext(contextWidth)!;
  const navListProfile = [
    {
      typeUser: "عادی",
      icon: <FaUser />,
      list: ["سبد خرید", "نمایش اطلاعات", "خروج از حساب کاربری"],
    },
    {
      typeUser: "ادمین-کاربر",
      icon: <RiUser2Fill />,
      list: [
        "نمایش اطلاعات",
        "اضافه کردن محصول",
        "بروزرسانی محصول",
        "حذف محصول",
        "خروج از حساب کاربری",
      ],
    },
    {
      typeUser: "ادمین",
      icon: <FaUserTie />,
      list: [
        "نمایش اطلاعات",
        "اضافه کردن محصول",
        "بروزرسانی محصول",
        "حذف محصول",
        "اضافه کرد ادمین-کاربر",
        "خروج از حساب کاربری",
      ],
    },
  ];
  let findIndex = navListProfile.findIndex((item) => {
    return item.typeUser === getUser["type-user"];
  });
  console.log(getUser["type-user"]);

  return (
    <div
      className={[
        "w-100",
        property.innerWidth < 850 ? "d-flex flex-column gap-1" : "",
      ].join(" ")}>
      <div
        style={{ overflow: "scroll", scrollbarWidth: "none" }}
        className={[
          "w-100 bg-warning",
          property.innerWidth < 850 ? "d-flex flex-row gap-3" : "",
        ].join(" ")}>
        {navListProfile[findIndex].list.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectSubject(item);
            }}
            style={{
              width: "7rem",
              height: "3rem",
              fontSize: ".7rem",
              flexShrink: 0,
            }}
            className="btn btn-primary">
            {item}
          </button>
        ))}
      </div>
      <div className="w-100 bg-success">
        {selectSubject === "سبد خرید" && <BoxProduct />}
      </div>
    </div>
  );
};

export default Profile;
