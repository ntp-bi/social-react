import React from "react";
import "./login.css";

const Login = () => {
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
                        <input placeholder="Email" className="loginInput" />
                        <input
                            placeholder="Password"
                            type="password"
                            className="loginInput"
                        />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton" type="submit">
                            Create New Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
