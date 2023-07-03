import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Layout from "./Layout";
import Main from "./Main";
import NotificationsList from "../components/NotificationsList";
import Session from "../components/Session";
import getMessages from "../services/getMessages";
import { useDispatch, useSelector } from "react-redux";

function Messages(props: any) {
    const [messages,setMessages] = useState([]);
    const dispatch = useDispatch()


    useEffect(()=>getMessages(props.loggedUser.Id, dispatch, setMessages),[])

    return (
        <Layout>
            <Session loggedUser={props.loggedUser}/>
            <Menu loggedUserName={props.loggedUser.DisplayName}/>
            <Main>
                <h2>MESSAGES</h2>
                {messages.map((message:any)=>message.userMessage)}
            </Main>
        </Layout>
    )
}

export default Messages;