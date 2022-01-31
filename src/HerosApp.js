import React, { useEffect, useReducer } from 'react';
import { AuthContex } from './auth/authContex';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routes/AppRouter';

const init = () => {
    return JSON.parse( localStorage.getItem('user')) || { logged: false };
}



export const HerosApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    useEffect(() => {
      if(!user) return;
    
      localStorage.setItem('user', JSON.stringify(user));
    }, [ user ]);
    

    return (
        <AuthContex.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />
        </AuthContex.Provider>
    );
};
