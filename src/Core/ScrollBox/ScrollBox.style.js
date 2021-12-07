import styled from "styled-components";

export const ScrollBoxcss = styled.ul`
display: flex;
width: 80vw;
background-color: #3A466B;
overflow-x: scroll;
li{
    cursor: pointer;
    list-style: none;
    padding: 10px;
    color: white;
    background-color: #282F47;
    margin: 5px 15px;
    border-radius: 50%;
    border: 3px dashed green;
}
@media(max-width:600px){
    width: 100%;
}
`