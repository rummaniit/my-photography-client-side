import React, { createContext, useEffect, useState } from 'react';


export const AuthServices = createContext()
const AuthContext = ({ children }) => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    let authInfo = {
        services
    }
    return (
        <AuthServices.Provider value={authInfo}>
            {children}
        </AuthServices.Provider>
    );
};

export default AuthContext;