import Cell from "./Cell";

const Board = (props: any) => {
  return (
    <div className="transition-all border border-gray-500 grid grid-cols-3 grid-rows-3 w-[350px] h-[350px] md:w-[400px] md:h-[400px]">
      {props.cells.map((item: any, index: any) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
