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

interface ResponseNormalUser {
  user: UserNormal[];
}

const useGetListNormalUser = () => {
  const {
    data: listNormalUser,
    error,
    isLoading,
  } = useQuery<UserNormal[], Error>({
    queryKey: ["list-normal user"],
    queryFn: () => {
      return axios
        .get<ResponseNormalUser>("http://localhost:3000/users")
        .then((res) => res.data.user);
    },
  });
  return { listNormalUser, error, isLoading };
};
export default useGetListNormalUser;
