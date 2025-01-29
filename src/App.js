import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Portfolio/Pages/MainPage';
import SecondaryPage from './Portfolio/Pages/SecondaryPage';
import JournalPage from './Journal/JournalPage/JournalPage';
import CodersLog from './CodersLog/CodersLog';
import AccessibilityContent from './Portfolio/AccessibilityContent/AccessibilityContent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/secondary/:id" element={<SecondaryPage />} />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/coderslog" element={<CodersLog />} />
      <Route path="/accessibility" element={<AccessibilityContent color="#f0f0f0" />} />
    </Routes>
  );
}

export default App;
