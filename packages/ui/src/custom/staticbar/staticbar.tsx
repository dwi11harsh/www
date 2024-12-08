import { CurrentTableName } from "@repo/ui";
import { Clock } from "./clock";

export const Staticbar = () => {
  return (
    <div className="hidden sm:block mt-5 ml-2 mr-5">
      <div className="border border-neutral-500 w-full flex justify-center rounded-full">
        <p className=" font-light text-gray-500 py-1 px-4">
          <CurrentTableName /> - Radio Reach Network - United Kingdom -{" "}
          <Clock />
        </p>
      </div>
    </div>
  );
};
