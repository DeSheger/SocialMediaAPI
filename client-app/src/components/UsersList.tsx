import { useState } from "react"

const UserItem = (props: any) => {
    const [userInfo, setUserInfo] = useState(props.user)

    const buttonHandler = (userInfo:any) => {
        props.setUser(userInfo)
        props.setListActive(false)
    }

    return(
        <div className="userItem">
            <div className="userItem__name">
                {userInfo.displayName}
            </div>
            <button className="userItem__button" onClick={() => buttonHandler(userInfo)}>
                Message
            </button>
        </div>
    )
}


const UserList = (props: any) => {

    return(
        <div className="userList">
            {props.users.map((user:any)=> <UserItem user={user} setUser={props.setUser} setListActive={props.setListActive}/>)}
        </div>
    )
}

export default UserList;