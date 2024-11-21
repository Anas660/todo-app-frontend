import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { createTaskSchema, CreateTaskSchemaType } from "../schema/task.schema";
import { updateTask } from "../services";
import { useRouter } from "next/navigation";

export const useEditTask = (id: string) => {
  const router = useRouter();
  const form = useForm<CreateTaskSchemaType>({
    resolver: zodResolver(createTaskSchema),
  });
  const { control, handleSubmit, reset, setValue, watch, formState } = form;

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["update-task"],
    mutationFn: ({ body }: { body: CreateTaskSchemaType }) =>
      updateTask(body, id), // Use the id passed as a parameter
    onSuccess: () => {
      queryClient.invalidateQueries(["get-tasks"]);
      console.log("Task updated successfully");
      router.push("/");
    },
    onError: (err: AxiosError<any, any>) => {
      console.error("Error updating task:", err);
    },
  });

  const onSubmit: SubmitHandler<CreateTaskSchemaType> = (values) => {
    const { ...body } = values;
    mutation.mutate({ body });
  };

  return {
    form,
    control,
    onSubmit,
    handleSubmit,
    reset,
    error: formState.errors,
    setValue,
    watch,
    isLoading: mutation.isLoading,
  };
};
