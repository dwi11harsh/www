"use client";

import { Staticbar, Table, Topbar } from "@repo/ui";
import { GetReceiverData } from "~/lib/get-data";

export default function Page() {
  GetReceiverData();
  return (
    <main>
      <Topbar />
      <Staticbar />
      <Table />
    </main>
  );
}
