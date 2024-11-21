import { useRouter } from "next/navigation";
import { ClipboardIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TaskCard } from "./TaskCard";
import { Header } from "./Header";
import { useGetTasks } from "../hooks/useGetTasks";
import { useUpdateTaskStatus } from "../hooks/useUpdateTaskStatus";
import { ITask } from "@/types/task.interface";

export const Task = () => {
  const router = useRouter();
  const { data: tasks } = useGetTasks();
  const { mutate: updateStatus } = useUpdateTaskStatus();

  const handleCheckboxChange = (task: ITask) => {
    console.log("Checkbox change for task:", task.id, !task.completed);
    updateStatus({
      id: task.id,
      completed: !task.completed,
      title: task.title,
      color: task.color || "bg-primary",
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#1A1A1A] flex flex-col relative">
      <Header />
      <div className="absolute top-[calc(25vh-1.5rem)] left-0 right-0 flex justify-center">
        <Button
          className="w-full max-w-xl bg-secondary-dark hover:bg-secondary"
          onClick={() => router.push("/tasks/new")}
        >
          Create Task <PlusCircleIcon />
        </Button>
      </div>

      <div className="w-full flex-1 flex flex-col items-center gap-3 p-4 overflow-y-auto mt-[3rem]">
        <div className="w-full max-w-xl flex flex-row justify-between items-center">
          <div className="flex flex-row gap-1 items-center">
            <p className="text-primary-dark text-sm">Tasks</p>
            <div className="bg-primary px-2 rounded-full text-gray-300 font-light text-sm">
              {tasks?.length}
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <p className="text-primary-dark text-sm">Completed</p>
            <p className="bg-primary px-2 rounded-full text-gray-300 font-light text-sm">
              {tasks?.filter((task: ITask) => task.completed).length} de{" "}
              {tasks?.length}
            </p>
          </div>
        </div>
        {tasks?.length ? (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              id={task.id}
              {...task}
              onCheckboxChange={() => handleCheckboxChange(task)}
            />
          ))
        ) : (
          <div className="flex flex-col justify-center items-center gap-4 text-[#737373]">
            <ClipboardIcon className="w-10 h-10" />
            <p className="font-bold">
              You do not have any tasks registered yet.
            </p>
            <p>Create tasks and organize your to-do items</p>
          </div>
        )}
      </div>
    </div>
  );
};
