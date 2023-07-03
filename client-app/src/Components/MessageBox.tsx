import { useEffect, useState } from "react";
import createMessage from "../services/createMessage";
import getMessages from "../services/getMessages";

const Message = (props: any) => {
    const [user] = useState(props.user)
    const [loggedUser] = useState(props.loggedUser)
    const [message] = useState(props.message)

    return (

            message.authorId == loggedUser.Id ?
                <div className="userMessage">
                    <p>{props.message.authorDisplayName} :</p>
                    <p>{props.message.userMessage}</p>
                </div>
                :
                <div className="friendMessage">
                    <p>{props.message.authorDisplayName} :</p>
                    <p>{props.message.userMessage}</p>
                </div>
    )
}

const MessageBox = (props: any) => {
    const [user] = useState(props.user)
    const [loggedUser] = useState(props.loggedUser)
    const [messages] = useState(props.messages)
    const [messeageToSend, setMessageToSend] = useState("");

    const buttonHandler = (e: any) => {
        setMessageToSend(e.target.value)
    }

    useEffect(() => getMessages(loggedUser.Id, props.dispatch),[])

    return (
        <div className="messageBox">
            <header className="messageBox__header">
                <button className="messageBox__header-button" onClick={() => props.setListActive(true)}>Back to Users List</button>
                <h2 className="messageBox__header-name">{user.displayName}</h2>
            </header>
            <div className="messageBox__messages">
                <div className="messageBox__messages-area">
                    {messages.map((message: any) => {
                        console.log(user, loggedUser)
                        if ((user.id == message.authorId || user.id == message.addresseeId) && (loggedUser.Id != user.id)) {
                            return <Message message={message} user={user} loggedUser={loggedUser} />
                        } else return null
                    })}
                </div>
            </div>
            <div className="messageBox__form">
                <input className="messageBox__form-text" placeholder="text message ..."
                    value={messeageToSend} onChange={(e) => buttonHandler(e)}></input>
                <button className="messageBox__form-button" onClick={() => createMessage(loggedUser.Id, user.id,loggedUser.DisplayName, messeageToSend)}>Send</button>
            </div>
        </div>
    )
}

export default MessageBox;