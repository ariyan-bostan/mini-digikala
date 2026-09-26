import React from 'react'
import { Link } from 'react-router'

const NotPage = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1
        className="text-danger m-0 p-0"
        style={{ fontSize: "10rem", fontWeight: "bolder" }}>
        404
      </h1>
      <p className="text-danger " style={{ fontSize: "1.5rem" }}>
        صفحه یافت نشد
      </p>
      <Link to={"/"} className="btn btn-danger">
        برگشت به صفحه نخست
      </Link>
    </div>
  );
}

export default NotPage