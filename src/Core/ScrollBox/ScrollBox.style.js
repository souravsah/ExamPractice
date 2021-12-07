import styled from "styled-components";

export const ScrollBoxcss = styled.ul`
display: flex;
width: 80vw;
background-color: #3A466B;
overflow-x: scroll;
li:nth-child(1){
    display: block;
    margin-top: 7px;
}
@media(max-width:600px){
    width: 100%;
    li:nth-child(1){
    display: block;
}
  
}
`
export const Li = styled.li`
    cursor: pointer;
    list-style: none;
    padding: 10px;
    color: white;
    background-color: #282F47;
    margin: 5px 15px;
    border-radius: 50%;
    border:  ${({visited,attempted})=>{
        if(visited){
            if(attempted){
                return "3px dashed green"
            }
            else {
                return "3px dashed grey"
            }
        }
        else{
            return "3px solid white"
        }
    }};

`