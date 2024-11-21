import { useQuery } from "react-query";
import { getTasks } from "../services";

export const useGetTasks = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["get-tasks"],
    queryFn: getTasks,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    error,
  };
};
