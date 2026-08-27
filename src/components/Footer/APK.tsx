import React from "react";

const APK = () => {
  return (
    <div className="downloandAPK  px-3 pb-2  mt-1 d-flex flex-row align-items-center border-bottom ">
      <div className="w-50 h-100 d-flex flex-row justify-content-center pe-4 align-items-center">
        <div
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "100%",
            overflow: "hidden",
          }}
        >
          <img
            className="w-100 h-100 object-fit-cover"
            src="https://www.digikala.com/statics/img/png/Logo.webp"
            alt=""
          />
        </div>
        <p style={{ color: "gray", fontSize: ".8rem" }} className="m-0 pe-1">
          تجربه خرید بهتر در دیجی‌کالا
        </p>
      </div>
      <div className="w-50 h-100  d-flex flex-row justify-content-end">
        <button
          style={{
            borderRadius: "15px",
            background: "#bebcbc",
            color: "#323232",
            fontSize: ".8rem",
          }}
          className="btn border "
        >
          دانلود
        </button>
      </div>
    </div>
  );
};

export default APK;
