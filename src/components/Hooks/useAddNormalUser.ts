import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import type { UserNormal } from "./useGetListNormalUser";
import axios from "axios";

interface TypeContextPreviousData {
  previousDataQuery: UserNormal[] | undefined;
}

const useAddNormalUser = () => {
  const queryClient = useQueryClient();
  const addNormalUser = useMutation<
    UserNormal,
    Error,
    UserNormal,
    TypeContextPreviousData
  >({
    mutationFn: (newUserNormal: UserNormal) => {
      return axios
        .post<UserNormal>("http://localhost:3000/normalUsers", newUserNormal)
        .then((res) => res.data);
    },
    onMutate: (newNormalUser: UserNormal) => {
      let previousDataQuery = queryClient.getQueryData<UserNormal[]>([
        "list-normal user",
      ]);

      queryClient.setQueryData<UserNormal[]>(["list-normal user"], (list) => {
        return [...(list || []), newNormalUser];
      });
      return { previousDataQuery };
    },
    onSuccess: (newItem) => {
      console.log("success for ");
      
      queryClient.setQueryData<UserNormal[]>(["list-normal user"], (list) => {
        return list && list.map((item) => (item !== newItem ? newItem : item));
      });
    },
    onError: (error, newItem, context) => {
      if (!error) return;
      console.log("error add normal user");
      
      queryClient.setQueryData<UserNormal[]>(
        ["list-normal user"],
        context?.previousDataQuery,
      );
    },
  });
  return addNormalUser;
};
export default useAddNormalUser;
