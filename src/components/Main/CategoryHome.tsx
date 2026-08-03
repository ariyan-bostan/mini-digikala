import React from "react";
import style from "../Styles/Main/CategoriHome.module.css"

const CategoryHome = () => {
  return (
    <div
      className={[style.container, "categori bg-info mt-2"].join(" ")}
    >
      <div
        style={{ width: "100%", height: "auto" }}
        className="bg-danger d-flex align-items-center pe-2"
      >
        <h4>دسته‌بندی ها</h4>
      </div>
      <div
        style={{ width: "100%", height: "15rem" }}
        className={[style.containerBox, "pe-2"].join(" ")}
      >
        <div className={[style.categoriBox].join(" ")}>1</div>
        <div className={[style.categoriBox].join(" ")}>2</div>
        <div className={[style.categoriBox].join(" ")}>3</div>
        <div className={[style.categoriBox].join(" ")}>4</div>
        <div className={[style.categoriBox].join(" ")}>5</div>
        <div className={[style.categoriBox].join(" ")}>6</div>
        <div className={[style.categoriBox].join(" ")}>1</div>
        <div className={[style.categoriBox].join(" ")}>2</div>
        <div className={[style.categoriBox].join(" ")}>3</div>
        <div className={[style.categoriBox].join(" ")}>4</div>
        <div className={[style.categoriBox].join(" ")}>5</div>
        <div className={[style.categoriBox].join(" ")}>6</div>
        <div className={[style.categoriBox].join(" ")}>1</div>
        <div className={[style.categoriBox].join(" ")}>2</div>
        <div className={[style.categoriBox].join(" ")}>3</div>
        <div className={[style.categoriBox].join(" ")}>4</div>
        <div className={[style.categoriBox].join(" ")}>5</div>
        <div className={[style.categoriBox].join(" ")}>6</div>
      </div>
    </div>
  );
};

export default CategoryHome;
