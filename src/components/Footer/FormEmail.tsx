import React from "react";

const FormEmail = () => {
  return (
    <form className="form ps-2 mt-1">
      <label
        style={{
          width: "auto",
          fontSize: ".8rem",
          fontWeight: "bolder",
          lineHeight: "2rem",
        }}
        htmlFor=""
      >
        با ثبت ایمیل،از جدید‌ترین تخفیف‌ها با‌خبر شوید
      </label>
      <div className="d-flex flex-row gap-2">
        <input
          style={{ background: "#b3b3b3", color: "GrayText" }}
          className="form-control border-0"
          type="email"
          placeholder="ایمیل شما"
        />
        <button
          style={{ background: "#b3b3b3", color: "GrayText" }}
          className="btn border-0"
        >
          ثبت
        </button>
      </div>
    </form>
  );
};

export default FormEmail;
