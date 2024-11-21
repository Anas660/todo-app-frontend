import { axios } from "../config/axios";

export const createTask = async (body: unknown) => {
  const { data } = await axios.post("/tasks", body);
  return data;
};

export const getTasks = async () => {
  const { data } = await axios.get("/tasks");
  return data;
};

export const getTaskById = async (id: string) => {
  const { data } = await axios.get(`/tasks/${id}`);
  return data;
};

export const updateTask = async (body: unknown, id: string) => {
  const { data } = await axios.put(`/tasks/${id}`, body);
  return data;
};

export const deleteTask = async (id: string) => {
  const { data } = await axios.delete(`/tasks/${id}`);
  return data;
};
