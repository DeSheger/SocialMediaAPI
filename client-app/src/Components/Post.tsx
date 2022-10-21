import React, { useState } from "react";

export default function Post(props:any) {
    const [title, setTitle] = useState(props.title)
    const [author, setAuthor] = useState(props.author)
    const [description, setDescription] = useState(props.description)
    const [date, setData] = useState(props.date)
    const [image, setImage] = useState(props.image)

    return(
        <div className="post">
            <h2 className="post__title">{title}</h2>
            <h4 className="post__author">{author}</h4>
            <p className="post__date">{date}</p>
            <img className="post__image" src={image} alt="Loading failure"></img>
            <p className="post__description">{description}</p>
        </div>
    )
}