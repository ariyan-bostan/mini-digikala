import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export interface UserNormal {
  "id-user": string;
  "type-user": string;
  "number-phone": string;
  name: string;
  "last-name": string;
  "user-name": string;
  password: string;
  "box-product": string[];
}

const useGetListNormalUser = () => {
  const {
    data: listAdminUser,
    error,
    isLoading,
  } = useQuery<UserNormal[], Error>({
    queryKey: ["list-admin user"],
    queryFn: () => {
      return axios
        .get<UserNormal[]>("http://localhost:3000/User-Admin")
        .then((res) => res.data);
    },
  });
  return { listAdminUser, error, isLoading };
};
export default useGetListNormalUser;
