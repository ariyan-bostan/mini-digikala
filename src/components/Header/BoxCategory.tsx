import React from "react";
import { BsList } from "react-icons/bs";

const BoxCategory = () => {
  return (
    <div className="border-start ps-2 d-flex flex-row gap-2 align-items-center">
      <BsList />
      <p className="p-0 m-0">دسته‌بندی کالاها</p>
    </div>
  );
};

export default BoxCategory;
