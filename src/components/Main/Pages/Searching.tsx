import { Link } from "react-router"

const Searching = () => {
  return (
    <div className="w-100 d-flex flex-column align-items-center">
        <h1
        className="text-danger m-2 p-0"
        style={{ fontSize: "2rem", fontWeight: "bolder" }}>
        به زودی فعال میشود
      </h1>
     
      <Link to={"/"} className="btn btn-danger">
        برگشت به صفحه نخست
      </Link>
    </div>
  )
}

export default Searching