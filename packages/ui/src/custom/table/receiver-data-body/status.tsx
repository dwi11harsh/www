export const STATUS = ({ status }: { status: boolean }) => {
  if (status) {
    return (
      <div className="flex items-center justify-center">
        <div className="h-4 w-4  rounded-full bg-green-700" />
      </div>
    );
  } else
    return (
      <div className="flex items-center justify-center">
        <div className="h-4  w-4 rounded-full bg-red-700" />
      </div>
    );
};
