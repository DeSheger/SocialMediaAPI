import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

export default function Posts() {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/posts").then(response => {
            console.log(response.data)
            setListOfPosts(response.data)
        })
        
    },[])  

    return (
        <div className="posts">
            {listOfPosts.map((post:any, index:any) => <Post title={post.title} description={post.description}
            date={post.data} image={post.image}/>)}
        </div>
    );
}