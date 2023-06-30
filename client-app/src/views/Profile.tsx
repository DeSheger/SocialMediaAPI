import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Layout from "./Layout";
import Main from "./Main";
import Session from "../components/Session";
import ProfileDetails from "../components/ProfileDetails";

function Profile(props: any) {


    return (
        <Layout>
            <Session loggedUser={props.loggedUser}/>
            <Menu loggedUserName={props.loggedUser.DisplayName}/>
            <Main>
                <ProfileDetails loggedUser={props.loggedUser}/>
            </Main>
        </Layout>
    )
}

export default Profile;