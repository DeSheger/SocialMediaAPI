import { useDispatch, useSelector } from "react-redux";
import PostCreator from "./PostCreator";
import Posts from "./Posts";
import { useEffect, useState } from "react";
import getPosts from "../services/getPosts";

export default function ProfileDetails(props: any) {
    const listOfPosts = useSelector((state: any) => state.getPostsReducer)
    const [update, setUpdate] = useState(true)
    const dispatch = useDispatch()

    useEffect(()=>{getPosts(dispatch, setUpdate, update)},[update])


    return (
        <div className="ProfileDetails">
            <header className="ProfileDetails__header">
                <div className="ProfileDetails__header-icon">
                    <img src={props.loggedUser.image? props.loggedUser.image:"https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png"} alt='not set'></img>
                </div>
            </header>
            <section className="ProfileDetails__section">
                <h2 className="ProfileDetails__section-name">{props.loggedUser.DisplayName}</h2>
                <div className="ProfileDetails__posts">
                    <PostCreator  loggedUser={props.loggedUser} />
                    <Posts listOfPosts={listOfPosts} loggedUser={props.loggedUser} userPosts={true}/>
                </div>
            </section>
        </div>
    )
}