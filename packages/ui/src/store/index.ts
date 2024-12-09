import { atom } from "jotai";
import { TopbarButtonOptions } from "@repo/ui";

export const RadioStationAtom = atom<
  "THE TOON - NEWCASTLE AND GATESHEAD MULTIPLEX" | null
>("THE TOON - NEWCASTLE AND GATESHEAD MULTIPLEX");

export const CurrentTableAtom = atom<TopbarButtonOptions>("Receiver Data");

export const SearchStringAtom = atom<string>("");

export const TableHeadersAtom = atom((get) => {
  const currentTable = get(CurrentTableAtom);
  if (currentTable === "Receiver Data") {
    return [
      "Unit No.",
      "Postcode",
      "Status",
      "Last Broadcast",
      "Transmission Streangth",
      "Listening Streangth",
    ];
  } else if (currentTable === "Play Log") {
    return ["Song", "Artist", "Time of Play", "First Play", "No. of Plays"];
  }
});
