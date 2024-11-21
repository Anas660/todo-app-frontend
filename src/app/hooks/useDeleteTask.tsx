import { AxiosError } from "axios";
import { useMutation, useQueryClient } from "react-query";
import { deleteTask } from "../services";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: [`delete-task`],
    mutationFn: (id: string) => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-tasks"] });
      console.log("deleted");
    },
    onError: (err: AxiosError<{ message: string }>) => {
      console.error("Something went wrong: ", err);
    },
  });

  const deleteTaskById = (id: string) => {
    return mutation.mutate(id);
  };

  return {
    deleteTaskById,
    loading: mutation.isLoading,
  };
};
