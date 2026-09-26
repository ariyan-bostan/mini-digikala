import { useContext } from "react";
import { GiPolarStar } from "react-icons/gi";
import { contextWidth } from "../App";
import usePopularBrand from "../Hooks/usePopularBrand";

const PopularBrand = () => {
  const property=useContext(contextWidth)!;
  const { data: list, error, isLoading } = usePopularBrand();
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "20px",
        overflow: "hidden",
      }}
      className={[property.innerWidth>850&&"border rounded-2","py-2"].join(" ")}
    >
      <div className="d-flex flex-row">
        <GiPolarStar fontSize={30} color="yellow" />
        <p>محبوب‌ترین برندها</p>
      </div>
      <div
        style={{ overflow: "scroll hidden", scrollbarWidth: "none" }}
        className="d-flex flex-row pe-2 gap-2"
      >
        {list?.map((item, index) => (
          <div 
            key={index}
            style={{ width: "6rem", height: "7rem" }}
            className="flex-shrink-0 rounded-3 overflow-hidden border"
          >
            <img src={item.logo} style={{ height: "80%" }} className="w-100 bg-warning object-fit-cover" />
            <div
              style={{ height: "20%" }}
              className="d-flex flex-row justify-content-center"
            >
              <p style={{fontSize:".7rem",color:"gray"}}>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBrand;
