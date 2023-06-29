import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import PostCreator from "../components/PostCreator";
import Posts from "../components/Posts";
import { Navigate } from "react-router-dom";
import Layout from "./Layout";
import Main from "./Main";
import NotificationsList from "../components/NotificationsList";

function Notifications(props: any) {
    const [listOfNotifications, setListOfNotifications] = useState([]);

    function getNotifications() {

        axios.get("http://localhost:5000/api/notifications").then(response => {
            console.log(response.data)
            setListOfNotifications(response.data)
        })


    }

    useEffect(() => getNotifications())

    if (props.loggedUser.Id == null) {
        return <Navigate to="/" replace />;
    }
    return (
        <Layout>
            <Menu loggedUserName={props.loggedUser.DisplayName}/>
            <Main>
                <h2>NOTIFICATIONS</h2>
                <NotificationsList listOfNotifications={listOfNotifications}/>
            </Main>
        </Layout>
    )
}

export default Notifications;