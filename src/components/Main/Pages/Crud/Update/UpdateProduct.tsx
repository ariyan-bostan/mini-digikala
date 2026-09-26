import React, { useState } from "react";
import type { Product } from "../../../../Services/Intefaces";
import FindProduct from "./FindProduct";
interface TypeContextUpdate {
  stateUpdateProduct: TypeStateUpdateProduct;
  setStateUpdateProduct: (item: TypeStateUpdateProduct) => void;
  productU: Product;
  setProductU: (item: Product) => void;
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
  return (
    <div className="w-100">
      <contextUpdateProduct.Provider
        value={{
          stateUpdateProduct,
          setStateUpdateProduct,
          productU,
          setProductU,
        }}>
        {!stateUpdateProduct.findId && <FindProduct />}
        {stateUpdateProduct.findId && !stateUpdateProduct.updateProduct && (
          <div>hi</div>
        )}
      </contextUpdateProduct.Provider>
    </div>
  );
};

export default UpdateProduct;
