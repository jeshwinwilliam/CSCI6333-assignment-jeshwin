import React,{useState} from 'react';
import { useTheme } from '../context/ThemeContext';
export default function TextInputLogger(){
  const { theme } = useTheme();
  const [value,setValue]=useState('');
  const onChange=e=>{console.log('onChange',e.currentTarget.value);setValue(e.target.value)};
  return (
    <div className="card">
      <h1>Text Input Logger</h1>
      <p>Theme: <strong>{theme}</strong></p>
      <input value={value} onChange={onChange} placeholder="Type something..." />
      <p>Current input: <strong>{value||'—'}</strong></p>
    </div>
  );
}
