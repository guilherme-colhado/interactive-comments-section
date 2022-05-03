import styled from "styled-components";

export const ContainerUserReply = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`

export const ContainerUser = styled.div`
    display: flex;
    align-items: center;
`

export const ContainerReply = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
    @media screen and (max-width:600px){
        display: none;
    }
`