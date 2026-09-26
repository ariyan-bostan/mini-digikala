import { useContext } from "react";
import { contextWidth } from "../App";
import useBestSeller from "../Hooks/useBestSeller";
import Bestseller from "./OrderProduct";
import TitleBestSeller from "./TitleOrderProduct";
interface Props {
  title: string;
}
const BoxOrderedProducts = ({ title }: Props) => {
  const property = useContext(contextWidth)!;
  const { data: list, error, isLoading } = useBestSeller(title);

  return (
    <div
      style={{ height: "20rem", background: "white" }}
      className={[
        property?.innerWidth > 850 && "border rounded-4",
        "w-100 mt-2",
      ].join(" ")}
    >
      <TitleBestSeller title={list?.title} />
      <Bestseller product={list?.product} />
    </div>
  );
};

export default BoxOrderedProducts;
