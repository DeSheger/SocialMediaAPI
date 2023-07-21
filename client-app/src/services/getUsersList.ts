import axios from "axios";
import urlApi from "./servicesVariables";

const getUsersList = (setUsers:Function) => {

    
        axios.get(`${urlApi}/account/users`).then(response => {
        console.log(response.data)
        setUsers(response.data)
    })
    
}

export default getUsersList;