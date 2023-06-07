import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import PostCreator from "../components/PostCreator";
import Posts from "../components/Posts";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import Main from "./Main";

function Home(props: any) {
    const [listOfPosts, setListOfPosts] = useState([]);

    function getPosts() {

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
        <Layout>
            <Menu />
            <Main>
                <PostCreator loggedUser={props.loggedUser} />
                <Posts listOfPosts={listOfPosts} loggedUser={props.loggedUser} />
            </Main>
        </Layout>
    )
}

export default Home;