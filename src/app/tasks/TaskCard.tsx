import { Checkbox } from "@/components/ui/checkbox";
import { ITask } from "@/types/task.interface";
import { DeleteTaskDialog } from "./DeleteTaskDialog";
import Link from "next/link";

interface TaskCardProps extends ITask {
  onCheckboxChange: () => void;
}

export const TaskCard = ({
  id,
  title,
  completed,
  color,
  onCheckboxChange,
}: TaskCardProps) => {
  return (
    <div className="w-full max-w-xl">
      <div
        className={`p-4 rounded-md flex items-center gap-4 border border-[#333333] ${color}`}
      >
        <Checkbox
          id={`task-completed-${title}`}
          checked={completed}
          onCheckedChange={onCheckboxChange}
          className="border-secondary rounded-full h-4 w-4"
        />
        <Link
          href={`/tasks/update/${id}`}
          className="w-full flex justify-center items-center cursor-pointer"
        >
          <p
            className={`text-sm flex-1 ${
              completed ? "line-through text-gray-500" : "text-white"
            }`}
          >
            {title}
          </p>
        </Link>
        <DeleteTaskDialog taskId={id} />
      </div>
    </div>
  );
};
