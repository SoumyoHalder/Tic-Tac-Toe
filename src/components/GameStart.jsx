import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import gameImg from "../assets/StartPage.png";
import GameScreen from "./GameScreen";
const GameStart = () => {
  const [playGame, setPlayGame] = useState(false);
  const [gameMode, setGameMode] = useState("1v1");

  const startGame = (mode) => {
    setPlayGame(true);
    setGameMode(mode);
  };

  const handleBack = () => {
    setPlayGame(false);
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
          <div className="buttons mt-4 flex gap-4">
            <button
              onClick={() => startGame("1v1")}
              className=" px-8 py-4 border-none rounded-xl bg-gradient-to-r from-green-400 to-teal-500 text-white text-2xl font-semibold shadow-xl transform transition-transform hover:scale-95 focus:outline-none"
            >
              1 vs 1
            </button>
            <button
              onClick={() => startGame("1vsbot")}
              className="px-8 py-4 border-none rounded-xl bg-gradient-to-r from-green-400 to-teal-500 text-white text-2xl font-semibold shadow-xl transform transition-transform hover:scale-95 focus:outline-none"
            >
              1 vs {<FontAwesomeIcon icon={faRobot} />}
            </button>
          </div>
        </div>
      )}

      {playGame && <GameScreen mode={gameMode} onBack={handleBack} />}
    </>
  );
};

export default GameStart;
