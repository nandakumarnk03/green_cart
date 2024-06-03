import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';
import './Login.css';


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
            <img 
                className="login__logo" 
                src='https://www.princessauto.com/file/v1548670002286356716/collections/logo_ZZ.png' alt=""/>
            </Link>
            
            <div className='login__container'>
                <h1>Sign-in</h1>

                 <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />


                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Cart app Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <Link to="/Register">
                 <button className='login__registerButton'>New User?
                </button>
                </Link>
              
           
            </div>

        </div>     
    )
}

export default Login

















/*import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';
import './Login.css';


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

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
                <h1>Sign-in</h1>

                 <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />


                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
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

export default Login*/
