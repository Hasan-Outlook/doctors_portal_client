import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext)
    const location = useLocation();

    if (loding) {
        return <span className="loading loading-ring loading-lg text-secondary flex text-center"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate >
};

export default PrivateRoute;