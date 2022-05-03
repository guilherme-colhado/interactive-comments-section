import styled from "styled-components";

export const SectionComentOfComnets = styled.section`
    &:not(:last-child){
        margin: 10px 0;
    }
    text-align: start;
    padding: 15px;
    display: flex;
    background-color: white;
    border-radius: 10px;
    min-width: 100%;
    font-size: 1.1rem;
    @media screen and (max-width:600px){
        flex-direction: column;
    }
`