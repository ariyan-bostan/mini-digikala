import React, { useContext, useEffect, useState } from "react";
import style from "../Styles/Layout.module.css";

import { Link } from "react-router";
import SupportAndAPK from "./SupportAndAPK";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { contextWidth } from "../App";
import ListFooter from "./ListFooter";
import Information from "./Information";
import LabelFooter from "./LabelFooter";
import TextAdmin from "./TextAdmin";
import ListBrand from "./ListBrand";



// https://www.digikala.com/statics/img/png/Logo.webp
const Footer = () => {
  const [selectItem, setSelectItem] = useState(-1);
  const property=useContext(contextWidth)!;

  
  return (
    <div className={[style.footer].join(" ")}>
      <SupportAndAPK />
      <LabelFooter />
      <ListFooter />
      <Information />
      <TextAdmin />
      {property.innerWidth>850&& <ListBrand />}

    </div>
  );
};

export default Footer;
