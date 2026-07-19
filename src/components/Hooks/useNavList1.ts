import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import type { ItemNav1 } from "../Services/APIClient";
import APIClient from "../Services/APIClient";
const apiClient=new APIClient("Header");
const useNavList1=()=>{
    return useQuery<ItemNav1[],Error>({
        queryKey:["listNav1"],
        queryFn:()=>{
            return apiClient.getListNav1();
        }
    });    
}
export default useNavList1