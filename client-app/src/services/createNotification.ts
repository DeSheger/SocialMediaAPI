import axios from "axios";
import urlApi from "./servicesVariables";

const createNotification = (author:any,authorId:any,description:any) => {
    const Author = author;
    const AuthorID = authorId;
    const Description = description
    axios.post(`${urlApi}/notifications`,{
        Author,
        AuthorID,
        Description
    }).then(response => console.log(response.data), (error) => {
        alert("Error while creating Notofication")
        console.log(error);
    });
}

export default createNotification;