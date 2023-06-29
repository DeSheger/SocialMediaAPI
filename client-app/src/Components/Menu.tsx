import React, {useState} from "react";
import { Link, Navigate } from "react-router-dom";

export default function Menu(props:any){

    return(
        <div className="menu">
            <h1 className="menu__title">Twitter</h1>
            <ul className="menu__list">
                <li className="menu__item"><Link to="/home">Home</Link></li>
                <li className="menu__item" ><Link to="/notifications">Notifications</Link></li>
                <li className="menu__item">Messages</li>
                <li className="menu__item">{props.loggedUserName}</li>
            </ul>
        </div>
    )
}