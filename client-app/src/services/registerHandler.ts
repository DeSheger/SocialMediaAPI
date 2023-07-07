import axios from "axios";

const registerHandler = (email: String, username: String, displayName: String, password: String) => {
    const emailValue = email;
    const usernameValue = username;
    const displayNameValue = displayName;
    const passwordValue = password;

    axios.post("http://localhost:5000/api/account/register",
        {
            email: emailValue,
            username: usernameValue,
            displayName: displayNameValue,
            password: passwordValue
        }).then((response) => {
            console.log(response.data)
        }, (error) => {
            alert(error)
        });
}

export default registerHandler;