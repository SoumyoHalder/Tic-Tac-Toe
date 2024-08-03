import React from 'react';

const WinningLine = ({ winningLine }) => {
  if (!winningLine) return null;

  const gridSize = 33.33;

  const startX = winningLine[0] % 3 === 2 ? 100 : (winningLine[0] % 3) * gridSize;
  const startY = Math.floor(winningLine[0] / 3) === 2 ? 100 : Math.floor(winningLine[0] / 3) * gridSize;
  const endX = winningLine[2] % 3 === 2 ? 100 : (winningLine[2] % 3) * gridSize;
  const endY = Math.floor(winningLine[2] / 3) === 2 ? 100 : Math.floor(winningLine[2] / 3) * gridSize;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'transparent',
        width: '100%',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <line
          x1={startX}
          y1={startY}
          x2={endX}
          y2={endY}
          stroke="red"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default WinningLine;
