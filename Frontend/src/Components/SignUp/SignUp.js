import * as React from 'react';
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import logo from './../../../src/wavelength.svg';
import '../SignUp/SignUp.css';
import Button from '@mui/material/Button';

const defaultvalues = {
    email:"",
    password:"",
};

function SignUp(){
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
            <Link to="/signin" style={{ textDecoration: 'none', color:'black' }}>Log In</Link>
            </li>
            <li id="logo_li">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    {/* <img src={logo} id="logo_img" alt="logo" /> */}
                    〰️
                </Link>
            </li>
            </ul>
            
        </div>
        
        <div id="signupcontainer">
            
            <img src={logo} id="mainlogo" alt="logo" />
           
                <form onSubmit={handleSubmit} >
                <div id="signupform">

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
                
                
            </div>
            <div>
                    <Button type="submit" id="signupbutton" variant="contained" color="primary"> Sign Up</Button>
                </div>
</form>
            
        </div>

        
        </>
        
      );
};

export default SignUp;