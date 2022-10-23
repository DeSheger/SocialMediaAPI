import React from "react";
import Post from "./Post";

export default function Posts(props: any) {
    
    return (
        <div className="posts">
            {props.listOfPosts.map((post:any, index:any) => <Post id={post.id} title={post.title} 
            author={post.author} authorId={post.authorId} description={post.description}
            date={post.date} image={post.image} userId={props.loggedUser.Id}/>)}
        </div>
    );
}