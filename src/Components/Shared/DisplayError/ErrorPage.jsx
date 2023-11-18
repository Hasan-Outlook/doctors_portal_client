import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const ErrorPage = () => {
    const error = useRouteError();
    const {signout} = useContext(AuthContext);

    const handleSignout = () => {
        signout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className='text-center mt-10'>
            <p className='text-red-500 text-center mt-20'>Some thing want wrong</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h1 className='text-2xl'>Please <button onClick={handleSignout}>Sign Out</button> and login again.</h1>
        </div>
    );
};

export default ErrorPage;