import './login.css';

import React, {useEffect, useState} from 'react';
import { LockOpen } from '@mui/icons-material';
import {  Navigate, } from 'react-router-dom';



function Login(props){
    const initialValues = {username: "", password: ""};
    const [formValue, setFormValue] = useState(initialValues);
    const [formError, setFormError] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const users = [{username: "Joel", password : 'Maharjan123@'}]


    const handleChange = (e) =>{
        const { name , value } = e.target;
        setFormValue({...formValue, [name]: value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setFormError(validate(formValue))
        setIsSubmit(true)
    }

    useEffect(() => {
        if (Object.keys(formError).length === 0 && isSubmit){        }
    },[formError]);

    const validate = (values) =>{
        const error = {}
        const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
        if(!values.username){
            error.username = 'Username is required!*'
        }
        if(!values.password){
            error.password = "Password is required!*"
        }
        else if(!regex.test(values.password)){
            error.password = 'Password must be at least 8 characters long, must contain at least 1 uppercase letters, 1 special characters '
        }
        return error;
    }

    return(
        <div className='loginContainer'>
            <h2 className='loginText'>Log In <LockOpen /></h2>
            <form className="form" onSubmit={submitHandler}>
            <label for="Email">Username</label>
                <input className='inputEmail'
                    name = 'username'
                    id="email"
                    type="text"
                    onChange={handleChange}
                    value={formValue.username}
                />
                <p className='errorMessage'>{formError.username}</p>

                <label for="psw">Password</label>
                <input className='inputPassword'
                    name = 'password'
                    onChange={handleChange}
                    id="password"
                    type="password"
                    value={formValue.password}
                />
                <p className='errorMessage'>{formError.password}</p>
                    <button type="submit"  className="loginBtn" >
                        Log in
                    </button> 
                    {Object.keys(formError).length === 0 && isSubmit ? ( <Navigate to={"/"}> </Navigate>) 
                    :   (
                         ( console.log('please enter full detail')
                       )                   
                ) 
                    }
            </form>
        </div>

    );
}

export default Login;