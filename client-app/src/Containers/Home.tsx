import React, {useState} from "react";
import Menu from "../Components/Menu";
import PostCreator from "../Components/PostCreator";
import Posts from "../Components/Posts";

export default function Home(props: any) {

    return (
        <div className="home">
            <Menu />
            <PostCreator loggedUser={props.loggedUser}/>
            <Posts loggedUser={props.loggedUser}/>
        </div>
    )
}