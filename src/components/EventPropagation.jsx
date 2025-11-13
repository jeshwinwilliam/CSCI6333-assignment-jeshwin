import React from 'react';
import { useTheme } from '../context/ThemeContext';
export default function EventPropagation(){
  const { theme } = useTheme();
  const outer=()=>console.log('Outer clicked');
  const inner=e=>{e.stopPropagation();alert('Inner button – propagation stopped');};
  return (
    <div className="card" onClick={outer}>
      <h1>Event Propagation</h1>
      <p>Theme: <strong>{theme}</strong></p>
      <button className="btn" onClick={inner}>Inner Button</button>
    </div>
  );
}
