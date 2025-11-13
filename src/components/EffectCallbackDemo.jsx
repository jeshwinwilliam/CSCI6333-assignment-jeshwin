import React,{useState,useEffect,useCallback} from 'react';
import { useTheme } from '../context/ThemeContext';
export default function EffectCallbackDemo(){
  const { theme } = useTheme();
  const [value,setValue]=useState('');
  const [saved,setSaved]=useState('');
  const save=useCallback(()=>setSaved(value),[value]);
  useEffect(()=>{if(value)console.log('Effect value:',value);},[value]);
  return (
    <div className="card">
      <h1>Effect & Callback Demo</h1>
      <p>Theme: <strong>{theme}</strong></p>
      <input value={value} onChange={e=>setValue(e.target.value)} placeholder="Type and click save" />
      <div className="row" style={{marginTop:8}}>
        <button className="btn primary" onClick={save}>Save value</button>
      </div>
      <p className="tag">Last saved: <strong>{saved||'Nothing yet'}</strong></p>
    </div>
  );
}
