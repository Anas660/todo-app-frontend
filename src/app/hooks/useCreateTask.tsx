import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { createTaskSchema, CreateTaskSchemaType } from "../schema/task.schema";
import { createTask } from "../services";
import { useRouter } from "next/navigation";

export const useCreateTask = () => {
  const router = useRouter();
  const form = useForm<CreateTaskSchemaType>({
    resolver: zodResolver(createTaskSchema),
    defaultValues: {
      completed: false,
      color: "bg-gray-400",
    },
  });
  const { control, handleSubmit, reset, setValue, watch, formState } = form;

  const mutation = useMutation({
    mutationKey: ["create-task"],
    mutationFn: createTask,
    onSuccess: () => {
      console.log("created");
      router.push("/");
    },
    onError: (err: AxiosError<any, any>) => {
      console.error("something went wrong: ", err);
    },
  });

  const onSubmit: SubmitHandler<CreateTaskSchemaType> = (values) => {
    mutation.mutate({
      title: values.title,
      completed: values.completed, // Ensure completed value is passed
      color: values.color, // Ensure color value is passed
    });
  };

  return {
    form,
    control,
    onSubmit,
    handleSubmit,
    error: formState.error,
    reset,
    setValue,
    isLoading: mutation.isLoading,
    watch,
  };
};
