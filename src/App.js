// src/App.js
import React from 'react';
import MainContent from './components/MainContent';

const App = () => {
  return (
      <div className="flex flex-col md:flex-row min-h-screen">
        <MainContent />
      </div>
  );
};

export default App;
