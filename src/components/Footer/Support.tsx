import React, { useContext } from "react";
import { BiSupport } from "react-icons/bi";
import { contextWidth } from "../App";
import IconSupport from "./IconSupport";
import useSupportItem from "../Hooks/useSupportItem";

const Support = () => {
  const property = useContext(contextWidth)!;

  const {support,error,isLoading}=useSupportItem()

  
  return (
    <div
      style={{ height: property.innerWidth < 850 ? "3rem" : "7rem" }}
      className={[
        property.innerWidth < 850
          ? "suppourt  px-3 pb-3 d-flex flex-row align-items-center border-bottom"
          : "w-100 d-flex flex-column justify-content-center align-items-start ",
      ].join(" ")}
    >
      <div
        className={[
          property.innerWidth < 850
            ? "w-100 d-flex flex-row justify-content-center align-items-center"
            : "w-100 d-flex flex-column gap-2 justify-content-center",
        ].join(" ")}
      >
        {property.innerWidth < 850 ? (
          <IconSupport />
        ) : (
          <img className="w-50 object-fit-cover" src={support?.icon} alt="" />
        )}
        {property.innerWidth < 850 ? (
          <p style={{ color: "gray", fontSize: ".8rem" }} className="m-0 pe-1">
            ۷ روز هفته، ۲۴ ساعت
          </p>
        ) : (
          <div className="d-flex flex-row gap-3">
            <p className="p-0 m-0" style={{ fontSize: ".7rem" }}>{support?.number1}</p>
            <p className="p-0 m-0" style={{ fontSize: ".7rem" }}>{support?.number2}</p>
            <p className="p-0 m-0" style={{ fontSize: ".7rem" }}>{support?.text}</p>
          </div>
        )}
      </div>

      {property.innerWidth < 850 && (
        <div className="w-100 h-100  d-flex flex-row justify-content-end">
          <button
            style={{
              borderRadius: "15px",
              background: "#bebcbc",
              color: "#323232",
              fontSize: ".8rem",
            }}
            className="btn border "
          >
            تماس
          </button>
        </div>
      )}
    </div>
  );
};

export default Support;
