"use client";

import { CurrentTableAtom, PlayLogDataAtom } from "@repo/ui/store";
import {
  ComingSoon,
  PlayLogDataType,
  PlayLogTableBody,
  ReceiverDataTable,
} from "@repo/ui";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";

export const TableBody = ({ data }: { data: PlayLogDataType }) => {
  const currentTable = useAtomValue(CurrentTableAtom);
  const SetPlayLogData = useSetAtom(PlayLogDataAtom);

  useEffect(() => {
    if (Array.isArray(data)) {
      SetPlayLogData(data);
    }
  }, [data]);

  if (currentTable === "Receiver Data") {
    return <ReceiverDataTable />;
  } else if (currentTable === "Play Log") {
    return <PlayLogTableBody />;
  } else return <ComingSoon />;
};
