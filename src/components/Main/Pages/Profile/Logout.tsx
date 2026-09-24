import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Logout = () => {
    const navigate=useNavigate();
  return (
    <div className="d-flex flex-row justify-content-center">
      <button
        onClick={() => {
          localStorage.removeItem("getUser");
          toast.success("خروج از حساب کاربری");
          navigate("/");
        }}
        className="btn btn-danger"
      >
        خروج از حساب کاربری
      </button>
    </div>
  );
};

export default Logout;
