import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.config';

export const AllContext = createContext();

const ContextProvider = ({children}) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe();
    }, [])

    const signUpWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider()

    const signUpWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    const obj = {
        user,
        setUser,
        loading,
        setLoading,
        signInWithEmail,
        signUpWithEmail,
        signUpWithGoogle
    }

    return (
        <AllContext value={obj}>
            {children}
        </AllContext>
    );
};

export default ContextProvider;