import { Routes, Route, BrowserRouter } from "react-router-dom";

import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';
;

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoutes>
                        <DashBoardRoutes />
                    </PrivateRoutes>
                } />
            </Routes>
        </BrowserRouter>
        
    );
};
