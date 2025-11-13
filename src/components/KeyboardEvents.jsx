import React,{useState} from 'react';
import { useTheme } from '../context/ThemeContext';
export default function KeyboardEvents(){
  const { theme } = useTheme();
  const [key,setKey]=useState('');
  const [shortcut,setShortcut]=useState(false);
  const onKeyDown=e=>{setKey(e.key);if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();setShortcut(true);}};
  return (
    <div className="card">
      <h1>Keyboard Events</h1>
      <p>Theme: <strong>{theme}</strong></p>
      <input onKeyDown={onKeyDown} placeholder="Press keys here..." />
      <p>Last key: <strong>{key||'—'}</strong></p>
      {shortcut && <p className="tag">Shortcut Ctrl/⌘ + K used!</p>}
    </div>
  );
}
