import React, { useContext } from "react";
import { contextWidth } from "../App";

const LabelFooter = () => {
  const property = useContext(contextWidth)!;
  const labelFooter = [
    {
      title: "امکان تحویل اکسپرس",
      imgLable:
        "https://www.digikala.com/statics/img/svg/footer/express-delivery.svg",
    },
    {
      title: "امکان پرداخت در محل",
      imgLable:
        "https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg",
    },
    {
      title: "۷روز هفته,۲۴ ساعت",
      imgLable: "https://www.digikala.com/statics/img/svg/footer/support.svg",
    },
    {
      title: "هفت روز ضمانت بازگشت",
      imgLable:
        "https://www.digikala.com/statics/img/svg/footer/days-return.svg",
    },
    {
      title: "ضمانت اصل بودن کالا",
      imgLable:
        "https://www.digikala.com/statics/img/svg/footer/original-products.svg",
    },
  ];

  return (
    <>
      {property.innerWidth > 850 && (
        <div
          style={{ height: "7rem" }}
          className="labelFooter w-100 d-flex gap-1 flex-row"
        >
          {labelFooter.map((item, index) => (
            <div
              key={index}
              className="box w-25 h-100 d-flex  flex-column align-items-center justify-content-center"
            >
              <img src={item.imgLable} alt="" />
              <p style={{ fontSize: ".7rem", color: "GrayText" }}>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default LabelFooter;
