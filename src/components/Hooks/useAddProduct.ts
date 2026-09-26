import { useMutation } from "@tanstack/react-query"
import type { Product, productItem, } from "../Services/Intefaces"
import axios from "axios"
import APIClient from "../Services/APIClient"
interface TypeInputProduct{
    endPoint:string,
    newProduct:Product
}
const useAddProdut=()=>{
    return useMutation<Product[],Error,TypeInputProduct>({
        mutationFn:(newItem:TypeInputProduct)=>{
            return axios.post<Product[]>(`https://mini-digikala.onrender.com/${newItem.endPoint}`,newItem.newProduct)
                            .then(res=>res.data)
        },
        onSuccess:(savedItem:Product[],newItem:TypeInputProduct)=>{
            console.log("success");
            
        }
    })
}
export default useAddProdut