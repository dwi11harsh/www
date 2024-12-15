"use client";

import { PlayLogDataAtom, SearchStringAtom } from "@repo/ui/store";
import { useAtomValue } from "jotai";
import { TableSkeleton } from "@repo/ui";

export const PlayLogTableBody = () => {
  const PlayLogData = useAtomValue(PlayLogDataAtom);
  const searchString = useAtomValue(SearchStringAtom);

  if (Array.isArray(PlayLogData) && PlayLogData.length > 0) {
    // filter PlayLogData based on the searchString
    const filteredData = searchString
      ? PlayLogData.filter(
          (song) =>
            song.title.toLowerCase().includes(searchString.toLowerCase()) ||
            song.artists_name
              .toLowerCase()
              .includes(searchString.toLowerCase()),
        )
      : PlayLogData;

    return (
      <div className="overflow-y-auto max-h-[2160px] min-w-[1080px] no-scrollbar">
        {filteredData.map((song, index) => (
          <div
            key={index}
            className="grid grid-cols-5 gap-4 py-1 font-light mt-1 border rounded-xl text-center min-w-[1080px] text-neutral-700 dark:text-neutral-400 border-neutral-400 dark:border-neutral-600"
          >
            <div className="ml-2">{song.title}</div>
            <div>{song.artists_name}</div>
            <div>{song.last_play}</div>
            <div>{song.first_play}</div>
            <div className="mr-2">{song.total_plays}</div>
          </div>
        ))}
      </div>
    );
  }

  return <TableSkeleton />;
};
