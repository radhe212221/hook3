import React from 'react';
import './style.css';
import { useWindow } from './hooks';

export default function App() {
  const { width, height } = useWindow();
  return (
    <div>
      <h1>w : {width}</h1>
      <h1>h : {height}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
