import { useQuery } from "@tanstack/react-query";
import type { Product } from "../Services/Intefaces";
import axios from "axios";

const useGetProduct = (endPoint: string) => {
  return useQuery<Product[], Error>({
    queryKey: [endPoint],
    queryFn: () => {
        
      return axios
        .get<Product[]>(`https://mini-digikala.onrender.com/${endPoint}`)
        .then((res) => res.data);
    },
  });
};
export default useGetProduct
