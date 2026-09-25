import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const Logout = () => {
    const navigate=useNavigate();
  return (
    <div className="d-flex flex-row justify-content-center">
            <Toaster position="top-center" reverseOrder={false} />{" "}
      
      <button
        onClick={() => {
          toast.success("خروج از حساب کاربری");
          localStorage.removeItem("getUser");
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
