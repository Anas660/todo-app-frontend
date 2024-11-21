import { useMutation, useQueryClient } from "react-query";
import { updateTask } from "../services";

interface IUpdateTaskStatus {
  id: string;
  completed: boolean;
  title: string;
  color: string;
}

export const useUpdateTaskStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["update-task-status"],
    mutationFn: ({ id, completed, title, color }: IUpdateTaskStatus) =>
      updateTask({ completed, title, color }, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["get-tasks"] });
      console.log("Task status updated successfully");
    },
    onError: (error) => {
      console.error("Error updating task status:", error);
    },
  });
};
