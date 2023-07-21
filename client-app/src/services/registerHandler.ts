import axios from "axios";
import urlApi from "./servicesVariables";

const registerHandler = (email: String, username: String, displayName: String, password: String) => {
    const emailValue = email;
    const usernameValue = username;
    const displayNameValue = displayName;
    const passwordValue = password;

    axios.post(`${urlApi}/account/register`,
        {
            email: emailValue,
            username: usernameValue,
            displayName: displayNameValue,
            password: passwordValue
        }).then((response) => {
            console.log(response.data)
        }, (error) => {
            alert(`Email, Username or Displayname already exist`)
        });
}

export default registerHandler;