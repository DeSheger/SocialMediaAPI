import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Layout from "./Layout";
import Main from "./Main";
import NotificationsList from "../components/NotificationsList";
import Session from "../components/Session";
import getMessages from "../services/getMessages";
import { useDispatch, useSelector } from "react-redux";
import getUsersList from "../services/getUsersList";
import UserList from "../components/UsersList";
import MessageBox from "../components/MessageBox";

function Messages(props: any) {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState();
    const [listActive, setListActive] = useState(true);
    const [messages,setMessages] = useState([]);
    const dispatch = useDispatch()


    useEffect(()=>getMessages(props.loggedUser.Id, setMessages),[])
    useEffect(()=>getUsersList(setUsers),[])

    return (
        <Layout>
            <Session loggedUser={props.loggedUser}/>
            <Menu loggedUserName={props.loggedUser.DisplayName}/>
            <Main>
                {
                listActive?
                <UserList users={users} setUser={setUser} setListActive={setListActive}/>
                :
                <MessageBox messages={messages} user={user} setMessages={setMessages}
                loggedUser={props.loggedUser} setListActive={setListActive}/>
                }
            </Main>
        </Layout>
    )
}

export default Messages;