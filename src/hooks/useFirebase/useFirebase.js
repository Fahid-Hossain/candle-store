import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import firebaseInitialize from '../../components/Firebase/firebase.init';

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [firebaseError, setFirebaseError] = useState('');
    const [message, setMessage] = useState("");
    // initialize firebase 
    firebaseInitialize();

    // auth provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();

    //----------------/ google Sign in Method /----------------/
    const googleSignInHandler = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loginUser = result.user;
                setUser(loginUser);
                console.log("loginUser", loginUser);
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setFirebaseError(errorMessage);
            })
    }

    //----------------/ github Sign in Method /----------------/
    const githubSignInHandler = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // The signed-in user info.
                const loginUser = result.user;
                setUser(loginUser);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                setFirebaseError(errorMessage);

            });
    }

    //----------------/ Register with email, password /----------------/

    const registerUser = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const loginUser = result.user;
                setUser(loginUser)
                // .. update userName profile
                setUserName(name);
                // success message
                setMessage("Successfully Registation complete, pls Login.")
                setFirebaseError('');
                //Email varification
                // sendEmail();
            })
            .catch((error) => {
                const errorMessage = error.message;
                setFirebaseError(errorMessage);
                setMessage('');
            });
    }

    //----------------/ send email varification when register /----------------/

    const sendEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
            });
    }




    //----------------/ update profile name with email and password /----------------/
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            const errorMessage = error.message;
            setFirebaseError(errorMessage);
        });
    }


    //----------------/ Login with email, password /----------------/

    const loginUSer = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const loginUser = result.user;
                setUser(loginUser);
                setFirebaseError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setFirebaseError(errorMessage);
            });
    }

    // On auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser({});
            }
        });
        return () => unsubscribe;
    }, [])

    //----------------/ logout Method /----------------/
    const logoutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // setUser({});
        }).catch((error) => {
            // An error happened.
            const errorMessage = error.message;
            setFirebaseError(errorMessage);
        });
    }
    // console.log("from useFirebase", user.displayName);
    return {
        googleSignInHandler,
        user,
        logoutHandler,
        githubSignInHandler,
        registerUser,
        loginUSer,
        setUserName,
        firebaseError,
        message
    };
};

export default useFirebase;