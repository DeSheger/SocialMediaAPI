import axios from "axios";

const getMessages = (userId: string, dispatch:Function, setMessages:Function) => {

    
        axios.get(`http://localhost:5000/api/messages/${userId}`).then(response => {
        console.log(response.data)
        setMessages(response.data)
    })
    
}

export default getMessages;