import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
import './Login.css';


function Login() {
    const [{}, dispatch] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch(error => alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login__logo'>
                <img src='https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png' alt=''/>
                <h2>Connect with friends and the world<br/> around you on Facebook.</h2>
            </div>
            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
