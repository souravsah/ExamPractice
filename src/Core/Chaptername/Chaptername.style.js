import styled from "styled-components";

export const Chapternamecss= styled.li`
width: 20vw;
background-color:${({color})=>color?"white":"#ccc"};
margin: 3px 0;
padding: 10px 0;
cursor: pointer;
@media(max-width:600px){
    width: 100vw;
}
`