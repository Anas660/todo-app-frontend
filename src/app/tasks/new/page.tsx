"use client";

import { AddNewTask } from "../AddNewTask";
import { Header } from "../Header";

export default function NewTaskPage() {
  return (
    <div className="min-h-screen w-full bg-[#1A1A1A] flex flex-col">
      <Header />
      <div className="flex-1 flex justify-center mt-10">
        <AddNewTask />
      </div>
    </div>
  );
}
