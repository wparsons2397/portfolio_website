import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Portfolio/Pages/MainPage';
import JournalPage from './Journal/JournalPage/JournalPage';
import CodersLog from './CodersLog/CodersLog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/coderslog" element={<CodersLog />} />
    </Routes>
  );
}

export default App;
