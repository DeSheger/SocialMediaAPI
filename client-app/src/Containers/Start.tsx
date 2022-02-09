import React, { useState } from 'react';
import styled, { Wrapper } from 'styled-components';
import Login from '../Components/Login';
import { WrapperLightblue, WrapperWhite } from '../Styles/wrapper';

const Image = styled.image`
    & {
        display:block;
        background: #fff;
        width: 100px;
        height: 100px;
        position: relative;
        margin-bottom: 15px;
    }
    &::before {
        position: absoulte;
        content: "";
        display: block;
        background-image: url("https://cdn.pixabay.com/photo/2015/03/10/17/30/twitter-667462_960_720.png"); 
        background-size: cover;
        background-repeat: no-repeat;
        height: 100px;
        width: 100px;
    }
`;

const Container = styled.div`
    & {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        height: 100vh;
        width:100%;
    }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    height: 50%;
    width:300px;
`;


export default function Start(props: any) {
    let [mediaQuery, setMediaQuery] = useState(window.matchMedia('(min-width:800px)').matches)

    window.addEventListener('resize', () => {
        setMediaQuery(window.matchMedia('(min-width:800px)').matches);
    });

    return (
        <Container>
            {mediaQuery ? <WrapperWhite /> : null}
            <WrapperLightblue>
                <Div>
                    <Image />
                    <Login />
                </Div>
            </WrapperLightblue>
        </Container>
    );
}
