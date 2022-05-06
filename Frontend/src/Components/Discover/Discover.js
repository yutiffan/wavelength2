import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import logo from './../../../src/wavelength.svg';
import '../Discover/Discover.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton } from '@mui/material';
import TinderCard from 'react-tinder-card';
import { CurrencyYenTwoTone } from '@mui/icons-material';




function Discover(){
    const [people, setPeople] = useState([
        {
            name:'tiffany',
        },
        {
            name:'ashley',
        },
        {
            name:'pete',
        },
        {
            name:'kelly',
        }

    ]);
    
    const navigate = useNavigate();
    function logout(){
        //clear data first??

        return navigate('/');
    }




    return(
        <>
        
        <div id="navbar" >
           <ul>
               
                <li>
                    < LogoutIcon fontSize="large" onClick= {logout}/>
                    
               </li>

                <li>
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
                    < AccountCircleIcon fontSize="large"/>
                    </Link>

               </li>
               
               <li>
               
                    <Link to="/matches" style={{ textDecoration: 'none', color: 'black' }}>
                        <FavoriteRoundedIcon fontSize="large"/>
                    </Link>
               </li>
               <li>
                    <Link to="/discover" style={{ textDecoration: 'none', color: 'black' }}>
                    < HomeRoundedIcon fontSize="large"/>
                    </Link>
               </li>
            
           <li id="logo_li">
               <Link to="/" style={{ textDecoration: 'none' }}>
                   {/* <img src={logo} id="logo_img" alt="logo" /> */}
                   〰️
               </Link>
           </li>
           </ul>
           
       </div>
       
       <div id="maincontainer">
            <p id="discoverheader">Find Your Match</p>
            <div id="allcards">
                
                {people.map((person) => (
                    
                    <TinderCard className="swipe" key={person.name} preventSwipe={["up","down"]}>
                        <div id="profile">
                            <h1>Name: {person.name} </h1>

                        </div>
                    </TinderCard>
                ))}
                
            </div>
            <div className="swipebuttons">
                <IconButton id="nobutton"  >
                    <CancelIcon fontSize="large" />
                </IconButton>

                <IconButton id="yesbutton" >
                    <CheckCircleIcon fontSize="large" />
                </IconButton>
            </div>
       </div>
       
       
        
        
        </>
    );
}

export default Discover;