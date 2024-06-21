import styled from "styled-components";


export const Button = styled.button`
    background-color: black;
    color: white;
    width: 220px;
    border-radius: 5px;
    padding: 8px 10px;
    border: 1px solid transparent;
    transition: 0.3s background-color ease-in;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background-color ease-in;
        cursor: pointer;
    }
`;

export const OutlineButton = styled(Button)`

        background-color: white;
        color: black;
        border: 1px solid black;

    &:hover{
        background-color: black;
        color: white;
        border: 1px solid transparent;
    }
    
`;