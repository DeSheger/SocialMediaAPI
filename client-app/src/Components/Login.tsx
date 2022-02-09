import React, { useState } from "react";
import { FormGroup, Label, Input, Button } from "../Styles/forms";
import axios from 'axios';

export default function Login(props: any) {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    function loginHandler() {
        const usernameValue = username;
        const passwordValue = password;
        
    }
    return(
        <FormGroup>
            <Input id="username" value={username}
                 onChange={(e)=>setUsername(e.target.value)}/>
            <Label htmlFor="username">Username</Label>
            <Input id="password" value={password}
                 onChange={(e)=>setPassword(e.target.value)}/>
            <Label htmlFor="password">Password</Label>
            <Button onClick={() => loginHandler()}>Log in</Button>
            <p>Don t have account yet? <button>Register now</button></p>
        </FormGroup>
    );
}