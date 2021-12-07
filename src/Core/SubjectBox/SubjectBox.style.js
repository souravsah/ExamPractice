import styled from "styled-components";

export const SubjectBoxcss = styled.div`
width: 500px;
border: 1px solid #ccc;
display: flex;
justify-content: space-between;
height: 80px;
align-items: center;
padding: 0 20px;
margin: 10px;

& div:nth-child(1) img{
    width: 50px;
    height: 50px;
    margin-right: 5px;
}

& div:nth-child(1){
    display: flex;
}
& div:nth-child(1) div{
    padding: 7px;
}

@media(max-width:600px){
 margin   : 0;
 width: 100vw;
}
`
