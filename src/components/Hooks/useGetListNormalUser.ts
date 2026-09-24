import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { Product, ProductRunningOut } from "../Services/Intefaces";
export interface UserNormal {
  "id-user": string;
  "type-user": string;
  "number-phone": string;
  name: string;
  "last-name": string;
  "user-name": string;
  password: string;
  "box-product": (Product | ProductRunningOut)[];
  id?: string;
}

const useGetListNormalUser = () => {
  const {
    data: listUser,
    error,
    isLoading,
  } = useQuery<UserNormal[], Error>({
    queryKey: ["list-normal user"],
    queryFn: () => {
      return axios
        .get<UserNormal[]>("http://localhost:3000/normalUsers")
        .then((res) => res.data);
    },
  });
  return { listUser, error, isLoading };
};
export default useGetListNormalUser;
