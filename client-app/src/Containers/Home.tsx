import React, {useState} from "react";
import Menu from "../Components/Menu";
import Posts from "../Components/Posts";

export default function Home(props: any) {

    return (
        <div className="home">
            <Menu />
            <Posts />
        </div>
    )
}