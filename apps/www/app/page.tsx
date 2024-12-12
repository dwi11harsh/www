import { SearchBar, Staticbar, TableBody, TableHeader, Topbar } from "@repo/ui";
import { DatePickerWithRange } from "@repo/ui/components/ui/date-range-picker";
import { GetPlayLogData } from "~/lib/get-data";

export default function Page() {
  const data = GetPlayLogData();
  return (
    <main>
      <Topbar />
      <Staticbar />
      {/* Table */}
      <div className="flex flex-col mt-3 mx-[10px]">
        {/* for date picker and searchbar */}
        <div className="flex justify-between items-center">
          <DatePickerWithRange />
          <SearchBar />
        </div>
        {/* for table */}
        <div>
          <TableHeader />
          <TableBody data />
        </div>
      </div>
    </main>
  );
}
