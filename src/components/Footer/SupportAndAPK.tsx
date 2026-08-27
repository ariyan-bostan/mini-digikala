import React, { useContext } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import style from "../Styles/Layout.module.css";
import ButtonTop from "./ButtonTop";
import Support from "./Support";
import APK from "./APK";
import { contextWidth } from "../App";

const SupportAndAPK = () => {
  const property = useContext(contextWidth)!;
  return (
    <div
      className={["container  w-100 d-flex",
        property.innerWidth < 850
          ? "flex-column p-0"
          : "flex-row-reverse",
      ].join(" ")}
    >
      <ButtonTop />
      <div className={[property.innerWidth<850?"w-100":"w-50","support d-flex flex-column"].join(" ")}>
        <Support />
        {property.innerWidth<850&& <APK />}
      </div>
    </div>
  );
};

export default SupportAndAPK;
