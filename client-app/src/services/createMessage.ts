import axios from "axios";

const createMessage = (loggedUserId: string, userId: string
    , loggedUserDisplayName: string, userMessage: string) => {

    
        axios.post(`http://localhost:5000/api/messages`,{
            authorId: loggedUserId,
            addresseeId: userId,
            authorDisplayName:loggedUserDisplayName,
            userMessage: userMessage
        }).then(response => {
    })
    
}

export default createMessage;