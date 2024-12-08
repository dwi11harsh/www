import { TopbarButton } from "./topbar-button";

export const Topbar = () => {
  return (
    <div className="w-full bg-inherit">
      <div className="hidden sm:block rounded-full w-full mt-5" role="group">
        <div className="flex justify-between px-3">
          <TopbarButton tableName="Receiver Data" />
          <TopbarButton tableName="Play Log" />
          <TopbarButton tableName="Audience Data" />
          <TopbarButton tableName="Programming Assist" />
        </div>
      </div>
    </div>
  );
};
