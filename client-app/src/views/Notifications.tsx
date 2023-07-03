import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Layout from "./Layout";
import Main from "./Main";
import NotificationsList from "../components/NotificationsList";
import Session from "../components/Session";

function Notifications(props: any) {
    const [listOfNotifications, setListOfNotifications] = useState([]);

    function getNotifications() {

        axios.get("http://localhost:5000/api/notifications").then(response => {
            console.log(response.data)
            setListOfNotifications(response.data)
        })
    }

    useEffect(() => getNotifications(),[])

    return (
        <Layout>
            <Session loggedUser={props.loggedUser}/>
            <Menu loggedUserName={props.loggedUser.DisplayName}/>
            <Main>
                <h2>NOTIFICATIONS</h2>
                <NotificationsList listOfNotifications={listOfNotifications}/>
            </Main>
        </Layout>
    )
}

export default Notifications;