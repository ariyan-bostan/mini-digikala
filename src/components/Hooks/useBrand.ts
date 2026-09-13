import { useQuery } from "@tanstack/react-query"
import axios from "axios"
interface RunningOutIncredibleProducts {
  brands: string[];
}
interface ResponseBrands {
  running_out_incredible_products: RunningOutIncredibleProducts;
}

const useBrand=()=>{
    const {data:listBrands,error,isLoading}=useQuery<string[],Error>({
        queryKey:["brand"],
        queryFn:()=>{
            return axios.get<ResponseBrands>("http://localhost:3000/Main")
                            .then(res=>res.data.running_out_incredible_products.brands)
        }
    })
    console.log(listBrands);
    
}   
export default useBrand