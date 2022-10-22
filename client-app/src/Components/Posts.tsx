import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

export default function Posts(props: any) {
    const [listOfPosts, setListOfPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/posts").then(response => {
            console.log(response.data)
            setListOfPosts(response.data)
        })
        
    },[])  

    return (
        <div className="posts">
            {listOfPosts.map((post:any, index:any) => <Post id={post.id} title={post.title} 
            author={post.author} authorId={post.authorId} description={post.description}
            date={post.date} image={post.image} userId={props.loggedUser.Id}/>)}
        </div>
    );
}