import axios from "axios";
import urlApi from "./servicesVariables";

const getMessages = (userId: string, setMessages:Function) => {

    
        axios.get(`${urlApi}/messages/${userId}`).then(response => {
        console.log(response.data)
        setMessages(response.data)
    })
    
}

export default getMessages;