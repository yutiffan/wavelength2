import logo from './../../../src/wavelength.svg';
import './Home.css';
import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


function Home() {
    return (
      
      <Container maxWidth="sm" className="Home">
        {/* <Paper elevation={0} > */}
          
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h4" component="h1" gutterBottom>
            Dating app based on music taste.
          </Typography>
          <Link to = "/signup" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" classname= "buttons">
              Join
            </Button>
            </Link>

          <Link to = "/signin" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="secondary" classname="buttons">
                Log In
            </Button>
          </Link>
       
        {/* </Paper> */}
      </Container>
  
    );
  }

  export default Home;