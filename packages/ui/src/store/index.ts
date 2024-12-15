import { atom } from "jotai";
import {
  PlayLogDataType,
  ReceiverDataType,
  TopbarButtonOptions,
} from "@repo/ui";
import { RECEIVER_DATA } from "./temp-receiver-data";

// Name of Radio Station currently selected
export const RadioStationAtom = atom<
  "THE TOON - NEWCASTLE AND GATESHEAD MULTIPLEX" | null
>("THE TOON - NEWCASTLE AND GATESHEAD MULTIPLEX");

// Name of Table currently selected
export const CurrentTableAtom = atom<TopbarButtonOptions>("Receiver Data");

// Search String for Search Bar
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
      "Listening Time",
    ];
  } else if (currentTable === "Play Log") {
    return ["Song", "Artist", "Time of Play", "First Play", "No. of Plays"];
  }
});

// Table Data Atoms
export const PlayLogDataAtom = atom<PlayLogDataType[] | null>(null);

export const ReceiverDataAtom = atom<ReceiverDataType[] | null>(RECEIVER_DATA);
