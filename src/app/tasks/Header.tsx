import { RocketIcon } from "@/assets/icons/RocketIcon";
import React from "react";

export const Header = () => {
  return (
    <div className="h-[25vh] flex items-center justify-center gap-4 bg-black">
      <RocketIcon />
      <p className="text-3xl font-extrabold text-secondary">
        Todo <span className="text-primary-dark">App</span>
      </p>
    </div>
  );
};
