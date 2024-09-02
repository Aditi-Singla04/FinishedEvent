import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Finish from './components/detailsFinished';
import Shashi from './components/shashiDetails'
import Navbar from './components/navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailsFinsihed" element={<Finish/>} />
          <Route path="/shashiDetails" element={<Shashi/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






