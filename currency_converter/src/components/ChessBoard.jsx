import React from 'react';
import '../components/Chessboard.css'

const ChessBoard = () => {
  const gridItems = [];

for (let i = 0; i < 64; i++) {
    gridItems.push(
      <div
        className="grid-item"
        key={i}
        style={{
          background: (Math.floor((i) / 8) + (i) % 8) % 2 === 0 ? 'black' : 'white',
        }}
      >
        {i}
      </div>
    );
  }
  
  return (
    <>
      <div className="main-container">
        {gridItems}
      </div>
    </>
  );
};

export default ChessBoard;
