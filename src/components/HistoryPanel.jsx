import React from 'react';

export default function HistoryPanel({ steps, current, goTo }) {
  return (
    <ol className="moves">
      {steps.map((_, move) => {
        const desc = move ? `Go to move #${move}` : 'Go to game start';
        const isActive = move === current;
        return (
          <li key={move}>
            <button
              className={isActive ? 'primary' : 'ghost'}
              onClick={() => goTo(move)}
            >
              {isActive ? 'You are here — ' : ''}{desc}
            </button>
          </li>
        );
      })}
    </ol>
  );
}
