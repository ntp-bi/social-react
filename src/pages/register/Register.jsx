import React from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate("/login");
    };

    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">i@mBi</h3>
                    <span className="registerDesc">
                        Connect with friends and the world around <br /> you on i@mBi
                        social.
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input placeholder="Username" className="registerInput" />
                        <input placeholder="Email" className="registerInput" />
                        <input
                            placeholder="Password"
                            type="password"
                            className="registerInput"
                        />
                        <input
                            placeholder="Password again"
                            type="password"
                            className="registerInput"
                        />
                        <button className="registerButton" onClick={handleRegister}>
                            Sign Up
                        </button>
                        <button
                            className="registerRegisterButton"
                            onClick={handleRegister}
                        >
                            Log into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
