import axios from "axios";
import React, {useEffect, useState} from "react";
import Menu from "../Components/Menu";
import PostCreator from "../Components/PostCreator";
import Posts from "../Components/Posts";

export default function Home(props: any) {
    const [listOfPosts, setListOfPosts] = useState([]);

    function getPosts()
    {
    
        axios.get("http://localhost:5000/api/posts").then(response => {
            console.log(response.data)
            setListOfPosts(response.data)
        })
        
      
    }

    useEffect(() => getPosts())

    return (
        <div className="home">
            <Menu />
            <PostCreator loggedUser={props.loggedUser}/>
            <Posts listOfPosts={listOfPosts} loggedUser={props.loggedUser}/>
        </div>
    )
}