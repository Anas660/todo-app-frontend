import { useQuery } from "react-query";
import { getTaskById } from "../services";

export const useGetTaskById = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [`get-tasks-${id}`],
    queryFn: () => getTaskById(id),
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    data,
    isLoading,
    error,
  };
};
