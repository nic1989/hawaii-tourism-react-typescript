import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './containers/Header';
import Home from './containers/Home/Home';
import Activity from './containers/Highlights/Activities';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/activity/:activity" element={<Activity />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
