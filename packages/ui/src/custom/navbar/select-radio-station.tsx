import { RadioStation } from "@repo/ui";

export const SelectRadioStation = () => {
  return (
    <select className="bg-transparent outline-none border border-neutral-500 rounded-lg w-auto p-2.5">
      <option>
        <RadioStation />
      </option>
    </select>
  );
};
