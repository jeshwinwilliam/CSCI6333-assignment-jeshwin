import React from 'react';

export default function SquareButton({ value, onClick, highlight }) {
  return (
    <button
      aria-label={value ? `Square ${value}` : 'Empty square'}
      className={`square${highlight ? ' win' : ''}`}
      onClick={onClick}
    >
      {value || ''}
    </button>
  );
}
