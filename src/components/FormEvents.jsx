import React,{useState} from 'react';
import { useTheme } from '../context/ThemeContext';
export default function FormEvents(){
  const { isDark } = useTheme();
  const [form,setForm]=useState({email:'',message:''});
  const [last,setLast]=useState(null);
  const onChange=e=>setForm(f=>({...f,[e.target.name]:e.target.value}));
  const onSubmit=e=>{e.preventDefault();if(!form.email.includes('@')){alert('Enter valid email');return;}setLast(form);setForm({email:'',message:''});};
  return (
    <div className="card">
      <h1>Form Events</h1>
      <p>Theme: {isDark?'Dark':'Light'} mode</p>
      <form onSubmit={onSubmit}>
        <label className="tag">Email
          <input name="email" value={form.email} onChange={onChange} />
        </label>
        <label className="tag">Message
          <textarea name="message" value={form.message} onChange={onChange} />
        </label>
        <div className="row"><button className="btn primary" type="submit">Send</button></div>
      </form>
      {last && <p style={{marginTop:8}}>Last: <strong>{last.email}</strong> – "{last.message}"</p>}
    </div>
  );
}
