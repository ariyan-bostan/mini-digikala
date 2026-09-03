import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import type { ListFooter } from "../Services/APIClient";
import APIClient from "../Services/APIClient";

const apiClient=new APIClient("Footer");

const useListFooter=()=>{
    const {data:list,error,isLoading}=useQuery<ListFooter[],Error>({
        queryKey:["list-footer"],
        queryFn:()=>{
            return apiClient.getListBrandFooter();
        }
    });

    return {list,error,isLoading}
    
}
export default useListFooter