import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, useHistory } from 'react-router-dom';
import {useStateValue} from '../../Context'
import './login.css'

function Login () {

    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[errors, setErrors] = useState('');
    const{_addToStorage , hasToken} = useStateValue()

    console.log(hasToken , 'tokens')
    console.log(email)

    //set correct email and password
    const emailOrigin = "hamouda@gmail.com";
    const passOrigin = "123456";


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email == emailOrigin && password == passOrigin)
          { 
            _addToStorage()
            console.log('ff')
           
          }
        else
          {
              setErrors('Wrong info. Please try again.');
          }
          
    }
        return(

            <div className="form login">
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>
                        Email:
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <div className="error-msg">
                    {errors}
                </div>
                <input type="submit" value="Submit" className="btn btn-red" />
                </form>
            </div>
        )
}
export default Login;
