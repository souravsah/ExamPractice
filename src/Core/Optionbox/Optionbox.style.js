import styled from "styled-components";

export const Optioncss = styled.li`
    border:1px solid green ;
    cursor: pointer;
    list-style: none;
    padding: 15px 10px;
    margin: 5px 0;
    border-radius: 5px;
    background-color: ${({color,color1})=>{
        if(color){
            if(color1){
                return "green"
            }
            else{
                return "red"
            }
        }
        else{
            return "white"
        }
    }};

 span:nth-child(1){
    /* background-color: red; */
    border: 1px solid #ccc;
    margin-right: 5px;
    padding: 5px;
    border-radius: 50%;
    background-color: green;
    color: white;
}

`