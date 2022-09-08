import React from "react";
import axios from "axios";

export default function Posts() {

    let posts;

    const showListOfPosts = () => {
        axios.get("http://localhost:5000/api/posts").then((response) => {
            posts = response.data;
            console.log(posts)
        })
    }
    showListOfPosts();
    return (
        <div className="Posts">
            {posts}
        </div>
    );
}