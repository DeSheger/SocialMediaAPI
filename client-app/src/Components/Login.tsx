import React, { useEffect, useState } from "react";
import { FormGroup, Label, Input, Button } from "../Styles/forms";


export default function Login(props: any) {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");


    return(
        <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input id="username" value={username}
                 onChange={(e)=>setUsername(e.target.value)}/>

            <Label htmlFor="password">Password</Label>
            <Input id="password" value={password}
                 onChange={(e)=>setPassword(e.target.value)}/>
            <Button>Log in</Button>
        </FormGroup>
    );
}