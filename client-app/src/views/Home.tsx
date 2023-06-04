import axios from "axios";
import React, {useEffect, useState} from "react";
import Menu from "../components/Menu";
import PostCreator from "../components/PostCreator";
import Posts from "../components/Posts";
import { Navigate } from "react-router-dom";

function Home(props: any) {
    const [listOfPosts, setListOfPosts] = useState([]);

    function getPosts()
    {
    
        axios.get("http://localhost:5000/api/posts").then(response => {
            console.log(response.data)
            setListOfPosts(response.data)
        })
        
      
    }

    useEffect(() => getPosts())

    if (props.loggedUser.Id == null) {
        return <Navigate to="/" replace />;
    }
    return (
        <div className="home">
            <Menu />
            <PostCreator loggedUser={props.loggedUser}/>
            <Posts listOfPosts={listOfPosts} loggedUser={props.loggedUser}/>
        </div>
    )
}

export default Home;