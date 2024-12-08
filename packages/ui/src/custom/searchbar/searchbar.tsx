"use client";

import { SearchStringAtom } from "@repo/ui/store";
import { useSetAtom } from "jotai";

export const SearchBar = () => {
  const setSearchString = useSetAtom(SearchStringAtom);

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="mr-8">
      <form className="w-72 pl-0" onSubmit={handleSubmit}>
        <label className="text-sm font-medium  sr-only">Search</label>
        <div className="relative py-3">
          <input
            type="search"
            id="default-search"
            className="block w-full py-2 px-10 mr-4 text-sm border border-neutral-500 focus:border-0 ml-4 rounded-full bg-inherit focus:ring-blue-500 focus:border-blue-500 dark:bg-inherit dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required
            onChange={(e) =>
              setSearchString(e.target.value.toLocaleLowerCase())
            }
          />
          <div className="dark:text-gray-200 text-gray-700 absolute right-2.5 bottom-2.5 font-medium rounded-full text-sm px-4 mb-1 pb-1">
            <img
              className="w-5 h-5"
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9ImZpbGw6IzczNzM3MzsiPgogICAgPHBhdGggZD0iTSA5IDIgQyA1LjE0NTg1MTQgMiAyIDUuMTQ1ODUxNCAyIDkgQyAyIDEyLjg1NDE0OSA1LjE0NTg1MTQgMTYgOSAxNiBDIDEwLjc0Nzk5OCAxNiAxMi4zNDUwMDkgMTUuMzQ4MDI0IDEzLjU3NDIxOSAxNC4yODEyNSBMIDE0IDE0LjcwNzAzMSBMIDE0IDE2IEwgMjAgMjIgTCAyMiAyMCBMIDE2IDE0IEwgMTQuNzA3MDMxIDE0IEwgMTQuMjgxMjUgMTMuNTc0MjE5IEMgMTUuMzQ4MDI0IDEyLjM0NTAwOSAxNiAxMC43NDc5OTggMTYgOSBDIDE2IDUuMTQ1ODUxNCAxMi44NTQxNDkgMiA5IDIgeiBNIDkgNCBDIDExLjc3MzI2OCA0IDE0IDYuMjI2NzMxNiAxNCA5IEMgMTQgMTEuNzczMjY4IDExLjc3MzI2OCAxNCA5IDE0IEMgNi4yMjY3MzE2IDE0IDQgMTEuNzczMjY4IDQgOSBDIDQgNi4yMjY3MzE2IDYuMjI2NzMxNiA0IDkgNCB6Ij48L3BhdGg+Cjwvc3ZnPg=="
            />
          </div>
        </div>
      </form>
    </div>
  );
};
