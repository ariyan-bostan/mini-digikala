import React, { useContext } from "react";
import { contextWidth } from "../../../App";

const CategoryIncredible = () => {
    const property=useContext(contextWidth)!;
  const listCategori = [
    {
      title: "همه دسته‌بندی‌ها",
      image:
        "https://dkstatics-public.digikala.com/digikala-static/ca295514617381312953d0dd1176a4e67b66a337_1683024994.png",
    },
    {
      title: "موبایل",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/09a98a13c782e12a245930b4515d243b17734a33_1741809612.jpg",
    },

    {
      title: "اسباب بازی",
      image: "https://dkstatics-public.digikala.com/digikala-categories/55.png",
    },

    {
      title: "کالای دیجیتال",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/151ec29bae111afd3b6a0e71cec5c4c26f1c3014_1741809481.jpg",
    },

    {
      title: "طلا و نقره",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/78135af4274ad7b7fcdaec7e5912689e5f5db96a_1741809234.jpg",
    },

    {
      title: "مد و پوشاک",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/b3d4eaefebe67ab8d849296ea2e7e113cde8094c_1741809593.jpg",
    },

    {
      title: "خانه و آشپزخانه",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/8a042388b93c5116604f35092a1fb35f8f0756be_1741809216.jpg",
    },

    {
      title: "کتاب، لوازم تحریر و هنر",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/0cdf9c404e509371c3177a334be948a7e500419c_1741809516.jpg",
    },
    {
      title: "پت شاپ",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/517.png",
    },

    {
      title: "لوازم خانگی برقی",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/d825f64f509cd5067a9022528c465e8ca705f60d_1741809575.jpg",
    },

    {
      title: "مادر و کودک",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/6f5284dccdb280616bbfe58533ecc483de4639af_1741809544.jpg",
    },

    {
      title: "سلامت و پزشکی",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/e8e752bf1308c7db74298d80dbb3b95b4228a15c_1767701721.jpg",
    },

    {
      title: "آرایشی و بهداشتی",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/c2957abd1f437415eceb6428c7dce93ef3ee7495_1709022473.png",
    },

    {
      title: "ورزش و سفر",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/4d4582205d0d5045c2bd94c5e910bbb49ae4fd4e_1741809667.jpg",
    },

    {
      title: "ابزار آلات و تجهیزات",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/fb6303218362cd2c48b40fef5da89ad33a5c04d7_1741722838.jpg",
    },

    {
      title: "خودرو و موتورسیکلت",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/03552aa1293fec9f43477814ca62afdacdac18e3_1741809630.jpg",
    },

    {
      title: "محصولات بومی و محلی",
      image:
        "https://dkstatics-public.digikala.com/digikala-categories/9a4dfac524f8a865f9f69e38d5434fa69fe63e3b_1741809651.jpg",
    },
  ];
  return (
    <div
      style={{ width:property.innerWidth>850?"85%":"100%",height: "10rem", overflow: "scroll", scrollbarWidth: "none" }}
      className={" d-flex flex-row gap-4 p-1 align-items-center"}
    >
      {listCategori.map((item, index) => (
        <div
          key={index}
          style={{ width: "7rem", height: "90%", flexShrink: 0 }}
          className=" d-flex flex-column align-items-center"
        >
          <img
            style={{ width: "100%", height: "90%", objectFit: "cover" }}
            src={item.image}
            alt=""
          />
          <p style={{ fontSize: ".8rem" }} className="mt-1">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryIncredible;
