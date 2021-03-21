import styled from "styled-components"

export const Input = styled.input`
    border: 2px solid #002D72;
    margin-top: 5px;
    box-shadow: 2px 2px 2px;
    display: block;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    border-radius: 3px;
    padding: 5px 10px;
    height: 44px;
    box-sizing: border-box;
    min-width: 0;
    &:focus {
        border-color: red;
    }
`