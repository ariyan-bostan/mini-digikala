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
        .get<UserNormal[]>("https://mini-digikala.onrender.com/User-Admin")
        .then((res) => res.data);
    },
  });
  return { listUser, error, isLoading };
};
export default useGetListAdminUser;
