import axios from "axios";

const createNotification = (author:any,authorId:any,description:any) => {
    const Author = author;
    const AuthorID = authorId;
    const Description = description
    axios.post("http://localhost:5000/api/notifications",{
        Author,
        AuthorID,
        Description
    }).then(response => console.log(response.data), (error) => {
        alert("Error while creating Notofication")
        console.log(error);
    });
}

export default createNotification;