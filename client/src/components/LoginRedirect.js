import React from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/auth';

function LoginRedirect({element}) {
    if(Auth.loggedIn()) {
        return (element)
    }
    return ( <Navigate to='/login'/> )
};

export default LoginRedirect;