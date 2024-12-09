"use server";

import { PlayLogDataType } from "@repo/ui";

require("dotenv").config();

export const GetPlayLogData = async () => {
  const uri = process.env.BACKEND_URI;
  const todays_date = new Date().toISOString().split("T")[0] as string;

  const playLog = await fetch(
    `${uri}/user/songs?f_date=2023-12-01&t_date=${todays_date}`,
    {
      method: "GET",
    },
  );

  const temp = await playLog.json();

  const PlayLogData: PlayLogDataType = temp.data;

  return PlayLogData;
};
