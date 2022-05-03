import styled from "styled-components";

export const SectionComent = styled.section`
    margin: 10px auto;
    text-align: start;
    padding: 15px;
    display: flex;
    background-color: white;
    border-radius: 10px;
    width: 60%;
    font-size: 1.1rem;
    @media screen and (max-width:600px){
        width: 100%;
        flex-direction: column;
    }
`