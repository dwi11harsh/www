"use client";

import { cn } from "@repo/ui/lib/utils";
import { CurrentTableAtom } from "@repo/ui/store";
import { TopbarButtonOptions } from "@repo/ui/types";
import { useAtomValue, useSetAtom } from "jotai";

export const TopbarButton = ({
  tableName,
}: {
  tableName: TopbarButtonOptions;
}) => {
  const currentTableName = useAtomValue(CurrentTableAtom);
  const setCurrentTableName = useSetAtom(CurrentTableAtom);
  const HandleButtonSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setCurrentTableName(tableName);
  };
  return (
    <button
      type="button"
      onClick={HandleButtonSelect}
      className={cn(
        "mr-3 flex-auto w-1/5 px-3 py-2 rounded-full dark:hover:text-white hover:ring-pink-700 bg-inherit ring-[2.5px] dark:ring-4",
        currentTableName === tableName ? "ring-pink-700" : "ring-neutral-500",
      )}
    >
      {tableName}
    </button>
  );
};
