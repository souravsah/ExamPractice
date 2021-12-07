import styled from "styled-components";

export const SubjectContainercss = styled.div`
display: grid;
grid-template-columns: auto auto;

@media(max-width:600px){
    display: flex;
    flex-direction: column;
}
`