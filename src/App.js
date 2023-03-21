import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Home from './components/home/Home'
import Team from './components/team/Team';
import Match from './components/match/Match';
import Standing from './components/standing/Standing';

function App() {
  if (localStorage.getItem("session") === null) {
    return <Login />
  }

  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/iniciarsesion' element={<Login />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/match' element={<Match />}></Route>
          <Route path='/standing' element={<Standing />}></Route>
        </Routes>
      </Router>   
    </div> 
  );
}

export default App;
