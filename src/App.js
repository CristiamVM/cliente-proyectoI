import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login/Login';
import Home from './components/home/Home'

function App() {
  if (localStorage.getItem("session") === null) {
    return <Login />
  }

  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/iniciarsesion' element={<Login />}></Route>


        </Routes>
      </Router>   
    </div> 
  );
}

export default App;
