import styled from "styled-components";
import { Var } from "../../StyleVariables";

export const LikeContainer = styled.div`
    padding: 7px 5px;
    text-align: center;
    background-color: ${Var.gray};
    height: max-content;
    margin-right: 20px;
    color: ${Var.blue};
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    font-weight: bold;
    background-color: ${Var.gray};
    @media screen and (max-width: 860px){
        display: ${props=>props.desktop?'none':'flex'};
        flex-direction: row;
    }
`

export const ButtonLike = styled.button`
    border: none;
    &:hover{
        transform: scale(1.2);
    }
`