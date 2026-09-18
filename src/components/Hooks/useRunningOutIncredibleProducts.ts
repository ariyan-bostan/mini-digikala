import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../Services/APIClient";
import type { itemRunningOutIncredibleProducts } from "../Services/Intefaces";

const apiClient=new APIClient("Main");

const useRunningOutIncredibleProducts = () => {
  const {data:objectProduct,error,isLoading}= useQuery<itemRunningOutIncredibleProducts,Error>({
    queryKey:["runningOutIncredibleProducts"],
    queryFn:()=>{
        return apiClient.getItemRunningOutIncredibleProducts();
    }
  });  
  return { objectProduct, error, isLoading };
};
export default useRunningOutIncredibleProducts;
