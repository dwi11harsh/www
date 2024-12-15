export const TransmissionStreangth = ({
  streangth,
}: {
  streangth: 0 | 1 | 2 | 3 | 4 | 5;
}) => {
  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={`m-1 h-4 w-4  rounded-sm  ${
            index < streangth ? "bg-green-700" : "bg-red-700"
          }`}
        />
      ))}
    </div>
  );
};
