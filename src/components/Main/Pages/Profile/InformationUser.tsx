import React, { useState } from "react";
import { useNavigate } from "react-router";
import useAddProductToBoxProduct from "../../../Hooks/useAddProductToBoxProduct";
import type { UserNormal } from "../../../Hooks/useGetListNormalUser";

const InformationUser = () => {
  const navigate = useNavigate();
  const [changeInformation, setChangeInformation] = useState<UserNormal>(
    JSON.parse(localStorage.getItem("getUser") || "null"),
  );
  const addNormalUser = useAddProductToBoxProduct();

  return (
    <div className="bg-info">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form w-100 p-3"
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
            addNormalUser.mutate({
              updateItem: changeInformation,
              id: changeInformation.id || "",
            });
            localStorage.removeItem("getUser");
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
