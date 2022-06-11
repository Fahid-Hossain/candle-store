import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useAuth();
    const location = useLocation();

    return user.email ? children : <Navigate to="/login" state={{from:location}} />
};

export default PrivateRoute;