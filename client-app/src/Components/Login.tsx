import React, { useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";

export default function Login(props: any) {
    const [loginForm, setLoginForm] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [displayName, setDisplayName] = useState<string>("");
    const dispatch = useDispatch();

    const loginHandler = () => {
        const emailValue = email;
        const passwordValue = password;

        axios.post("http://localhost:5000/api/account/login",
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

    const registerHandler = () => {
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
                console.log(error);
            });
    }

    const formHandler = (isLoginFormActive: boolean) => {
        setLoginForm(isLoginFormActive);
    }

    return (
        <div className="login">
            {loginForm ?
                <form action="*" className="login__form">
                    <img src="https://cdn.pixabay.com/photo/2015/03/10/17/30/twitter-667462_960_720.png" />
                    <input className="login__input" type="text" placeholder="Email ..." value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input className="login__input" type="password" placeholder="Password ..." value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button type="button" className="login__submit" onClick={() => loginHandler()}>Log in</button>
                    <p>Don t have account yet? <button onClick={() =>
                        formHandler(false)}>Register Now</button></p>
                </form>
                : <form className="login__form">
                    <img src="https://cdn.pixabay.com/photo/2015/03/10/17/30/twitter-667462_960_720.png" />
                    <input className="login__input" type="text" placeholder="Email ..." value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input className="login__input" type="text" placeholder="Username ..." value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <input className="login__input" type="text" placeholder="Display Name ..." value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)} />
                    <input className="login__input" type="password" placeholder="Password ..." value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <button className="login__submit" onClick={() => registerHandler()}>Register now</button>
                    <p>Do you already have an account? <button onClick={() =>
                        formHandler(true)}>Log In Now</button></p>
                </form>
            }
        </div>
    );
}