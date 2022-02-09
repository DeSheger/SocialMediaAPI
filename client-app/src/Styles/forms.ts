import styled from "styled-components";

export const FormGroup = styled.div`
	color: palevioletred;
    display: flex;
    flex-direction: column;

	width: 100%;
	height: 100%;
    padding: 5%;
`;

export const Label = styled.label`
	margin-bottom: 4px;
	color: palevioletred;
    display: block;
`;


export const Input = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;

export const Button = styled.button`
    width: 100px;
    padding: 5px;
    border-radius: 4px;
    border: none;
    color: white;
    cursor: pointer;
    background-color: #1DA1F2;
`;