import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTrigger,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useDeleteTask } from "../hooks/useDeleteTask";

interface DeleteTaskDialogProps {
  taskId: string;
}

export const DeleteTaskDialog = ({ taskId }: DeleteTaskDialogProps) => {
  const { deleteTaskById, loading } = useDeleteTask();

  const handleDelete = () => {
    deleteTaskById(taskId);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Trash2 className="h-4 w-4 text-[#808080] cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="bg-primary border-primary">
        <DialogHeader>
          <DialogTitle className="text-gray-200">Confirm Delete?</DialogTitle>
        </DialogHeader>
        <p className="text-gray-300">
          Are you sure you want to delete this task?
        </p>
        <DialogFooter className="flex justify-end gap-4">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="hover:bg-gray-200"
              type="button"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
            className="hover:bg-red-600"
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
