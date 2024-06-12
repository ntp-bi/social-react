import React from "react";
import Share from "../../components/share/Share";
import "./feed.css";
import Post from "../post/Post";

const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default Feed;
