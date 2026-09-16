import React, { useState } from "react";
import style from "./Styles/Layout.module.css";
import Header from "./Header/Header";
import useNavList1 from "./Hooks/useNavList1";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Main/Home";
import IncredibleOffers from "./Main/Pages/IncredibleOffers";
import Supermarket from "./Main/Pages/Supermarket";
import Profile from "./Main/Pages/Profile";
import Searching from "./Main/Pages/Searching";
import NotPage from "./Main/Pages/NotPage";
import Notification from "./Main/Pages/Notification";
import useWidthWindow from "./Hooks/useWidthWindow";
import Footer from "./Footer/Footer";
import type { ItemNav1 } from "./Services/Intefaces";
import Products from "./Main/Pages/Products";

export interface ValueHeader {
  list: ItemNav1[] | undefined;
  error: Error | null;
  isLoading: boolean;
}
interface TypeContextWidth {
  innerWidth: number;
}
export const contextWidth = React.createContext<TypeContextWidth | undefined>(
  undefined,
);

export const ContextHeader = React.createContext<ValueHeader | undefined>(
  undefined,
);
const App = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useWidthWindow(setInnerWidth);

  const { data: list, error, isLoading } = useNavList1();

  return (
    <BrowserRouter>
      <contextWidth.Provider value={{ innerWidth }}>
        <div dir="rtl" className={[style.container].join(" ")}>
          <ContextHeader value={{ list, error, isLoading }}>
            <Header />
          </ContextHeader>

          <div className={[style.containerMainFooter].join(" ")}>
            <div className={[style.main].join(" ")}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/incredible-Offers"
                  element={<IncredibleOffers />}
                />
                <Route path="/supermarket" element={<Supermarket />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/profile/notification"
                  element={<Notification />}
                />
                <Route path="/searching" element={<Searching />} />
                <Route path="/products/:title" element={<Products />} />
                <Route path="/*" element={<NotPage />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </div>
      </contextWidth.Provider>
    </BrowserRouter>
  );
};

export default App;
