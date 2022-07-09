import React, {useState} from "react";

export default function Menu(){

    return(
        <div className="menu">
            <ul className="menu__list">
                <li className="menu__item">Home</li>
                <li className="menu__item">Explore</li>
                <li className="menu__item">Notifications</li>
                <li className="menu__item">Messages</li>
                <li className="menu__item">Profile</li>
            </ul>
        </div>
    )
}