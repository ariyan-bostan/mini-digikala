import React from 'react'

const CreatePriceProduct = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="form pe-4">
      <div className="my-3 me-2">
        <label
          style={{ color: "#8f8d8d", fontSize: ".8rem" }}
          className=""
          htmlFor="">
          موضوع را انتخاب کن:{" "}
        </label>
        <select
          className="form-select w-50"
          onChange={(e) => {
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
      <button
        onClick={() => {
         
        }}
        className="btn btn-danger me-4 mb-3">
        ادامه
      </button>
    </form>
  );
}

export default CreatePriceProduct