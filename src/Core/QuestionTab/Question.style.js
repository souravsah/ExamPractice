import styled from "styled-components";

export const Questioncss = styled.div`
width: 80vw;
padding: 15px;
background-color: #ccc;
height: 350px;
overflow-y: scroll;
div{
    background-color: white;
    padding: 15px 10px;
    border-radius: 5px;
}
div h4{
    letter-spacing: 0.9;
    padding: 5px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
@media(max-width:600px){
    width: 100%;
    height: 470px;
}
`