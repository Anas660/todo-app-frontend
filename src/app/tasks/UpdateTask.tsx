"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PrimaryInput } from "../_shared/PrimaryInput";
import { useEditTask } from "../hooks/useEditTask";
import { useGetTaskById } from "../hooks/useGetTaskById";

export const UpdateTask = () => {
  const { id } = useParams();
  const { data: task } = useGetTaskById(id);
  const { form, control, handleSubmit, setValue, onSubmit } = useEditTask(id);
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState<string>("");
  console.log("data id", id);

  const colors = [
    { label: "Soft Gray", class: "bg-gray-500" },
    { label: "Medium Gray", class: "bg-gray-700" },
    { label: "Soft Blue", class: "bg-[#A7C7E7]" },
    { label: "Medium Blue", class: "bg-[#6A9EB6]" },
    { label: "Soft Red", class: "bg-[#E7A7A7]" },
    { label: "Medium Red", class: "bg-[#B66A6A]" },
  ];

  const handleColorSelect = (colorClass: string) => {
    setSelectedColor(colorClass);
    setValue("color", colorClass);
  };

  useEffect(() => {
    if (task) {
      setValue("title", task.title);
      setValue("color", task.color);
      setValue("completed", task.completed);
      setSelectedColor(task.color);
    }
  }, [task, setValue]);

  return (
    <div className="w-full flex flex-col gap-8 max-w-xl">
      <ArrowLeft
        className="text-white cursor-pointer"
        onClick={() => router.push("/")}
      />

      {/* Task Update Form */}
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <PrimaryInput
              label="Title"
              control={control}
              type="text"
              name="title"
              placeholder="Ex. Brush Your Teeth"
            />

            <div className="flex flex-col">
              <p className="text-xs text-primary-dark">Colors</p>
              <div className="flex gap-4 mt-2">
                {colors.map((color) => (
                  <div
                    key={color.label}
                    className={`w-8 h-8 rounded-full cursor-pointer text-white ${
                      color.class
                    } ${
                      selectedColor === color.class
                        ? "border-2 border-white"
                        : ""
                    }`}
                    title={color.label}
                    onClick={() => handleColorSelect(color.class)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              className="w-full max-w-xl bg-secondary-dark hover:bg-secondary"
              type="submit"
            >
              Update Task
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
