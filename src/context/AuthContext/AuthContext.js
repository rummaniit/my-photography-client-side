import React, { createContext, useEffect, useState } from 'react';


export const AuthServices = createContext()
const AuthContext = ({ children }) => {

    const [services, setServices] = useState([])
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/reviews/')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    let authInfo = {
        services,
        reviews
    }
    return (
        <AuthServices.Provider value={authInfo}>
            {children}
        </AuthServices.Provider>
    );
};

export default AuthContext;