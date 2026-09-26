import React, { useContext, useState } from 'react'
import { contextCreateProduct } from './CreateProduct';
import { contextWidth } from '../../../../App';

const SelectSubject = () => {
    const property=useContext(contextWidth)!;
    const resault=useContext(contextCreateProduct)!;
    const [messageError,setMessage]=useState("")

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form pe-4">
        {messageError && <p className='mt-2 text-danger'>{messageError}</p>}
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor="">
          موضوع را انتخاب کن:{" "}
        </label>
        <select
          className={[property.innerWidth<850?"form-select w-50":"form-select w-25"].join(" ")}
          onChange={(e) => {
            if (e.target) resault.setTitle(e.target.value);
          }}>
          <option value="">موضوع را انتخاب کن</option>
          <option style={{ background: "red" }} value="ویتامین‌ها و مواد معدنی">
            ویتامین‌ها و مواد معدنی
          </option>
          <option value="مانیتور">مانیتور</option>
          <option value="گوشی موبایل">گوشی موبایل</option>
          <option value="دفتر">دفتر</option>
        </select>
      </div>
      <button onClick={() => {
        if(resault.title)
            resault.setCheckState({ ...resault.checkState, selectTitle:true});
        else
            setMessage("یکی از موضوع ها را انتخاب کن")
            
      }} className="btn btn-danger me-4 mb-3">
        ادامه
      </button>
    </form>
  );
}

export default SelectSubject