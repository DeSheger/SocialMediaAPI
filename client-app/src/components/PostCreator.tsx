import React, {useState, useReducer} from "react";
import axios from "axios";
import createNotification from "../services/createNotification";

export default function PostCreator(props: any)
{
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("");

    const [_, forceUpdate] = useReducer((x) => x + 1, 0);
    console.log(props.loggedUser)
    function buttonHandler(){

        axios.post("http://localhost:5000/api/posts",
            {
                title: title,
                author: props.loggedUser.DisplayName,
                authorId: props.loggedUser.Id,
                image: image,
                description: description,
            }).then((response) => {
                console.log(response.data)
                createNotification(props.loggedUser.DisplayName,props.loggedUser.Id,' create post ')
                forceUpdate();
                alert('Post will appear soon!')
            }, (error) => {
                console.log(error);
            });

    }

    return (
        <div className="postCreator">
            <form action="*" className="postCreator__form">
                <p>Create post</p>
                <input className="postCreator__title" type="text" placeholder="Title ..."
                value={title} onChange={(e) => setTitle(e.target.value)}></input>

                <input className="postCreator__image" type="text" placeholder="Image (URL) ..."
                value={image} onChange={(e) => setImage(e.target.value)}></input>

                <input className="postCreator__description" type="text" placeholder="Description ..."
                value={description} onChange={(e) => setDescription(e.target.value)}></input>

                <button type="button" className="postCreator__button" onClick={() => buttonHandler()}>Create New Post</button>
            </form>
        </div>
    );
}