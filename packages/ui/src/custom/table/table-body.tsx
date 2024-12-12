"use client";
import { TextHoverEffect } from "@repo/ui";
import { CurrentTableAtom } from "@repo/ui/store";
import { PlayLogDataType } from "@repo/ui/types";
import { useAtomValue } from "jotai";

export const TableBody = ({ data }: { data: PlayLogDataType }) => {
  const currentTable = useAtomValue(CurrentTableAtom);

  if (currentTable === "Receiver Data") {
    return <ReceiverDataTable />;
  } else if (currentTable === "Play Log") {
    return <PlayLogTable />;
  } else return <ComingSoon />;
};

const PlayLogTable = () => {
  return <>Play Log Table</>;
};

const ReceiverDataTable = () => {
  return <>Receiver Data Table</>;
};

const ComingSoon = () => {
  return (
    <>
      <TextHoverEffect text="Coming" />
      <TextHoverEffect text="Soon" />
    </>
  );
};
