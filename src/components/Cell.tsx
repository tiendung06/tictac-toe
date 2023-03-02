import { FC } from "react";

type TCell = {
  value: string;
  onClick: any;
};

const Cell: FC<TCell> = ({ value, onClick }) => {
  return (
    <div
      className={`flex justify-center items-center cursor-pointer font-bold text-4xl border border-gray-500 ${
        value === "X" ? "text-blue-700 " : "text-red-700"
      }`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};
export default Cell;
