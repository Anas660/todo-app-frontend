"use client";

import { Header } from "../../Header";
import { UpdateTask } from "../../UpdateTask";

export default function NewTaskPage() {
  return (
    <div className="min-h-screen w-full bg-[#1A1A1A] flex flex-col">
      <Header />
      <div className="flex-1 flex justify-center mt-10">
        <UpdateTask />
      </div>
    </div>
  );
}
