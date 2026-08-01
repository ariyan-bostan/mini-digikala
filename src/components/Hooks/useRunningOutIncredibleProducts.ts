import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { itemRunningOutIncredibleProducts } from "../Services/APIClient";
import APIClient from "../Services/APIClient";

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
