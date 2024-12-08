"use client";

import { CurrentTableAtom } from "@repo/ui/store";
import { useAtomValue } from "jotai";

export const CurrentTableName = () => {
  const TableName = useAtomValue(CurrentTableAtom);
  return <>{TableName}</>;
};
