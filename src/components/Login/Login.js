import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../App';
import SignIn from '../SignIn/SignIn';
import GoogleFbSignIn from '../GoogleFbSignIn/GoogleFbSignIn';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useState({
    name: "", email: "", password: "", message: "", success: false
  })
  const handleBlur = (e) => {
    console.log(e.target.name, e.target.value);
    let validFrom = true;
    if (e.target.name === 'email') {
      validFrom = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === 'password') {
      const validPassword = /(?=.*\d)/.test(e.target.value);
      const validPasswordCount = e.target.value.length > 6;
      validFrom = validPassword && validPasswordCount;
    }
    if (validFrom) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setUser(newUser)
    }
  }
  const handleSubmit = (e) => {
    if (user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const newUser = { ...user };
          newUser.success = true;
          newUser.message = "";
          setUser(newUser);
          const { displayName, email } = userCredential.user;
          const SignedInUser = { name: displayName, email }
          setLoggedInUser(SignedInUser);
          history.replace(from);
        })
        .catch((error) => {
          const newUser = { ...user };
          const errorMessage = error.message;
          newUser.message = errorMessage;
          newUser.success = false;
          setUser(newUser);
        });
    }
    e.preventDefault()
  }

  return (
    <div className="d-flex justify-content-center">
      <div>
      <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
        {user.message}
      </p>
      {user.success && (
        <p style={{ color: "green", textAlign: "center", marginTop: "10px" }}>
          User Login Successfully
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
        <br />
        <input type="password" name="password" onBlur={handleBlur} id="" placeholder="Your Password" required />
        <br />
        <input type="submit" value="Submit" />
        <br/>
        <Link to="SignUp">Creat an account</Link>
      </form>
      <GoogleFbSignIn></GoogleFbSignIn>

    </div>
    </div>
  );
};

export default Login;