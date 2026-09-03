import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import APIClient, { type LabelFooter } from "../Services/APIClient"

const apiClient=new APIClient("Footer");

const useLabelFooter=()=>{
    const {data:list,error,isLoading}=useQuery<LabelFooter[],Error>({
        queryKey:["label-footer"],
        queryFn:()=>{
            return apiClient.getLabelFooter()
        }
    })
    return {list,error,isLoading}
    
}
export default useLabelFooter