import { useQuery } from "@tanstack/react-query"
import type { Product } from "../Services/Intefaces"
import axios from "axios";

const useRunningOutIncredibleProducts1=()=>{
    return useQuery<Product[], Error>({
      queryKey: ["useRunningOutIncredibleProducts1"],
      queryFn:()=>{
        return axios.get<Product[]>(
          "http://localhost:3000/running_out_incredible_products",
        ).then(res=>res.data);
      }
    });
}
export default useRunningOutIncredibleProducts1