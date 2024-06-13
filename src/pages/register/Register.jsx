import React from "react";
import "./register.css";

const Register = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">i@mBi</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around <br /> you on i@mBi
                        social.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input
                            placeholder="Password"
                            type="password"
                            className="loginInput"
                        />
                        <input
                            placeholder="Password again"
                            type="password"
                            className="loginInput"
                        />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton" type="submit">
                            Log into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
