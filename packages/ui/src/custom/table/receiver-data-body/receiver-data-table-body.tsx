"use client";
import { TableSkeleton } from "@repo/ui";
import { DrawerStateAtom, ReceiverDataAtom } from "@repo/ui/store";
import { useAtomValue, useSetAtom } from "jotai";
import { STATUS } from "./status";
import { TransmissionStreangth } from "./transmission-streangth";

export const ReceiverDataTable = () => {
  const ReceiverData = useAtomValue(ReceiverDataAtom);
  const setDrawerState = useSetAtom(DrawerStateAtom);

  const HandleClick = () => {
    setDrawerState(true);
    console.log("clicked");
  };

  if (Array.isArray(ReceiverData) && ReceiverData.length > 0) {
    return (
      <div className="overflow-y-auto max-h-[2160px] min-w-[1080px] no-scrollbar">
        {ReceiverData.map((data, index) => (
          <div
            onClick={() => HandleClick()}
            key={index}
            className="hover:bg-neutral-300 dark:hover:bg-neutral-700 grid grid-cols-6 gap-4 py-1 font-light mt-1 border rounded-xl text-center min-w-[1080px] text-neutral-700 dark:text-neutral-400 border-neutral-400 dark:border-neutral-600"
          >
            <div className="ml-2">{data.unit_no}</div>
            <div>{data.postcode}</div>
            <div>
              <STATUS status={data.status} />
            </div>
            <div>{data.last_broadcast}</div>
            <div>
              <TransmissionStreangth streangth={data.transmission_strength} />
            </div>
            <div className="mr-2">{data.listening_time}</div>
          </div>
        ))}
      </div>
    );
  }

  return <TableSkeleton />;
};
