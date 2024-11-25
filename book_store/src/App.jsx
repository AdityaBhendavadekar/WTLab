import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './comps/Home';
import Login from './comps/Login';
import Register from './comps/Register';
import Catalog from './comps/Catalog';

// import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cat" element={<Catalog/>} />
      </Routes>

    </Router>
      
    </>
  )
}

export default App
