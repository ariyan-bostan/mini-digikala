import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { UserNormal } from "./useGetListNormalUser";


const useGetListAdminUser = () => {
  const {
    data: listUser,
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
  return { listUser, error, isLoading };
};
export default useGetListAdminUser;
