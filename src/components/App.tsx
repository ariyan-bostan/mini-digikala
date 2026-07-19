import React from "react";
import style from "./Styles/Layout.module.css";
import Header from "./Header/Header";
import useNavList1 from "./Hooks/useNavList1";
import type { ItemNav1 } from "./Services/APIClient";
export interface ValueHeader{
    list:ItemNav1[]|undefined,
    error:Error|null,
    isLoading:boolean
}
export const ContextHeader = React.createContext<ValueHeader | undefined>(undefined);
const App = () => {
  const { data:list, error, isLoading } = useNavList1();
  console.log("kir",list);
  
  return (
    <div dir="rtl" className={[style.container].join(" ")}>
      <ContextHeader value={{list,error,isLoading}}>
        <Header />
      </ContextHeader>
      <div className={[style.main].join(" ")}>main</div>
      <div className={[style.footer].join(" ")}>footer</div>
    </div>
  );
};

export default App;
