import axios from "axios";
import urlApi from "./servicesVariables";

const createMessage = async (loggedUserId: string, userId: string
    , loggedUserDisplayName: string, userMessage: string) => {

    
        await axios.post(`${urlApi}/messages`,{
            authorId: loggedUserId,
            addresseeId: userId,
            authorDisplayName:loggedUserDisplayName,
            userMessage: userMessage
        }).then(response => {
            console.log(response.statusText)
    })
    
}

export default createMessage;