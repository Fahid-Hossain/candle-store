import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import firebaseInitialize from '../../components/Firebase/firebase.init';

const useFirebase = () => {
    const [user, setUser] = useState({});
    // initialize firebase 
    firebaseInitialize();

    // auth provider
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignInHandler = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loginUser = result.user;
                setUser(loginUser);
                console.log("loginUser", loginUser);
            })
    }
    // On auth state change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser({});
            }
        });
        return () => unsubscribe;
    },[])

    const logoutHandler = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            // setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }
    // console.log("from useFirebase", user.displayName);
    return {
        googleSignInHandler,
        user,
        logoutHandler
    };
};

export default useFirebase;