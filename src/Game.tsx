import Board from "./components/Board";
import { useState } from "react";
import { calculateWinner } from "./helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    const boardCopy = [...board];

    if (winner || boardCopy[index]) {
      return;
    }

    boardCopy[index] = xIsNext ? "X" : "O";

    setBoard(boardCopy);
    setXIsNext((xIsNext) => !xIsNext);
  };

  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center mb-5 text-white">
        Tic Tac Toe
      </h1>
      <p className="mb-5 text-sm md:text-lg text-white">
        {winner || xIsNext ? "X turn" : "O turn"}
      </p>
      <Board cells={board} onClick={handleClick} />
      <p className="text-white my-5 text-sm md:text-lg">
        {winner ? `Winner is ${winner}` : ""}
      </p>
      <button
        onClick={handleResetGame}
        className="text-white text-lg w-full bg-yellow-500 py-3 px-5 rounded-lg hover:opacity-80 transition-all"
      >
        Reset game
      </button>
    </div>
  );
};

export default Game;
