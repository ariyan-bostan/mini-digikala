import React, { useState } from "react";
import type { Product } from "../../../../Services/Intefaces";
import ChangeProduct from "./ChangeProduct";
import FindProduct from "./FindProduct";
import { Toaster } from "react-hot-toast";
interface TypeContextUpdate {
  stateUpdateProduct: TypeStateUpdateProduct;
  setStateUpdateProduct: (item: TypeStateUpdateProduct) => void;
  productU: Product;
  setProductU: (item: Product) => void;
  selectSubject:string;
  setSelectSubject:(item:string)=>void
}

interface TypeStateUpdateProduct {
  findId: boolean;
  updateProduct: boolean;
}
export const contextUpdateProduct = React.createContext<
  TypeContextUpdate | undefined
>(undefined);
const UpdateProduct = () => {
  const [stateUpdateProduct, setStateUpdateProduct] =
    useState<TypeStateUpdateProduct>({
      findId: false,
      updateProduct: false,
    });
  const [productU, setProductU] = useState<Product>({
    title: "",
    layer: {
      brand: "",
      category: "",
      dimension9: 0,
    },
    images: { mainImg: "", listImg: [] },
    theme: { title: "", code: "" },
    price: { selling_price: 0, rrp_price: 0, percent: 0 },
    attributes: [],
  });
   const [selectSubject, setSelectSubject] = useState(
      " ویتامین‌ها و مواد معدنی",
    );
  return (
    <div className="w-100">
              <Toaster position="top-center" reverseOrder={false} />{" "}

      <contextUpdateProduct.Provider
        value={{
          stateUpdateProduct,
          setStateUpdateProduct,
          productU,
          setProductU,
          selectSubject,
          setSelectSubject
        }}>
        {!stateUpdateProduct.findId && <FindProduct />}
        {stateUpdateProduct.findId && !stateUpdateProduct.updateProduct && (
          <ChangeProduct />
        )}
      </contextUpdateProduct.Provider>
    </div>
  );
};

export default UpdateProduct;
