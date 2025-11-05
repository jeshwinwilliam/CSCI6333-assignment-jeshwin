import React from 'react';
import SquareButton from './SquareButton';

export default function GameBoard({ cells, onSelect, winLine = [] }) {
  const renderSquare = (idx) => (
    <SquareButton
      key={idx}
      value={cells[idx]}
      onClick={() => onSelect(idx)}
      highlight={winLine.includes(idx)}
    />
  );

  return (
    <div className="board">
      {Array.from({ length: 9 }, (_, i) => renderSquare(i))}
    </div>
  );
}
