const Loader = () => {
  return (
    <div>
      <div className="w-full animate-pulse">
        <div className="w-full h-2 mx-4 my-2 dark:bg-neutral-700 bg-neutral-300 rounded" />
      </div>
    </div>
  );
};

export const TableSkeleton = () => {
  const arr = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <div className="overflow-y-auto max-h-[2160px] min-w-[1080px] no-scrollbar">
      {arr.map((index) => (
        <div
          key={index}
          className="grid grid-cols-5 gap-4 py-1 font-light m-1 border rounded-xl text-center min-w-[1080px] text-neutral-700 dark:text-neutral-400 border-neutral-400 dark:border-neutral-600"
        >
          <div className="ml-2">
            <Loader />
          </div>
          <div>
            <Loader />
          </div>
          <div>
            <Loader />
          </div>
          <div>
            <Loader />
          </div>
          <div className="mr-2 pr-4">
            <Loader />
          </div>
        </div>
      ))}
    </div>
  );
};
