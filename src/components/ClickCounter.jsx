import React, { useState, useCallback, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ClickCounter() {
  const { isDark } = useTheme();
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // useMemo: text depends only on `count`
  const label = useMemo(
    () => (count === 0 ? 'Start clicking' : 'Counter updated'),
    [count]
  );

  // useCallback: reuse the same handlers between renders
  const inc = useCallback(() => {
    setCount((c) => c + step);
  }, [step]);

  const dec = useCallback(() => {
    setCount((c) => Math.max(0, c - step));
  }, [step]);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div className="card">
      <h1>Click Counter</h1>
      <p>{label}</p>
      <div className="row">
        <button className="btn" onClick={dec}>-</button>
        <button className="btn primary" onClick={inc}>+ Add {step}</button>
        <button className="btn" onClick={reset}>Reset</button>
      </div>
      <p style={{ marginTop: 8 }}>
        Current count: <strong>{count}</strong>
      </p>
      <label className="tag">
        Step
        <input
          type="number"
          min="1"
          value={step}
          onChange={(e) => setStep(Number(e.target.value) || 1)}
        />
      </label>
      <p className="tag">
        Theme in counter: {isDark ? 'Dark' : 'Light'} mode
      </p>
    </div>
  );
}
