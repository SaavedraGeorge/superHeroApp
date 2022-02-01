import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../auth/authContex";

export const PublicRoute = ( {children} ) => {

    
    const { user } = useContext(AuthContex);

    return user.logged 
    ? <Navigate to='/' />
    : children
};