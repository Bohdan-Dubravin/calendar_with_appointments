import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Calendar />
    </div>
  );
}

export default App;
