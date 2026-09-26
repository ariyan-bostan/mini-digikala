import { useContext, useState } from "react";
import { FaUser, FaUserTie } from "react-icons/fa";
import { RiUser2Fill } from "react-icons/ri";
import { contextWidth } from "../../App";
import type { UserNormal } from "../../Hooks/useGetListNormalUser";
import CreateProduct from "./Crud/Create/CreateProduct";
import DeleteProduct from "./Crud/Delete/DeleteProduct";
import UpdateProduct from "./Crud/Update/UpdateProduct";
import BoxProduct from "./Profile/BoxProduct";
import InformationUser from "./Profile/InformationUser";
import Logout from "./Profile/Logout";
export interface TypeGetItem {
  "type-user": string;
}
const Profile = () => {
  const [selectSubject, setSelectSubject] = useState("نمایش اطلاعات");

  const [getUserNow, setGetUserNow] = useState<UserNormal>(
    JSON.parse(localStorage.getItem("getUser") || "null"),
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
    return item.typeUser === getUserNow["type-user"];
  });
  return (
    <div
      className={[
        "w-100",
        property.innerWidth < 850
          ? "d-flex flex-column gap-1"
          : "d-flex flex-row",
      ].join(" ")}>
      <div
        style={{
          overflow: "scroll",
          borderRadius: "50px",
          scrollbarWidth: "none",
        }}
        className={[
          property.innerWidth < 850
            ? "w-100 border py-3 d-flex flex-row gap-3 pe-3"
            : "w-25 mx-2 border py-3 d-flex flex-column align-items-center gap-4 mb-2",
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

      <div style={{ overflow: "hidden" }} className="w-100 border rounded-4">
        {selectSubject === "سبد خرید" && <BoxProduct />}
        {selectSubject === "خروج از حساب کاربری" && <Logout />}
        {selectSubject === "نمایش اطلاعات" && <InformationUser />}
        {selectSubject === "اضافه کردن محصول" && <CreateProduct />}
        {selectSubject === "بروزرسانی محصول" && <UpdateProduct />}
        {selectSubject === "حذف محصول" && <DeleteProduct />}
      </div>
    </div>
  );
};

export default Profile;
