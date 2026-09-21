import { useMutation } from "@tanstack/react-query";
import type { UserNormal } from "./useGetListNormalUser";
import axios from "axios";

const useAddNormalUser = () => {
    
  return useMutation<UserNormal, Error, UserNormal>({
    mutationFn: (item: UserNormal) => {
      console.log("success");
      return axios
        .post("http://localhost:3000/normalUsers", item)
        .then((res) => res.data);
    },
    onSuccess: (savedItem: UserNormal, newItem) => {},
    onError:(error,newItem,context)=>{

    },
    onSettled:(saveditem,newItem)=>{

    }
  });
};
export default useAddNormalUser;
