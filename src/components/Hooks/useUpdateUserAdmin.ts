import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UserNormal } from "./useGetListNormalUser";
import axios from "axios";
interface UpdateItem {
  updateItem: UserNormal;
  id: string;
}
interface TypeContextPreviousData {
  previousDataQuery: UserNormal[] | undefined;
}
const useApdateUserAdmin = () => {
  const queryClient = useQueryClient();
  return useMutation<UserNormal, Error, UpdateItem, TypeContextPreviousData>({
    mutationFn: (item: UpdateItem) => {
      return axios
        .patch(`http://localhost:3000/User-Admin/${item.id}`, item.updateItem)
        .then((res) => res.data);
    },
    onMutate: (updateItem: UpdateItem) => {
      let previousDataQuery = queryClient.getQueryData<UserNormal[]>([
        "list-normal user",
      ]);

      queryClient.setQueryData<UserNormal[]>(["list-normal user"], (list) => {
        return [...(list || []), updateItem.updateItem];
      });
      return { previousDataQuery };
    },
    onSuccess: (updateItem: UserNormal, newItem: UpdateItem) => {
      console.log("success for ");

      queryClient.setQueryData<UserNormal[]>(
        ["list-admin user"],
        (list) => {
          return (
            list &&
            list.map((item) =>
              item.id !== newItem.id ? newItem.updateItem : item,
            )
          );
        },
      );
    },
    onError: (error, item, context) => {
      if (!error) return;
      queryClient.setQueryData(
        ["list-admin user"],
        context?.previousDataQuery,
      );
    },
  });
};
export default useApdateUserAdmin;
