// src/App.js
import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import HistoryPanel from './components/HistoryPanel';
import { calcWinner } from './utils/calcWinner';

// ---- Part 02 component (you already added this file earlier) ----
import UserProfileLookup from './components/UserProfileLookup.jsx';

// SINGLE definition + SINGLE export
export default function App() {
  // ----- Part 01: Tic-Tac-Toe state -----
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(0);
  const xIsNext = step % 2 === 0;

  const current = history[step];
  const outcome = calcWinner(current);
  const status = outcome.winner
    ? `Winner: ${outcome.winner}`
    : outcome.draw
      ? 'Draw!'
      : `Next player: ${xIsNext ? 'X' : 'O'}`;

  function selectSquare(index) {
    if (outcome.winner || current[index]) return;
    const next = current.slice();
    next[index] = xIsNext ? 'X' : 'O';
    const clipped = history.slice(0, step + 1);
    setHistory(clipped.concat([next]));
    setStep(clipped.length);
  }

  function jumpTo(move) { setStep(move); }
  function reset() { setHistory([Array(9).fill(null)]); setStep(0); }

  return (
    <main className="page" style={{ maxWidth: 980, margin: '0 auto', padding: 24 }}>
      {/* ---- Part 01: Tic-Tac-Toe ---- */}
      <section style={{ marginBottom: 32 }}>
        <h1>Tic-Tac-Toe</h1>
        <p className="subtitle">
          Clean implementation with history & winner highlighting. Built by Jeshwin William James.
        </p>

        <GameBoard cells={current} onSelect={selectSquare} winLine={outcome.line || []} />

        <div className="panel">
          <div className="card">
            <strong>{status}</strong>
            <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
              <button className="primary" onClick={reset}>Start over</button>
            </div>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Move history</h3>
            <HistoryPanel steps={history} current={step} goTo={jumpTo} />
          </div>
        </div>

        <div className="footer">
          <small>© {new Date().getFullYear()} Jeshwin William James — Original code and styling.</small>
        </div>
      </section>

      {/* ---- Part 02: User Profile Lookup (matches screenshots) ---- */}
      <section>
        <UserProfileLookup />
      </section>
    </main>
  );
}
