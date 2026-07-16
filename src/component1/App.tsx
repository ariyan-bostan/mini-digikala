import React from "react";
import { BrowserRouter } from "react-router";
import style from "./styles/layout.module.css";
import Header from "./Header/Header";
import Layout from "./Layout";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const App = () => {
   
    
    
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        {/* <div className={[style.main].join(" ")}>main</div> */}
        <div className={[style.slider].join(" ")}>footer</div>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
