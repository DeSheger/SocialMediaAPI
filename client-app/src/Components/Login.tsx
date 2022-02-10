import React, { useState } from "react";
import axios from 'axios';

export default function Login(props: any) {
    const [loginForm, setLoginForm] = useState<boolean>(true);
    const [username,setUsername] = useState<string>("");
    const [password,setPassword] = useState<string>("");

    function loginHandler() {
        const usernameValue = username;
        const passwordValue = password;
        
    }

    function formHandler(isLoginFormActive: boolean) {
        setLoginForm(isLoginFormActive);
    }

    return(
        <div className="login">
            {loginForm ? 
                <form className="login__form">
                    <img src="https://cdn.pixabay.com/photo/2015/03/10/17/30/twitter-667462_960_720.png" />
                    <input className="login__input" type="text" placeholder="Username ..."/>
                    <input className="login__input" type="password" placeholder="Password ..."/>
                    <button className="login__submit">Log in</button>
                    <p>Don t have account yet? <button onClick={() => 
                        formHandler(false)}>Register Now</button></p>
                </form>
                :<form className="login__form">
                    <img src="https://cdn.pixabay.com/photo/2015/03/10/17/30/twitter-667462_960_720.png" />
                    <input className="login__input" type="text" placeholder="Username"/>
                    <input className="login__input" type="text" placeholder="DisplayName"/>
                    <input className="login__input" type="password" placeholder="Password"/>
                    <input className="login__input" type="text" placeholder="Image URL"/>
                    <button className="login__submit">Register now</button>
                    <p>Do you already have an account? <button onClick={() => 
                        formHandler(true)}>Log In Now</button></p>
                </form>
            }
        </div>
    );
}