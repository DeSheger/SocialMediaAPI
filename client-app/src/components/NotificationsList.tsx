import React from "react";
import Post from "./Post";
import Notification from "./Notification";


export default function NotificationsList(props: any) {
    
    return (
        <div className="notificationsList">
            {props.listOfNotifications.map((notification:any, index:any) => <Notification key={notification.id} id={notification.id}
            author={notification.author} authorId={notification.authorId} description={notification.description}
            date={notification.date}
        />).reverse()}
        </div>
    );
}