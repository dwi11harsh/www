import { atom } from "jotai";
import { TopbarButtonOptions } from "@repo/ui/types";

export const RadioStationAtom = atom<
  "THE TOON - NEWCASTLE AND GATESHEAD MULTIPLEX" | null
>("THE TOON - NEWCASTLE AND GATESHEAD MULTIPLEX");

export const CurrentTableAtom = atom<TopbarButtonOptions>("Receiver Data");

export const SearchStringAtom = atom<string>("");
