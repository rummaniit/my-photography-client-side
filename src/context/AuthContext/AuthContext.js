import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase/firebase.init';



export const AuthServices = createContext()
const AuthContext = ({ children }) => {
    const auth = getAuth(app);
    const [services, setServices] = useState([])
    const [reviews, setReviews] = useState([])
    const [currentUser, setcurrentUser] = useState('')
    // const [users, setUsers] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // setLoading(true)
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                // return
                // setLoading(false)
            })

    }, [])

    useEffect(() => {
        // setLoading(true)
        fetch('http://localhost:5000/reviews/')
            .then(res => res.json())
            .then(data => setReviews(data))
        // .finally(() => setLoading(false))
    }, [])
    // Authentication
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const Logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, presentUser => {
            console.log(presentUser);
            setcurrentUser(presentUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])


    let authInfo = {
        services,
        reviews,
        createUser,
        signIn,
        currentUser, Logout, loading, loginWithGoogle, setReviews, setLoading
    }
    return (
        <AuthServices.Provider value={authInfo}>
            {children}
        </AuthServices.Provider>
    );
};

export default AuthContext;