import React from 'react';

const WinningLine = ({ winningLine }) => {
  if (!winningLine) return null;

  const gridSize = 33.33; // Each cell is 33.33% of the grid

  // Calculate the center position of each box
  const startX = (winningLine[0] % 3) * gridSize + gridSize / 2;
  const startY = Math.floor(winningLine[0] / 3) * gridSize + gridSize / 2;
  const endX = (winningLine[2] % 3) * gridSize + gridSize / 2;
  const endY = Math.floor(winningLine[2] / 3) * gridSize + gridSize / 2;

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
