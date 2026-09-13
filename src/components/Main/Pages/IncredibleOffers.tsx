import { useContext, useReducer } from "react";
// import style from "../../Styles/Main/IncredibleOffer.module.css"
import { contextWidth } from "../../App";
import useRunningOutIncredibleProducts from "../../Hooks/useRunningOutIncredibleProducts";
import BackgroundIncredible from "./Incredible/BackgroundIncredible";
import BannerIncredible1 from "./Incredible/BannerIncredible";
import BannerIncredible2 from "./Incredible/BannerIncredible2";
import BoxProductIncredible from "./Incredible/BoxProductIncredible";
import CategoryIncredible from "./Incredible/CategoryIncredible";
import FormFilterIncredible from "./Incredible/FormFilterIncredible";

const initialFilter = {
  category: "همه دسته‌بندی‌ها",
  brand: "برند",
};
const reducerSelectFilter = (
  state = initialFilter,
  action: { type: string; value: string },
) => {
  if (action.type === "category") return { ...state, category: action.value };
  else if (action.type === "brand") return { ...state, brand: action.value };
  return state;
};
const IncredibleOffers = () => {
  const property = useContext(contextWidth)!;

  const [filter, dispatch] = useReducer(reducerSelectFilter, initialFilter);
    console.log(filter);
    
  return (
    <div className="w-100">
      <BackgroundIncredible />
      <CategoryIncredible selectCategory={dispatch} />
      <div
        style={{
          width: "100%",
          height: property.innerWidth < 850 ? "30rem" : "15rem",
        }}
        className={[
          "bannerIncredible  pt-4 px-2 d-flex flex-column gap-1",
        ].join(" ")}
      >
        <BannerIncredible1 />
        <BannerIncredible2 />
      </div>

      <div
        className={[
          property.innerWidth < 850
            ? "mt-4 d-flex flex-column gap-1"
            : "mt-4 d-flex flex-row gap-1",
        ].join(" ")}
      >
        <FormFilterIncredible selectCategory={dispatch} />

        <BoxProductIncredible filter={filter}/>
      </div>
    </div>
  );
};

export default IncredibleOffers;
{
}
{
  /* </div> */
}
