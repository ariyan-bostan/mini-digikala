import React, { useContext, useState } from "react";
import { contextWidth } from "../App";
import { IoIosArrowDown, IoIosArrowUp, IoLogoInstagram } from "react-icons/io";
import style from "../Styles/Footer/ListFooter.module.css";
import styleListBrand from "../Styles/Footer/ListBrand.module.css";
import { SiAparat } from "react-icons/si";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import FormEmail from "./FormEmail";
import ItemListFooter from "./ItemListFooter";
import CommunicationRoutes from "./CommunicationRoutes";

const ListFooter = () => {
  const [selectItem, setSelectItem] = useState(-1);
  const property = useContext(contextWidth)!;
  const list = [
    {
      title: "با دیجی کالا",
      list: [
        "اتاق خبر دیجی‌کالا",
        "فروش در دیجی‌کالا",
        "فرصت‌های شغلی",
        "گزارش تخلف در دیجی‌کالا",
        "تماس با دیجی‌کالا",
        "درباره دیجی‌کالا",
      ],
    },
    {
      title: "خدمات مشتریان",
      list: [
        "پاسخ به پرسش‌های متداول",
        "روی‌های بازگرداندن کالا",
        "شرایط استفاده",
        "حریم خصوصی",
        "گزارش باگ",
      ],
    },
    {
      title: "راهنمای خرید از دیجی‌کالا",
      list: ["نحوه ثبت سفارش", "رویه ارسال سفارش", "شیوه پرداخت"],
    },
    {
      title: "شرکای تجاری",
      list: ["1", "2", "3", "4", "5", "6", "8", "9", "10", "11", "12", "13"],
    },
  ];

  return (
    <div
      className={[
        property.innerWidth > 850 && style.containerList,
        property.innerWidth < 850
          ? "list  w-100 mt-1"
          : " d-flex flex-row align-items-center",
      ].join(" ")}
    >
      <div
        className={[
          property.innerWidth < 850
            ? "mt-1 w-100  d-flex flex-column"
            : "w-75 h-75 d-flex flex-row",
        ].join(" ")}
      >
        {list.map((item, index) => (
          <>
            {((property.innerWidth > 850 && index !== list.length - 1) ||
              property.innerWidth < 850) && (
              <div className="listFooter box border-bottom  w-100 d-flex flex-column">
                <div
                  onClick={() => {
                    if (selectItem === index) setSelectItem(-1);
                    else setSelectItem(index);
                  }}
                  className={[
                    style.boxList,
                    property.innerWidth < 850
                      ? "title h-100 px-2 d-flex flex-row justify-content-between align-items-center"
                      : "title h-100 px-2 d-flex flex-row justify-content-center align-items-center",
                  ].join(" ")}
                >
                  <p style={{ fontSize: ".9rem" }} className="p-0 m-0">
                    {item.title}
                  </p>
                  {property.innerWidth < 850 && (
                    <>
                      {selectItem !== index ? (
                        <IoIosArrowDown />
                      ) : (
                        <IoIosArrowUp />
                      )}
                    </>
                  )}
                </div>
                {selectItem === index && property.innerWidth < 850 && (
                  <ItemListFooter items={item.list} />
                )}

                {property.innerWidth > 850 && (
                  <ItemListFooter items={item.list} />
                )}
              </div>
            )}
          </>
        ))}
      </div>
      {property.innerWidth > 850 && <CommunicationRoutes />}
    </div>
  );
};

export default ListFooter;
