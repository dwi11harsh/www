"use client";
import { TableSkeleton } from "@repo/ui";
import { ReceiverDataAtom } from "@repo/ui/store";
import { useAtomValue } from "jotai";
import { STATUS } from "./status";
import { TransmissionStreangth } from "./transmission-streangth";

export const ReceiverDataTable = () => {
  const ReceiverData = useAtomValue(ReceiverDataAtom);

  if (Array.isArray(ReceiverData) && ReceiverData.length > 0) {
    return (
      <div className="overflow-y-auto max-h-[2160px] min-w-[1080px] no-scrollbar">
        {ReceiverData.map((receiver, index) => (
          <div
            key={index}
            className="grid grid-cols-6 gap-4 py-1 font-light mt-1 border rounded-xl text-center min-w-[1080px] text-neutral-700 dark:text-neutral-400 border-neutral-400 dark:border-neutral-600"
          >
            <div className="ml-2">{receiver.unit_no}</div>
            <div>{receiver.postcode}</div>
            <div>
              <STATUS status={receiver.status} />
            </div>
            <div>{receiver.last_broadcast}</div>
            <div>
              <TransmissionStreangth
                streangth={receiver.transmission_strength}
              />
            </div>
            <div className="mr-2">{receiver.listening_time}</div>
          </div>
        ))}
      </div>
    );
  }

  return <TableSkeleton />;
};
