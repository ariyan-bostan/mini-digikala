import React, { useState } from "react";
import style from "./Styles/Layout.module.css";
import Header from "./Header/Header";
import useNavList1 from "./Hooks/useNavList1";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
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
import InformationProduct from "./Main/Pages/InformationProduct";
import Login from "./Main/Pages/Inputs/Login";
import Signup from "./Main/Pages/Inputs/Signup";
import { boolean } from "zod";

export interface ValueHeader {
  list: ItemNav1[] | undefined;
  error: Error | null;
  isLoading: boolean;
}
interface TypeContextWidth {
  innerWidth: number;
}
interface TypeCheckInputUser {
  checkInputUser: boolean;
  setCheckInputUser: (item: boolean) => void;
}
interface TypeUser {
  typeUsers: string;
  setTypeUsers: (item: string) => void;
}
export const contextWidth = React.createContext<TypeContextWidth | undefined>(
  undefined,
);

export const ContextHeader = React.createContext<ValueHeader | undefined>(
  undefined,
);

export const contextTypeUser = React.createContext<TypeUser | undefined>(
  undefined,
);

export const contextCheckInputUser = React.createContext<
  TypeCheckInputUser | undefined
>(undefined);

const App = () => {
  const [checkInputUser, setCheckInputUser] = useState(false);

  const [typeUsers, setTypeUsers] = useState("");
  

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useWidthWindow(setInnerWidth);

  const { data: list, error, isLoading } = useNavList1();

  return (
    <BrowserRouter>
      <contextWidth.Provider value={{ innerWidth }}>
        <contextCheckInputUser.Provider
          value={{ checkInputUser, setCheckInputUser }}
        >
          <contextTypeUser.Provider value={{ typeUsers, setTypeUsers }}>
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
                    <Route
                      path="/profile"
                      element={checkInputUser ? <Profile /> : <Login />}
                    />
                    <Route path="/profile/profileInput" element={<Signup />} />
                    <Route
                      path="/profile/profileInput/login"
                      element={<Login />}
                    />
                    <Route
                      path="/profile/profileInput/signup"
                      element={<Signup />}
                    />
                    
                    <Route
                      path="/profile/notification"
                      element={checkInputUser ? <Profile /> : <Login />}
                    />
                    <Route
                      path="/profile/user-admin"
                      element={
                        checkInputUser ? (
                          <Profile />
                        ) : (
                          <Login typeUser="user-admin" />
                        )
                      }
                    />
                    <Route
                      path="/searching"
                      element={checkInputUser ? <Searching /> : <Login />}
                    />
                    <Route path="/products/:title" element={<Products />} />
                    <Route
                      path="/products/informationProduct/:typeObject/:title/:titleProduct"
                      element={<InformationProduct />}
                    />
                    <Route
                      path="/products/incredible-Offers/:typeObject/:title/:titleProduct"
                      element={<InformationProduct />}
                    />
                    <Route path="/*" element={<NotPage />} />
                  </Routes>
                </div>

                <Footer />
              </div>
            </div>
          </contextTypeUser.Provider>
        </contextCheckInputUser.Provider>
      </contextWidth.Provider>
    </BrowserRouter>
  );
};

export default App;
