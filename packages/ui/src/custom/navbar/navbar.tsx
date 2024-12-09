import React from "react";
import { SelectRadioStation } from "./select-radio-station";
import { ThemeToggle } from "@repo/ui";

export const Navbar = () => {
  return (
    <>
      <nav className="min-w-full bg-inherit dark:bg-inherit">
        <div className="py-4 mx-auto flex items-center justify-between">
          <div className="pl-4 ">RADIOREACH</div>
          <div className="hidden md:block">
            <SelectRadioStation />
          </div>
          <div className="pr-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
};
