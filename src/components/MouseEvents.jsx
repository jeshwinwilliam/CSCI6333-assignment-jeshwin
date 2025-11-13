import React,{useState} from 'react';
import { useTheme } from '../context/ThemeContext';
export default function MouseEvents(){
  const { isDark } = useTheme();
  const [hover,setHover]=useState(false);
  const [pos,setPos]=useState({x:0,y:0});
  const onMove=e=>{
    const rect=e.currentTarget.getBoundingClientRect();
    setPos({x:Math.round(e.clientX-rect.left),y:Math.round(e.clientY-rect.top)});
  };
  return (
    <div className="card card-mouse" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} onMouseMove={onMove}>
      <h1>Mouse Events</h1>
      <p>Theme: {isDark?'Dark':'Light'}</p>
      <p>Status: <strong>{hover?'Hovering':'Not hovering'}</strong></p>
      <p>Position: <strong>{pos.x}px, {pos.y}px</strong></p>
    </div>
  );
}
