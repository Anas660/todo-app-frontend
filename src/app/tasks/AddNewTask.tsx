"use client";
import { Form } from "@/components/ui/form";
import { ArrowLeft, PlusCircleIcon } from "lucide-react";
import { PrimaryInput } from "../_shared/PrimaryInput";
import { useCreateTask } from "../hooks/useCreateTask";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react"; // Import useState to manage selected color

export const AddNewTask = () => {
  const { form, control, handleSubmit, onSubmit, error } = useCreateTask();
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState<string>(""); // State to track the selected color
  const colors = [
    { label: "Soft Gray", class: "bg-gray-500" }, // Light Gray
    { label: "Medium Gray", class: "bg-gray-700" }, // Medium Gray
    { label: "Soft Blue", class: "bg-[#A7C7E7]" }, // Light Blue
    { label: "Medium Blue", class: "bg-[#6A9EB6]" }, // Medium Blue
    { label: "Soft Red", class: "bg-[#E7A7A7]" }, // Light Red
    { label: "Medium Red", class: "bg-[#B66A6A]" }, // Medium Red
  ];

  // Handle color selection
  const handleColorSelect = (colorClass: string) => {
    setSelectedColor(colorClass); // Update the selected color state
    form.setValue("color", colorClass); // Set color value in the form
  };

  console.log("error", error);

  return (
    <div className="w-full flex flex-col gap-8 max-w-xl">
      <ArrowLeft
        className="text-white cursor-pointer"
        onClick={() => router.push("/")}
      />

      {/* Task Form */}
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
                    }`} // Add border if color is selected
                    title={color.label}
                    onClick={() => handleColorSelect(color.class)} // Set selected color
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
              Add Task <PlusCircleIcon />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
