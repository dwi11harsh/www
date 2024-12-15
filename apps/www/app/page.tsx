import { SearchBar, Staticbar, TableBody, TableHeader, Topbar } from "@repo/ui";
import { DatePickerWithRange } from "@repo/ui/components/ui/date-range-picker";
import { GetPlayLogData } from "~/lib/get-data";

const HomePage = async () => {
  const data = await GetPlayLogData();
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
          <TableBody data={data} />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
