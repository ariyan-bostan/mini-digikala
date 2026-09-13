import React, { useContext } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { contextWidth } from "../../../App";

const BannerIncredible1 = () => {
    const property=useContext(contextWidth)!;
    const bannerIncredible1 = {
    icon: "https://www.digikala.com/statics/img/png/amazing/fresh.png",
    titleImg:
      "https://www.digikala.com/statics/img/svg/amazing/fresh-incredible-offer.svg",
    text: "تا ۷۰٪ تخفیف",
    background:
      "https://www.digikala.com/statics/img/svg/typography/freshPattern.svg",
  };
  return (
    <div
      style={{
        background: `url(${bannerIncredible1.background}) no-repeat , #eaeaea`,
        backgroundSize: "contain",
        backgroundPositionY:"center",
        borderRadius: "10px",
      }}
      className={[
        property.innerWidth < 850
          ? "border w-100 h-50 d-flex flex-column"
          : "border w-100 h-50 d-flex flex-row",
      ].join(" ")}
    >
      <div
        className={[
          property.innerWidth < 850
            ? "h-50 d-flex flex-column "
            : "w-50 h-100 d-flex flex-row align-items-center",
        ].join(" ")}
      >
        <div className="w-100 d-flex flex-row p-1">
          <img
            style={{
              width: property.innerWidth > 850 ? "3rem" : "",
              height: property.innerWidth > 850 ? "3rem" : "",
            }}
            src={bannerIncredible1.icon}
            alt=""
          />
          <img
            style={{
              width: "15rem",
              height: property.innerWidth > 850 ? "3rem" : "",
            }}
            src={bannerIncredible1.titleImg}
            alt=""
          />
        </div>
        <div className={["w-100 pe-4 "].join(" ")}>
          <div
            style={{
              width: "7rem",
              borderRadius: "10px",
              background: "green",
            }}
            className=" mt-2"
          >
            <p style={{ color: "white" }} className="px-2 py-1">
              {bannerIncredible1.text}
            </p>
          </div>
        </div>
      </div>
      <div
        className={[
          property.innerWidth < 850
            ? "w-100 h-50 d-flex flex-row justify-content-end align-items-center"
            : "w-50 h-100 d-flex flex-row justify-content-end align-items-center",
        ].join(" ")}
      >
        <div
          style={{
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            background: "white",
          }}
          className="d-flex justify-content-center align-items-center ms-2"
        >
          <FaArrowLeft fontSize={20} />
        </div>
      </div>
    </div>
  );
};

export default BannerIncredible1;
