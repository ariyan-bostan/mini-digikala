import axios from "axios";
export interface ListNav {
  title: string;
  icon: string;
  linkTo: string;
}
export interface Response {
  listNav: ListNav[];
}

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

class APIClinet<T> {
   endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAllItemNavList1 = () => {
   return api.get<Response>(this.endpoint)
                    .then(res=>res.data.listNav)
};
}
export default APIClinet;
