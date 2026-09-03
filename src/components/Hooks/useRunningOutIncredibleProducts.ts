import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../Services/APIClient";
import type { itemRunningOutIncredibleProducts } from "../Services/Intefaces";

const apiClient=new APIClient("Main");

const useRunningOutIncredibleProducts = () => {
  return useQuery<itemRunningOutIncredibleProducts,Error>({
    queryKey:["runningOutIncredibleProducts"],
    queryFn:()=>{
        return apiClient.getItemRunningOutIncredibleProducts();
    }
  });  
};
export default useRunningOutIncredibleProducts;
