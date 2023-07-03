import axios from "axios";

const getUsersList = (setUsers:Function) => {

    
        axios.get(`http://localhost:5000/api/account/users`).then(response => {
        console.log(response.data)
        setUsers(response.data)
    })
    
}

export default getUsersList;