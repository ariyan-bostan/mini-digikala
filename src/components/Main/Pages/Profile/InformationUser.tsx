import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
import { contextTypeUser } from "../../../App";
import useAddProductToBoxProduct from "../../../Hooks/useAddProductToBoxProduct";
import type { UserNormal } from "../../../Hooks/useGetListNormalUser";
import useApdateUserAdmin from "../../../Hooks/useUpdateUserAdmin";
import useGetListNormalUser from "../../../Hooks/useGetListNormalUser";
const InformationUser = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { listUser } = useGetListNormalUser();
  

  const [changeInformation, setChangeInformation] = useState<UserNormal>(
    JSON.parse(localStorage.getItem("getUser") || "null"),
  );
  const getTypeUser = useContext(contextTypeUser)!;

  const addNormalUser = useAddProductToBoxProduct();
  const updateUserAdmin = useApdateUserAdmin();

  return (
    <div className="">
      <Toaster position="top-center" reverseOrder={false} />{" "}
      <form onSubmit={handleSubmit((data) => {})} className="form w-100 p-3">
        <div>
          <label
            style={{ color: "#8f8d8d", fontSize: ".8rem" }}
            className=""
            htmlFor=""
          >
            نام :{" "}
          </label>
          <input
            style={{
              border: 0,
              background: "rgba(230, 0, 0, 0.76)",
              color: "white",
              outline: "0",
              boxShadow: "none",
            }}
            value={changeInformation.name}
            className="form-control mt-2"
            onChange={(e) => {
              setChangeInformation({
                ...changeInformation,
                name: e.target.value,
              });
            }}
            type="text"
          />
        </div>
        <div>
          <label
            style={{ color: "#8f8d8d", fontSize: ".8rem" }}
            className=""
            htmlFor=""
          >
            نام خانوادگی :{" "}
          </label>
          <input
            style={{
              border: 0,
              background: "rgba(230, 0, 0, 0.76)",
              color: "white",
              outline: "0",
              boxShadow: "none",
            }}
            value={changeInformation["last-name"]}
            className="form-control mt-2"
            onChange={(e) => {
              setChangeInformation({
                ...changeInformation,
                "last-name": e.target.value,
              });
            }}
            type="text"
          />
        </div>
        <div>
          <label
            style={{ color: "#8f8d8d", fontSize: ".8rem" }}
            className=""
            htmlFor=""
          >
            نام کاربری :{" "}
          </label>
          <input
            style={{
              border: 0,
              background: "rgba(230, 0, 0, 0.76)",
              color: "white",
              outline: "0",
              boxShadow: "none",
            }}
            value={changeInformation["user-name"]}
            className="form-control mt-2"
            onChange={(e) => {
              setChangeInformation({
                ...changeInformation,
                "user-name": e.target.value,
              });
            }}
            type="text"
          />
        </div>
        <div>
          <label
            style={{ color: "#8f8d8d", fontSize: ".8rem" }}
            className=""
            htmlFor=""
          >
            رمز عبور :{" "}
          </label>
          <input
            style={{
              border: 0,
              background: "rgba(230, 0, 0, 0.76)",
              color: "white",
              outline: "0",
              boxShadow: "none",
            }}
            value={changeInformation.password}
            className="form-control mt-2"
            onChange={(e) => {
              setChangeInformation({
                ...changeInformation,
                password: e.target.value,
              });
            }}
            type="text"
          />
        </div>
        <button
          onClick={() => {
            if (changeInformation["type-user"] === "ادمین-کاربر") {
              updateUserAdmin.mutate({
                updateItem: changeInformation,
                id: changeInformation.id || "",
              });
              localStorage.removeItem("getUser");
              localStorage.setItem(
                "getUser",
                JSON.stringify(changeInformation),
              );
              toast.success("تغییرات ذخیره شد");
            } else {
              if (listUser)
                addNormalUser.mutate({
                  updateItem: changeInformation,
                  id:listUser[listUser.length-1].id || "",
                });
              localStorage.removeItem("getUser");
              localStorage.setItem(
                "getUser",
                JSON.stringify(changeInformation),
              );
              toast.success("تغییرات ذخیره شد");
            }
          }}
          className="btn mt-3 bg-success"
        >
          ذخیره تغییرات
        </button>
      </form>
    </div>
  );
};

export default InformationUser;
