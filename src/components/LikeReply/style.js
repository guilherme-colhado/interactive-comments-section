import styled from "styled-components";
import { Var } from "../../StyleVariables";

export const ContainerLikeReply = styled.div`
    margin: 20px 0 0;
    display: none;
    @media screen and (max-width:600px){
        display: flex;
        justify-content: space-between;
    }
`

export const ContainerReply = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
`