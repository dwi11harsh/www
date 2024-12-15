"use client";

import { cn } from "@repo/ui";
import { CurrentTableAtom, TableHeadersAtom } from "@repo/ui/store";
import { useAtomValue } from "jotai";

export const TableHeader = () => {
  const currentTable = useAtomValue(CurrentTableAtom);

  if (currentTable === "Play Log") {
    return (
      <div
        className={cn(
          `grid grid-cols-5 gap-4 mb-2 py-2 border rounded-2xl border-neutral-500 text-center min-w-[1080px]`,
        )}
      >
        <ReturnHeaders />
      </div>
    );
  } else if (currentTable === "Receiver Data") {
    return (
      <div
        className={cn(
          `grid grid-cols-6 gap-4 mb-2 py-2 border rounded-2xl border-neutral-500 text-center min-w-[1080px]`,
        )}
      >
        <ReturnHeaders />
      </div>
    );
  }
};

const ReturnHeaders = () => {
  const tableHeaders = useAtomValue(TableHeadersAtom);
  if (tableHeaders) {
    return (
      <>
        {tableHeaders.map((header, index) => (
          <div key={index}>{header}</div>
        ))}
      </>
    );
  }
};
