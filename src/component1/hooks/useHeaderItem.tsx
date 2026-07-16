import { useQuery } from "@tanstack/react-query";
import ListNav1 from "../Header/ListNav1";
import axios from "axios";
import APIClinet, { type ListNav, type Response } from "../api/APIClient";
import { data } from "react-router";



const apiClient = new APIClinet("Header");

const useHeaderItem = () => {

  let {data:list,error,isLoading}=useQuery<ListNav[],Error>({
    queryKey:["aa"],
    queryFn:()=>{
        return apiClient.getAllItemNavList1()
    }
  })
  console.log("kir",list);
  
  return {list,error,isLoading}
  
  
};
export default useHeaderItem;
