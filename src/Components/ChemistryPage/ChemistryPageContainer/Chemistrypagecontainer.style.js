import styled from "styled-components";

export const Chemistrycss = styled.div`
width: 100vw;
display: flex;
.scrolldot{
    color: white;
    position: absolute;
    left: -16px;
    top:45px;
    display: none;
}
@media(max-width:600px){
.side{
    background-color: red;
    position: absolute;
    top:98px;
    left: 0;
    display: ${({toggle})=>toggle?"block":"none"};
}
.scrolldot{
    display:block;
}
}

`