import React, { useState } from "react";

export default function Post(props:any) {
    const [title, setTitle] = useState(props.title)
    const [description, setDescription] = useState(props.description)
    const [data, setData] = useState(props.data)
    const [image, setImage] = useState(props.image)

    return(
        <div className="post">
            <h2 className="post__title">{title}</h2>
            <img className="post__image" src={image} alt="Loading failure"></img>
            <p className="post__description">{description}</p>
        </div>
    )
}