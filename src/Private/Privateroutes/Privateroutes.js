import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthServices } from '../../context/AuthContext/AuthContext';

const Privateroutes = ({ children }) => {
    const { currentUser, loading } = useContext(AuthServices)
    let location = useLocation()
    // console.log(currentUser);
    if (loading) {
        return <>
            <div className="w-16 h-16 border-4 mx-auto border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </>
    }
    if (!currentUser) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default Privateroutes;