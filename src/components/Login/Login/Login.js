import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import loginImg from '../../../images/Group 140.png';
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { handleGoogleSignIn, initializeLoginFramework } from './LoginManager';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    // const handleGoogleSignIn = () => {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     firebase.auth().signInWithPopup(provider)
    //         .then(res => {
    //             const { displayName, email } = res.user;
    //             const signedInuser = { name: displayName, email };
    //             setLoggedInUser(signedInuser);
    //             setUserToken();
    //         })
    //         .catch(error => {
    //             var errorMessage = error.message;
    //             console.log(errorMessage);
    //         });
    // }

    const [setUser] = useContext(UserContext);
    initializeLoginFramework();
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res)
        setLoggedInUser(res);
        history.replace(from);
        if (redirect) {
        }
    }

    // const setUserToken = () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    //         .then(function (idToken) {
    //             sessionStorage.setItem('token', idToken);
    //             history.replace(from);
    //         })
    //         .catch(function (error) {
    //             // Handle error
    //         });
    // }

    return (
        <section className="container-fluid">
            <div className="row align-items-center">
                <div className="col-md-5 offset-md-1 p-5">
                    <h5 className="text-center">Login</h5>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group mt-4">
                        <button onClick={googleSignIn} className="btn form-control">Continue with Google</button>
                    </div>
                </div>
                <div className="col-md-6 pt-5 d-flex justify-content-end">
                    <img className="img-fluid login-img" src={loginImg} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Login;