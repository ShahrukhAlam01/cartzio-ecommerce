import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage1 from './Pages/HomePage1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage1 />} />
      </Routes>
    </Router>
  );
}

export default App;
