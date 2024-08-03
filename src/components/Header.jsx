import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl py-6 z-50">
      <nav className="container mx-auto flex justify-center items-center">
        <h1 className="text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
          Tic-Tac-Toe
        </h1>
      </nav>
    </header>
  );
};

export default Header;
