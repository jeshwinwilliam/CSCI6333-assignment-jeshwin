import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ClickCounter from './components/ClickCounter';
import TextInputLogger from './components/TextInputLogger';
import ClassInputLogger from './components/ClassInputLogger';
import FormEvents from './components/FormEvents';
import KeyboardEvents from './components/KeyboardEvents';
import MouseEvents from './components/MouseEvents';
import EventPropagation from './components/EventPropagation';
import EffectCallbackDemo from './components/EffectCallbackDemo';
import './styles.css';

const Header = () => {
  const { theme, isDark, toggle } = useTheme();
  return (
    <header className="card header">
      <div>
        <h1>CSCI 6333 – Assignment 03</h1>
        <h2>React Hooks & Events with Global Theme</h2>
        <p className="tag">Student: Jeshwin William James</p>
      </div>
      <div className="row">
        <span className="tag">Current theme: <strong>{theme}</strong></span>
        <button className="btn" onClick={toggle}>Switch to {isDark?'Light':'Dark'} mode</button>
      </div>
    </header>
  );
};

function ContentGrid(){
  const { theme } = useTheme();
  const themeLabel = theme === 'dark' ? 'Dark mode' : 'Light mode';
  return (
    <main className="grid">
      <ClickCounter />
      <TextInputLogger />
      <ClassInputLogger themeLabel={themeLabel} />
      <FormEvents />
      <KeyboardEvents />
      <MouseEvents />
      <EventPropagation />
      <EffectCallbackDemo />
    </main>
  );
}

export default function App(){
  return (
    <ThemeProvider>
      <div className="app-root">
        <Header />
        <ContentGrid />
      </div>
    </ThemeProvider>
  );
}
