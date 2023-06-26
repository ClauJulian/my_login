import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeView from "../pages/home/view/HomeView";
import LoginView from "../pages/login/view/LoginView";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";


export const Router = createBrowserRouter([
    {    
        path: "/",
        element: (
            <ProtectedRoutes>
                <HomeView/>
            </ProtectedRoutes>
            ),
    },
    {    
        path: "/login",
        element:(
            <PublicRoutes>
                <LoginView/>
            </PublicRoutes> 
            ),
    },
    // {    
    //     path: "*",
    //     element: <Navigate to="/"/>,
    // }
])