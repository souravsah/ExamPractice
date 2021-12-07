import styled from "styled-components";

export const  Footercss = styled.div`
background-color: #1C1E21;
color: white;
display: flex;
justify-content: space-between;
height: 100px;
align-items: center;
padding: 0 25px;
@media(max-width:600px){
    display: flex;
    flex-direction: column;
    align-items: unset;
    height: 80px;
    padding: 15px 25px;

    div:nth-child(1){
    }
}
`
