import { useMutation } from "@tanstack/react-query"
import type { Product } from "../Services/Intefaces"
import axios from "axios"
import { success } from "zod"
interface TypeInput{
    endpoint:string,
    idProduct:string,
    itemUpdate:Product
}
const useApdateProduct=()=>{
    return useMutation<Product[],Error,TypeInput>({
        mutationFn:(item:TypeInput)=>{
            console.log(item);
            
            return axios.patch(`http://localhost:3000/${item.endpoint}/${item.idProduct}`,item.itemUpdate)
                        .then(res=>res.data)
        },
        onSuccess:(savedItem:Product[],newItem:TypeInput)=>{
            console.log("succ");
            
        },
        onError:(error,item)=>{
            console.log("err");
            
        }
    })
}
export default useApdateProduct