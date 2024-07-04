import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />}> </Route>
          <Route path='/login' element={<Login />}> </Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
