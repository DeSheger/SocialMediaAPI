import axios from "axios";
import React, { useState } from "react";

export default function Notification(props: any) {
    const [id, setId] = useState(props.id)
    const [author, setAuthor] = useState(props.author)
    const [authorId, setAuthorId] = useState(props.authorId)
    const [description, setDescription] = useState(props.description)
    const [date, setData] = useState(props.date)

    return (
        <div className="notification">
           {`${author} ${description} on ${date.substring(0,10)}`}
        </div>
    )
}

