import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import logo from './../../../src/wavelength.svg';
import Button from '@mui/material/Button';
import '../SignIn/SignIn.css'
import { InputSharp, SettingsInputSvideo } from '@mui/icons-material';

const defaultvalues = {
    email:"",
    password:"",
};


function SignIn(){
    const [inputs, setInputs] = useState(defaultvalues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]:value}) )
        
    }

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        
        event.preventDefault();
        // console.log(inputs);
        setErrors(validate(inputs));
        setIsSubmit(true);
        
    }

    useEffect(()=>{
        console.log(errors);
        if(Object.keys(errors).length === 0 && isSubmit){
            console.log(inputs);
            return navigate('/discover');
        }
    }, [errors])
    
    const validate = (values) =>
    {
        const all_errors = {};

        const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.email){
            all_errors.email = "Email is required!";
        }
        else if (!regex.test(values.email)){
            all_errors.email="Invalid email format!";
        }
        if (!values.password){
            all_errors.password = "Password is required!";
        }
        else if (values.password.length < 4){
            all_errors.password = "Password must be more than 4 characters."
        }

        return all_errors;
    };

    

    return (
        <>
        <div id="navbar" >
           
            <ul>
            <li>
                <Link to="/signup" style={{ textDecoration: 'none', color:'black' }}>Sign Up</Link>
            </li>
            <li id="logo_li">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    {/* <img src={logo} id="logo_img" alt="logo" /> */}
                    〰️
                </Link>
            </li>
            </ul>
            
        </div>
        
        <div id="signincontainer">
            <img src={logo} id="mainlogo" alt="logo" />
            {/* <pre>{JSON.stringify(inputs)}</pre> */}
            <div id="signinform">
                <p id="signinheader" >Log In</p>
                <form onSubmit={handleSubmit} >
                <label >
                    <p>Email</p>
                    <input type="text" name= "email" value={inputs.email} onChange={handleChange} />
                </label>
                <p className="errormsg">{errors.email }</p>
                <label>
                    <p>Password</p>
                    <input type="password" name= "password" value={inputs.password} onChange={handleChange} />
                </label>
                <p className= "errormsg">{errors.password }</p>
                <div>
                    <Button type="submit" id="submitbutton" variant="contained" color="primary"> Submit</Button>
                </div>
                </form>
            </div>

        </div>
        
        </>
        
      );
};

export default SignIn;
