"use client"
import { RadioStationAtom } from "@repo/ui/store"
import { useAtomValue } from "jotai"

export const RadioStation = () => {
    const currStation = useAtomValue(RadioStationAtom)

    return <>{currStation}</>
}