import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import PostCreator from "../components/PostCreator";
import Posts from "../components/Posts";
import Layout from "./Layout";
import Main from "./Main";
import Session from "../components/Session";
import getPosts from "../services/getPosts";
import { useDispatch, useSelector } from "react-redux";

function Home(props: any) {
    const listOfPosts = useSelector((state: any) => state.getPostsReducer)
    const [update, setUpdate] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{getPosts(dispatch, setUpdate, update)},[update])

    return (
        <Layout>
            <Session loggedUser={props.loggedUser}/>
            <Menu loggedUserName={props.loggedUser.DisplayName}/>
            <Main>
                <PostCreator loggedUser={props.loggedUser} />
                <Posts listOfPosts={listOfPosts} loggedUser={props.loggedUser} />
            </Main>
        </Layout>
    )
}

export default Home;