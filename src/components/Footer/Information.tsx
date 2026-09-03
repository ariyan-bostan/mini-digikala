import { useContext, useState } from "react";
import { contextWidth } from "../App";
import Text from "./Text";
import useInformation from "../Hooks/useInformation";

const Information = () => {
  const [boli, setBoli] = useState(false);
  const property = useContext(contextWidth)!;
    const {list,error,isLoading}= useInformation();
  
  const information = [
    {
      title: "دیجی کالا؛ بزرگترین فروشگاه اینترنتی ایران",
      paragraph: (
        <p>
          دیجی کالا سال‌ها است که به انتخاب اول بسیاری از خریداران اینترنتی
          تبدیل شده است. دیجی کالا به عنوان بزرگ‌ترین و معتبرترین فروشگاه آنلاین
          ایران، شناخته‌شده‌ترین فروشگاه نیز محسوب می‌شود. این فروشگاه آنلاین
          نه‌تنها گسترده‌ترین تنوع کالا را در دسته‌بندی‌های مختلف ارائه می‌دهد،
          بلکه با خدمات بی‌نظیر، ارسال سریع، ضمانت اصل بودن کالا و پشتیبانی
          حرفه‌ای، استاندارد جدیدی در خرید اینترنتی ایران تعریف کرده است. این
          فروشگاه با سال‌ها تجربه و اعتماد مشتریان، کامل‌ترین و بهترین گزینه
          برای خرید آنلاین در ایران محسوب می‌شود. این روزها
          <a className="linkInformation" href="https://bazaar.digify.shop/">
            بازار دیجی کالا
          </a>
          حتی فرصت خرید آسان از فروشگاه های اینستاگرامی را در اختیار شما قرار
          داده است.
        </p>
      ),
    },
    {
      title: "ویژگی های مهم دیجی کالا",
      paragraph: (
        <p>
          یکی از ویژگی‌های مهم در خرید از دیجی کالا، تنوع بی‌نظیر محصولات است.
          این فروشگاه اینترنتی طیف وسیعی از کالاها را در دسته‌های مختلف از جمله
          لوازم دیجیتال، لوازم خانگی، مد و پوشاک، لوازم آرایشی و بهداشتی،
          محصولات سلامت و زیبایی، و بسیاری از محصولات دیگر ارائه می‌دهد. به
          عنوان مثال، اگر به دنبال خرید یا بررسی
          <a
            className="linkInformation"
            href="https://www.digikala.com/search/category-mobile-phone/"
          >
            قیمت گوشی
          </a>
           باشید، دیجی کالا مجموعه‌ای از بهترین گوشی‌ها از برندهای معتبر اپل و
          سامسونگ مانند
          <a
            className="linkInformation"
            href="https://www.digikala.com/tags/iphone-17/"
          >
            آیفون ۱۷
          </a>
          ،
          <a
            className="linkInformation"
            href="https://www.digikala.com/tags/samsung-s25/"
          >
            گوشی S25
          </a>
          ، گوشی‌های مختلف از برند شیائومی مانند
          <a
            className="linkInformation"
            href="https://www.digikala.com/product/dkp-17580036/%DA%AF%D9%88%D8%B4%DB%8C-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-%D8%B4%DB%8C%D8%A7%D8%A6%D9%88%D9%85%DB%8C-%D9%85%D8%AF%D9%84-redmi-note-14-4g-%D8%AF%D9%88-%D8%B3%DB%8C%D9%85-%DA%A9%D8%A7%D8%B1%D8%AA-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-256-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA-%D9%88-%D8%B1%D9%85-8-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA"
          >
            شیائومی نوت ۱۴
          </a>
          و بسیاری از برندهای دیگر را در اختیار شما قرار می‌دهد. همچنین برای
          علاقه‌مندان به لوازم دیجیتال، این فروشگاه اینترنتی انواع لپ تاپ،
          <a
            className="linkInformation"
            href="https://www.digikala.com/search/category-tv2/"
          >
            تلویزیون
          </a>
          ،
          <a
            className="linkInformation"
            href="https://www.digikala.com/search/category-speaker/"
          >
            اسپیکر
          </a>
          ، و هندزفری بلوتوثی با کیفیت بالا را برای خرید آنلاین ارائه می‌دهد.
          دیجی کالا، مقصدی بی‌پایان برای خرید آسان، سریع و مطمئن است. راهی که هر
          آنچه نیاز دارید از
          <a
            className="linkInformation"
            href="https://www.digikala.com/search/category-notebook-netbook-ultrabook/"
          >
            قیمت لپ تاپ
          </a>
          تا یک ایرپاد مطمئن را در اختیار شما قرار می‌دهد. 
        </p>
      ),
    },
    {
      title: "ارسال سریع و مطمئن کالا",
      paragraph: (
        <p>
          یکی از مهم‌ترین دغدغه‌های کاربران خرید آنلاین، زمان تحویل کالا است.
          دیجی کالا برای حل این مشکل، گزینه‌های مختلف ارسال را در نظر گرفته است
          تا کاربران بتوانند بر اساس نیاز خود، روش ارسال مناسب را انتخاب کنند.
          به عنوان مثال، ارسال کالا به صورت تحویل امروز با ارسال سریع دیجی‌کالا،
          از جمله روش‌های خرید سریع از این فروشگاه اینترنتی است. این امکانات
          باعث می‌شود که خریداران بتوانند سفارش خود را در کوتاه‌ترین زمان ممکن
          دریافت کنند. علاوه بر این، در صورتی که کالای خریداری شده از لحاظ کیفیت
          یا هر دلیل دیگری رضایت مشتری را جلب نکرده باشد، دیجی کالا ضمانت بازگشت
          کالا را ارائه می‌دهد. این ویژگی موجب اعتماد بیشتر مشتریان به خرید
          آنلاین از فروشگاه اینترنتی دیجی کالا شده است.
        </p>
      ),
    },
    {
      title: "تخفیف های ویژه و جشنواره ها",
      paragraph: (
        <p>
          دیجی کالا به طور منظم جشنواره‌ها و تخفیف‌های ویژه‌ای را برگزار می‌کند
          که برای مشتریان فرصت خرید کالاهای باکیفیت با قیمت‌های مناسب به همراه
          خواهد داشت. این تخفیف‌ها در ایام خاص مانند
          <a
            className="linkInformation"
            href="https://www.digikala.com/landing/black-friday/"
          >
            بلک فرایدی
          </a>
          یا همان حراج جمعه سیاه،
          <a
            className="linkInformation"
            href="https://www.digikala.com/landing/mothersday/"
          >
            خرید هدیه روز مادر
          </a>
          و
          <a
            className="linkInformation"
            href="https://www.digikala.com/landing/fathersday/"
          >
            کادو روز پدر
          </a>
          ، شب یلدا و جشنواره‌های فصلی تابستان و زمستان توجه بسیاری از خریداران
          را جلب می‌کند. در این جشنواره‌ها، دیجی کالا تخفیف‌های عالی روی محصولات
          مختلف از جمله گوشی‌های موبایل، لپ تاپ‌ها، تلویزیون‌ها، و حتی محصولات
          مناسب سازمانی مثل
          <a
            className="linkInformation"
            href="https://www.digikala.com/tags/yalda-night-gift/"
          >
            پک هدیه یلدا
          </a>
           ارائه می‌دهد. می‌توانید گوشی
          <a
            className="linkInformation"
            href="https://www.digikala.com/tags/iphone-16/"
          >
            ایفون ۱۶
          </a>
          یا گوشی S25 را با تخفیف‌های ویژه خریداری کنید و از قیمت مناسب بهره‌مند
          شوید. دیجی کالا فراتر از یک فروشگاه اینترنتی، یک تجربه خرید مطمئن در
          بین کاربران مختلف بوده است که با ارائه بزرگ‌ترین تنوع کالا، قیمت‌های
          مختلف و خدماتی بی‌نقص، به مقصد اول خریداران آنلاین در ایران تبدیل شده
          است.
        </p>
      ),
    },
  ];
 
  return (
    <div
      className={[
        "w-100 my-4 px-3",
        property.innerWidth > 850 && "d-flex flex-row gap-2",
        "border-bottom pb-3"
      ].join(" ")}
    >
      <div
        className={[property.innerWidth > 850 && "w-50"].join(" ")}
      >
        <div className={[].join(" ")}>
          {!boli ? (
            <Text boli={!boli} information={information[0].title}>
              {list?.paragraph.substring(0, list?.paragraph.length - 50)}
              <span style={{ fontSize: ".7rem", color: "#8d8d8da6" }}>
                {list?.paragraph.substring(list?.paragraph.length - 50)}
              </span>
            </Text>
          ) : (
            <>
              {information.map((item, index) => (
                <Text key={index} boli={!boli} title={item.title}>
                  {item.paragraph}
                </Text>
              ))}
            </>
          )}
        </div>
        <button
          style={{ fontSize: ".7rem" }}
          className="btn border"
          onClick={() => {
            setBoli(!boli);
          }}
        >
          {!boli ? `مشاهده بیشتر` : `بستن`}
        </button>
      </div>
      {property.innerWidth > 850 && (
        <div className={["w-50 d-flex flex-row w-50 gap-4 justify-content-center"].join(" ")}>
            {list?.labelIcon.map((item,index)=>(
                <div key={index} style={{width:"7rem",height:"7rem"}} className="border rounded-2 p-3">
                    <img className="w-100 h-100 overfit-cover" src={item} alt="" />

                </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Information;
