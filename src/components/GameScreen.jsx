import React, { useEffect, useState } from "react";
import "../styles/GameScreen.css";
import { calculateWinner, calculateWinningLine } from "../utils";
import PopupNotification from "./PopupNotification";
import WinningLine from "./WinningLine";

const GameScreen = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winningLine, setWinningLine] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      setWinningLine(calculateWinningLine(board, winner));
      setPopupMessage(`Winner: ${winner}`);
      setShowPopup(true);
    } else if (board.every((square) => square !== null)) {
      setPopupMessage("Draw");
      setShowPopup(true);
    } else {
      setWinningLine(null);
    }
  }, [board]);

  const handleClick = (index) => {
    const newBoard = board.slice();
    if (calculateWinner(board) || board[index]) return;

    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const winner = calculateWinner(board);
  const isDraw = board.every((square) => square !== null) && !winner;
  const status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "Draw"
    : `Player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 min-h-screen py-8 relative">
      <div className="text-3xl font-bold mb-6 bg-clip-text text-transparent text-gray-100">
        {status}
      </div>
      {showPopup && (
        <PopupNotification message={popupMessage} onClose={handleClosePopup} />
      )}
      <div className="flex items-center justify-center w-full h-full mt-16 sm:mt-0 mb-10 sm:mb-1">
        <div className="grid grid-cols-3 gap-1 relative">
          {board.map((value, index) => (
            <button
              key={index}
              className={`w-24 h-24 bg-white border-2 border-gray-500 text-4xl font-bold text-gray-700 flex items-center justify-center cursor-pointer transition-transform transform hover:scale-95 focus:outline-none ${
                winningLine && winningLine.includes(index) ? "text-red-500" : ""
              } glossy`}
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          ))}

          <WinningLine winningLine={winningLine} />
        </div>
      </div>
      <button
        className="mt-6 px-6 py-3 bg-gradient-to-r from-green-400 to-teal-500 text-white text-xl font-semibold rounded-xl shadow-xl transform transition-transform hover:scale-95 focus:outline-none"
        onClick={() => {
          setBoard(Array(9).fill(null));
          setWinningLine(null);
          setShowPopup(false);
        }}
      >
        Reset Game
      </button>
    </div>
  );
};

export default GameScreen;
