import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import logo from './../../../src/wavelength.svg';
import '../Matches/Matches.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LogoutIcon from '@mui/icons-material/Logout';

function Matches(){

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
            <p id="matchesheader">Your Matches</p>
            
        </div>
        
        </>
    );
}

export default Matches;