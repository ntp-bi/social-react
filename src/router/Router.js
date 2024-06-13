import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Profile from "../pages/profile/Profile";
import Home from "../pages/home/Home";
import ProtectedRoute from "../components/protectedRoute/ProtectedRoute";

const Router = () => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />

            {/* <Route
                path="/profile"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Profile />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/"
                element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Home />
                    </ProtectedRoute>
                }
            /> */}
        </Routes>
    );
};

export default Router;
