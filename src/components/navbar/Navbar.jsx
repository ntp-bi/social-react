import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

import "./navbar.css";

const Navbar = (/*{ setIsAuthenticated }*/) => {
    const [active, setActive] = useState(false);
    const [isAuthenticated, setIsAuthenticatedLocal] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setActive(!active);
    };

    const handleLogout = () => {
        // setIsAuthenticated(false);
        // setIsAuthenticatedLocal(false);
        setActive(false);
        navigate("/login");
    };


    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">i@mBi</span>
                </Link>
            </div>
            <div className="navbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input
                        type="search"
                        placeholder="Search for friend, post or video"
                        className="searchInput"
                    />
                </div>
            </div>
            <div className="navbarRight">
                <div className="navbarLinks">
                    <span className="navbarLink">Homepage</span>
                    <span className="navbarLink">Timeline</span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                        <Person />
                        <span className="navbarIconBadge">1</span>
                    </div>
                    <div className="navbarIconItem">
                        <Chat />
                        <span className="navbarIconBadge">2</span>
                    </div>
                    <div className="navbarIconItem">
                        <Notifications />
                        <span className="navbarIconBadge">1</span>
                    </div>
                </div>

                <div className="navbarAccount">
                    {!isAuthenticated ? (
                        <>
                            <img
                                src="/assets/person/1.jpeg"
                                alt=""
                                className="navbarImg"
                                onClick={handleClick}
                            />
                            {active && (
                                <ul className="navbarSubAccount">
                                    <Link
                                        to="/profile"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <li onClick={() => setActive(false)}>Profile</li>
                                    </Link>
                                    <li onClick={handleLogout}>Log out</li>
                                </ul>
                            )}
                        </>
                    ) : (
                        <div className="navbarLinks">
                            <Link to="/register" style={{ textDecoration: "none" }}>
                                <span
                                    className="navbarLink"
                                    onClick={() => setActive(false)}
                                >
                                    Register
                                </span>
                            </Link>
                            <Link to="/login" style={{ textDecoration: "none" }}>
                                <span
                                    className="navbarLink"
                                    onClick={() => setActive(false)}
                                >
                                    Log in
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
