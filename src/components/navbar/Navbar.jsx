import React from "react";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <span className="logo">i@mBi</span>
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
                <div className="narbarIcons">
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
                <img src="/assets/person/1.jpeg" alt="" className="navbarImg" />
            </div>
        </div>
    );
};

export default Navbar;
