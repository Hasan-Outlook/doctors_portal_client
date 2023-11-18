import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loding } = useContext(AuthContext);
    const [isAdmin, isAdminLoding] = useAdmin(user?.email)
    const location = useLocation();

    if (loding || isAdminLoding) {
        return <span className="loading loading-ring loading-lg text-secondary flex text-center"></span>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate >
};

export default AdminRoute;