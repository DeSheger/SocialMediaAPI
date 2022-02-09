import React from 'react';
import styled from 'styled-components';
import Login from '../Components/Login';
import { WrapperWhite } from '../Styles/wrapper';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    height: 50%;
    width: 50%;
`;


export default function Start(props: any) {
    return (
        <WrapperWhite>
            <Div>
                <Login />
            </Div>
        </WrapperWhite>
    );
}
