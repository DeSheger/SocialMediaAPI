import { useEffect, useRef, useState } from "react";
import createMessage from "../services/createMessage";
import getMessages from "../services/getMessages";

const Message = (props: any) => {
    const [user] = useState(props.user)
    const [loggedUser] = useState(props.loggedUser)
    const [message] = useState(props.message)

    return (

        message.authorId == loggedUser.Id ?
            <>
                <div className="userMessage">
                    <div>{props.message.userMessage}</div>
                    <p>{message.date.slice(0, 10)} {props.message.authorDisplayName}</p>
                </div>
            </>
            :
            <div className="friendMessage">
                <div>{props.message.userMessage}</div>
                <p>{message.date.slice(0, 10)} {props.message.authorDisplayName}</p>
            </div>
    )
}

const MessageBox = (props: any) => {
    const [user] = useState(props.user)
    const [loggedUser] = useState(props.loggedUser)
    const [messages] = useState(props.messages)
    const [messeageToSend, setMessageToSend] = useState("");
    const [update, setUpdate] = useState(false)

    const buttonHandler = (e: any) => {
        setMessageToSend(e.target.value)
    }

    const updateMessages = () => {
        return messages.map((message: any) => {
            console.log(user, loggedUser)
            if ((user.id == message.authorId || user.id == message.addresseeId) && (loggedUser.Id != user.id)) {
                return <Message message={message} user={user} loggedUser={loggedUser} />
            } else return null
        })
    }

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            getMessages(loggedUser.Id, props.dispatch)
            updateMessages()
            console.log("update")
        }
    });



    return (
        <div className="messageBox">
            <header className="messageBox__header">
                <button className="messageBox__header-button" onClick={() => props.setListActive(true)}>Back to Users List</button>
                <h2 className="messageBox__header-name">{user.displayName}</h2>
            </header>
            <div className="messageBox__messages">
                <div className="messageBox__messages-area">
                    {updateMessages()}
                </div>
            </div>
            <div className="messageBox__form">
                <input className="messageBox__form-text" placeholder="text message ..."
                    value={messeageToSend} onChange={(e) => buttonHandler(e)}></input>
                <button className="messageBox__form-button" onClick={() => {
                    createMessage(loggedUser.Id, user.id, loggedUser.DisplayName, messeageToSend)
                    setUpdate(true)
                }}>Send</button>
            </div>
        </div>
    )
}

export default MessageBox;