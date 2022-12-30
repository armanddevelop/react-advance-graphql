import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({ user, redirectPath }) => {
    if (!user) return <Navigate to={redirectPath} replace />;
    return <Outlet />;
};
