import React, { useState } from "react";
import type { Product } from "../../../../Services/Intefaces";
import SelectSubject from "./SelectSubject";
import CreateNameProduct from "./CreateNameProduct";
import Createlayer from "./CreatelayerProduct";
import CreateImageProduct from "./CreateImageProduct";
import CreateColorProduct from "./CreateColorProduct";
import CreatePriceProduct from "./CreatePriceProduct";
interface TypeCheckState {
  selectTitle: boolean;
  nameProduct: boolean;
  layer: boolean;
  images: boolean;
  colors: boolean;
  price: boolean;
}
interface TypeContextCreateProduct {
  title: string;
  setTitle: (item: string) => void;
  newProduct: Product | undefined;
  setNewProduct: (item: Product) => void;
  checkState: TypeCheckState;
  setCheckState: (item: TypeCheckState) => void;
}
export const contextCreateProduct = React.createContext<
  TypeContextCreateProduct | undefined
>(undefined);
const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [newProduct, setNewProduct] = useState<Product|undefined>();
  const [checkState, setCheckState] = useState<TypeCheckState>({
    selectTitle: false,
    nameProduct: false,
    layer: false,
    images: false,
    colors: false,
    price: false,
  });
  return (
    <div className="w-100">
      <contextCreateProduct.Provider
        value={{
          title,
          setTitle,
          newProduct,
          setNewProduct,
          checkState,
          setCheckState,
        }}>
        {!checkState.selectTitle && <SelectSubject />}
        {checkState.selectTitle && !checkState.nameProduct && (
          <CreateNameProduct />
        )}
        {checkState.selectTitle &&
          checkState.nameProduct &&
          !checkState.layer && <Createlayer />}
        {checkState.selectTitle &&
          checkState.nameProduct &&
          checkState.layer &&
          !checkState.images && <CreateImageProduct />}
        {checkState.selectTitle &&
          checkState.nameProduct &&
          checkState.layer &&
          checkState.images &&
          !checkState.colors && <CreateColorProduct />}
        {checkState.selectTitle &&
          checkState.nameProduct &&
          checkState.layer &&
          checkState.images &&
          checkState.colors &&
          !checkState.price && <CreatePriceProduct />}
      </contextCreateProduct.Provider>
    </div>
  );
};

export default CreateProduct;
