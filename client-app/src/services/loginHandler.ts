import axios from "axios";
import urlApi from "./servicesVariables";

const loginHandler = (email: String, password: String, dispatch: Function) => {
    const emailValue = email;
    const passwordValue = password;

    axios.post(`${urlApi}/account/login`,
        {
            email: emailValue,
            password: passwordValue
        }).then((response) => {

            dispatch({
                type: 'SET_USER', payload: {
                    Id: response.data.id,
                    DisplayName: response.data.displayName,
                    Token: response.data.token,
                    Image: response.data.image,
                    Username: response.data.username,
                }
            })
            console.log("Authorized")

        }, (error) => {
            alert("Login or password incorrect")
            console.log(error);
        });
}

export default loginHandler;