// import logo from './../../logo.svg';
import logo from './../../../src/wavelength.svg';
import './App.css';
import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

//import home component
import Home from "../Home/Home";
//import sign in component
import SignIn from "../SignIn/SignIn";
//import sign up component
import SignUp from "../SignUp/SignUp";
//import discover component
import Discover from "../Discover/Discover";
//import matches component
import Matches from "../Matches/Matches";
//import profile component
import Profile from "../Profile/Profile";


function App() {
  
  return (

  <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element = {<SignUp />} />
        <Route path="/discover" element = {<Discover />} />
        <Route path="/matches" element = {<Matches />} />
        <Route path="/profile" element = {<Profile />} />
      </Routes>

  </>
  );
}

export default App;

