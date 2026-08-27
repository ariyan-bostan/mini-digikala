import React, { useContext, useState } from "react";
import { contextWidth } from "../App";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styleListBrand from "../Styles/Footer/ListBrand.module.css";

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
    <div className="list mt-4 p-3">
      {list.map((item, index) => (
        <div
          key={index}
          onClick={() => {
            if (selectItem === index) setSelectItem(-1);
            else setSelectItem(index);
          }}
          className="listFooter d-flex flex-column border-bottom pt-2 "
        >
          <div className="d-flex flex-row justify-content-between ">
            <p style={{ fontSize: ".8rem" }}>{item.title}</p>
            {selectItem === index ? (
              <IoIosArrowUp className="pe-1" fontSize={"1.5rem"} />
            ) : (
              <IoIosArrowDown className="pe-1" fontSize={"1.5rem"} />
            )}
          </div>
          {selectItem === index && (
            <ul
              className={[
                "list-group w-100 m-0 p-0",
                index === list.length - 1 &&
                  property.innerWidth < 850 &&
                  styleListBrand.listBrand,
              ].join(" ")}
            >
              {item.list.map((item1, index1) => (
                <li
                  style={{ fontSize: ".8rem", color: "gray" }}
                  key={index1}
                  className={[
                    "list-group-item px-0 border-0",
                    index === list.length - 1 &&
                      property.innerWidth < 850 &&
                      styleListBrand.itemList,
                  ].join(" ")}
                >
                  {item1}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ListFooter;
