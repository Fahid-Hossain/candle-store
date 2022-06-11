import React from 'react';
import useAuth from '../../hooks/useAuth/useAuth';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useAuth();

    return user.email ? children : <Navigate to="/login"/>
};

export default PrivateRoute;