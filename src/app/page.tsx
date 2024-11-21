"use client";

import { Task } from "./tasks/Task";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Task />
    </div>
  );
}
