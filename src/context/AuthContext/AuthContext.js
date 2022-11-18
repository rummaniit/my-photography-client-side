import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase/firebase.init';



export const AuthServices = createContext()
const AuthContext = ({ children }) => {
    const auth = getAuth(app);
    const [services, setServices] = useState([])
    const [reviews, setReviews] = useState([])
    const [currentUser, setcurrentUser] = useState('')
    const [errors, setErrors] = useState('')
    // // const [users, setUsers] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // (async function () {
        //     const data = await fetch('https://my-photography-server-side.vercel.app/services')
        //     setServices(data)
        //     console.log(data)
        // })();
        fetch('https://my-photography-server-side-2.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                console.log(data)
            })
            .catch(e => {
                console.log(e.message);
            });

    }, [services])

    useEffect(() => {
        // setLoading(true)
        fetch('https://my-photography-server-side-2.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(e => {
                console.log(e);
                // return e;
            });
        // .finally(() => setLoading(false))
    }, [reviews])
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
        currentUser, Logout, loading, loginWithGoogle, setServices, setReviews, setLoading, setErrors, errors
    }
    return (
        <AuthServices.Provider value={authInfo}>
            {children}
        </AuthServices.Provider>
    );
};

export default AuthContext;