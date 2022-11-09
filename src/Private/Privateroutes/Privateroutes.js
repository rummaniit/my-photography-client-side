import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthServices } from '../../context/AuthContext/AuthContext';

const Privateroutes = ({ children }) => {
    const { currentUser, loading } = useContext(AuthServices)
    let location = useLocation()
    console.log(currentUser);
    if (loading) {
        return <>
            <h1 className="text-3xl text-blue-900">Loading</h1>
        </>
    }
    if (!currentUser) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default Privateroutes;