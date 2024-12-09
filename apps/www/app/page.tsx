import { Staticbar, Table, Topbar } from "@repo/ui";
import { GetPlayLogData } from "~/lib/get-data";

export default function Page() {
  GetPlayLogData();
  return (
    <main>
      <Topbar />
      <Staticbar />
      <Table />
    </main>
  );
}
