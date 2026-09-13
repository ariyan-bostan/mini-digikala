import React, { useContext } from "react";
import { contextWidth } from "../../../App";

const BannerIncredible2 = () => {
    const property=useContext(contextWidth)!;
  return (
    <div
      style={
        property.innerWidth > 850
          ? {
              background: `url(${"https://dkstatics-public.digikala.com/digikala-admin-landing/b6d7529f01e4844a5465c3b25fef84076038ebf1_1673775310.svg"}) no-repeat , #eaeaea`,
              backgroundSize: "contain",
              borderRadius: "10px",
            }
          : {
              background: ` #eaeaea`,
              borderRadius: "10px",
            }
      }
      className={[
        "h-50 w-100",
        property.innerWidth < 850
          ? "d-flex flex-column align-items-center"
          : "d-flex flex-row ",
      ].join(" ")}
    >
      <div
        className={[
          "d-flex flex-row justify-content-center align-items-center gap-2",
          property.innerWidth > 850 ? "w-25 h-100 " : "w-100 h-50",
        ].join(" ")}
      >
        <img
          style={{ width: "1.5rem" }}
          src="https://dkstatics-public.digikala.com/digikala-admin-landing/826821839e0d99ee1431bc4e73df1f2b64e09d70_1673773734.svg"
          alt=""
        />
        <p className="m-0 p-0" style={{ color: "#860084" }}>
          ویژه اعضای پلاس
        </p>
      </div>
      <div
        className={[
          "d-flex justify-content-center",
          property.innerWidth > 850 ? "w-75 h-100" : "w-100 h-50",
        ].join(" ")}
      >
        <img
          className="w-100 h-100"
          src="https://dkstatics-public.digikala.com/digikala-admin-landing/69d8a98d8bdddb8f97c422324b1ff3c0243ed550_1673773973.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default BannerIncredible2;
