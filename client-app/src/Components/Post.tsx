import axios from "axios";
import React, { useState } from "react";
import createNotification from "../services/createNotification";

export default function Post(props: any) {
    const [id, setId] = useState(props.id)
    const [title, setTitle] = useState(props.title)
    const [author, setAuthor] = useState(props.author)
    const [authorId, setAuthorId] = useState(props.authorId)
    const [description, setDescription] = useState(props.description)
    const [date, setData] = useState(props.date)
    const [image, setImage] = useState(props.image)
    const [options, setOptions] = useState(false)

    function buttonHandler() {

        axios.delete(`http://localhost:5000/api/posts/${id}`,
            {

            }).then((response) => {
                createNotification(author,authorId,' deleted post ')
            }, (error) => {
                console.log(error);
            });
    }

    const optionHandler = () => {
        setOptions(!options)
    }

    return (
        <div className="post">
            <div className="post__header">
                <h2 className="post__title">{title}</h2>
                <ol className="post__options">
                    <li onClick={() => optionHandler()}>...
                        {options ? <ul>
                            <li>Save</li>
                            {authorId == props.userId ? <li>Edit</li> : null}
                            {authorId == props.userId ? <li onClick={() => buttonHandler()}>Delete</li> : null}
                        </ul> : null}
                    </li>
                </ol>
            </div>
            <h4 className="post__author">{author}</h4>
            <p className="post__date">{date.slice(0, 10)}</p>
            <img className="post__image" src={image} alt="Loading failure"></img>
            <p className="post__description">{description}</p>
        </div>
    )
}

