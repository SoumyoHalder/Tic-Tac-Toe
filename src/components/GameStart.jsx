import React, { useState } from "react";
import gameImg from "../assets/StartPage.png";
import GameScreen from "./GameScreen";

const GameStart = () => {
  const [playGame, setPlayGame] = useState(false);

  const startGame = () => {
    setPlayGame(true);
  };

  return (
    <>
      {!playGame && (
        <div className="flex flex-col items-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 h-full pt-20 sm:pt-4 md:pt-8 lg:pt-8">
          <img
            className="w-80 mb-10 sm:mb-3"
            src={gameImg}
            alt="Tic-Tac-Toe image"
          />
          <button
            onClick={startGame}
            className="px-8 py-4 border-none rounded-xl bg-gradient-to-r from-green-400 to-teal-500 text-white text-2xl font-semibold shadow-xl transform transition-transform hover:scale-90 focus:outline-none"
          >
            Start Game
          </button>
        </div>
      )}
      {playGame && <GameScreen />}
    </>
  );
};

export default GameStart;
