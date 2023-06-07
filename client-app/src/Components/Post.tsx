import axios from "axios";
import React, { useState } from "react";

export default function Post(props:any) {
    const [id, setId] = useState(props.id)
    const [title, setTitle] = useState(props.title)
    const [author, setAuthor] = useState(props.author)
    const [authorId, setAuthorId] = useState(props.authorId)
    const [description, setDescription] = useState(props.description)
    const [date, setData] = useState(props.date)
    const [image, setImage] = useState(props.image)

    function buttonHandler() {

        axios.delete(`http://localhost:5000/api/posts/${id}`,
            {
                
            }).then((response) => {

            }, (error) => {
                console.log(error);
            });
    }

    return(
        <div className="post">
            <h2 className="post__title">{title}</h2>
            <h4 className="post__author">{author}</h4>
            <p className="post__date">{date.slice(0,10)}</p>
            <img className="post__image" src={image} alt="Loading failure"></img>
            <p className="post__description">{description}</p>
            <button className="post_button" disabled={authorId==props.userId ? false:true} 
            onClick={() => buttonHandler()}>Delete Post</button>
        </div>
    )
}