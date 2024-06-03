import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';
import './Login.css';


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth) => {
// it successfully created a new user with wmail and password
                  console.log(auth);
                  if (auth) {
                    history.push('/')
                }
    })
        .catch(error => alert(error.message))
        //do some fancy firebase register
    } 

    return (
        <div className='login'>
            <Link to='/'>
            <img 
                className="login__logo" 
                src='https://www.princessauto.com/file/v1548670002286356716/collections/logo_ZZ.png' alt=""/>
            </Link>
            
            <div className='login__container'>
                <h1>Create New Account</h1>

                 <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />


                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

             </form>

                <p>
                    By signing-in you agree to the Cart app Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                 <button onClick={register} className='login__registerButton'>Create your Account
                </button>
           
            </div>

        </div>     
    )
}

export default Login
