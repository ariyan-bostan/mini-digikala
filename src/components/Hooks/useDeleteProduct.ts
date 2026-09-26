import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Product } from "../Services/Intefaces";
import axios from "axios";
interface TypeItem {
  idUser: string;
  endPoint: string;
}
const useDeleteProduct = () => {
    const queryClient=useQueryClient();


  return useMutation<Product[], Error, TypeItem>({
    mutationFn: (item: TypeItem) => {
        console.log("ss");
        
      return axios
        .delete(`https://mini-digikala.onrender.com/${item.endPoint}/${item.idUser}`)
        .then((res) => res.data);
    }
  });
};
export default useDeleteProduct
