import React from "react";
import Post from "./Post";


export default function Posts(props: any) {
    return (
        <div className="posts">
            {props.userPosts?
            props.listOfPosts.map((post:any, index:any) => props.loggedUser.Id==post.authorId?<Post key={post.id} id={post.id} title={post.title} 
            author={post.author} authorId={post.authorId} description={post.description}
            date={post.date} image={post.image} userId={props.loggedUser.Id}/>:null).reverse()
            :
            props.listOfPosts.map((post:any, index:any) => <Post key={post.id} id={post.id} title={post.title} 
            author={post.author} authorId={post.authorId} description={post.description}
            date={post.date} image={post.image} userId={props.loggedUser.Id}/>).reverse()
        }
        </div>
    );
}