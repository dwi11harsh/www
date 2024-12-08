import { DatePickerWithRange } from "@repo/ui/components/ui/date-range-picker";
import { SearchBar } from "@repo/ui";

export const Table = () => {
  return (
    <div className="flex flex-col mt-3 mx-[10px]">
      {/* for date picker and searchbar */}
      <div className="flex justify-between items-center">
        <DatePickerWithRange />
        <SearchBar />
      </div>
      {/* for table */}
      <div></div>
    </div>
  );
};
