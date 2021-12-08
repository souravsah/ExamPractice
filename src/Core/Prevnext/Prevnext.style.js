import styled from "styled-components";

export const Prevnextcss = styled.div`
display: flex;
background-color: #ccc;
height: 40px;
padding: 5px 5px;
width: 79.5vw;
justify-content:space-between;
div:nth-child(1){
    span{
        cursor: pointer;
    }
}
div:nth-child(2){
    span{
        cursor: pointer;
    }
}
@media(max-width:600px){
    width: 100vw;
}
`