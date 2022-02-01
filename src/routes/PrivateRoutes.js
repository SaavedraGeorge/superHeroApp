import { useContext } from "react";
import { Navigate, useLocation} from "react-router-dom";
import { AuthContex } from "../auth/authContex";

export const PrivateRoutes = ( {children} ) => {

    const {pathname, search} = useLocation();


    localStorage.setItem('lastPath', pathname + search);
    

    const { user } = useContext(AuthContex);


    return user.logged 
    ? children
    : <Navigate to='/login' />
};
