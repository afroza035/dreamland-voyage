import React, { useState } from 'react';
import firebaseConfig from '../Login/firebase.config';
import firebase from "firebase/app";
import "firebase/auth";

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const SignUp = () => {
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
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    updateUserName(user.name)
                    const newUser = { ...user };
                    newUser.success = true;
                    newUser.message = "";
                    setUser(newUser);
                    const { displayName, email } = userCredential.user;
                    const loggedInUser = { name: displayName, email };
                })
                .catch((error) => {
                    const newUser = { ...user };
                    const errorMessage = error.message;
                    newUser.message = errorMessage;
                    newUser.success = false;
                    setUser(newUser);
                });
        }
        e.preventDefault();
    }
    const updateUserName = (name) => {
        var user = firebase.auth().currentUser;

        user
            .updateProfile({
                displayName: name,
            })
            .then(() => {

            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="d-flex justify-content-center">
            <div>
            <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
                {user.message}
            </p>
            {user.success && (
                <p style={{ color: "green", textAlign: "center", marginTop: "10px" }}>
                    User Create Successfully
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onBlur={handleBlur} placeholder="Name" required />
                <br />
                <input type="text" name="email" onBlur={handleBlur} placeholder="Email address" required />
                <br />
                <input type="password" name="password" onBlur={handleBlur} id="" placeholder="Password" required />
                <br />
                <input type="password" name="password" onBlur={handleBlur} id="" placeholder="Confirm Password" required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
        </div>
    );
};

export default SignUp;