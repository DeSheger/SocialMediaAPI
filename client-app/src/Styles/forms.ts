import styled from "styled-components";

export const FormGroup = styled.div`
	color: #fff;
    display: flex;
    flex-direction: column;

	width: 100%;
	height: 100%;
    padding: 5%;
`;

export const Label = styled.label`
	margin-bottom: 4px;
	color: #fff;
    display: block;
`;


export const Input = styled.input`
	padding: 0.5em;
	color: #000;
	background: #fff;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

export const Message = styled.label`
	margin-bottom: 0.5em;
	color: #fff;
    display: block;
`;

export const Button = styled.button`
    width: 100px;
    padding: 5px;
    border-radius: 4px;
    border: none;
    color: #fff;
    cursor: pointer;
    background-color: #1DA1F2;
	align-self: end;
	margin: 10px 0;
`;