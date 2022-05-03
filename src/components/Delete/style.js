import styled from "styled-components";

export const Button = styled.button`
    background-color:${props=>props.backgroundColor};
    border: none;
    color:'white';
    padding: 15px 20px;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    &:hover{
        background-color:${props=>props.backgroundColor}
    }
    
`

export const Card = styled.div`
    width: 320px;
    background-color:white;
    padding: 20px;
    color: black;
    text-align: start;
    border-radius: 10px;
    transform: scale(0);
    animation: popUp .5s ease-in .3s forwards;
    @keyframes popUp {
        100%{
            transform: scale(1)      
        }
    }
`

export const Sob = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #a7a7a790;
    position: fixed;
    z-index: 1000;
    animation: fadeIn .5s ease-in;
    @keyframes fadeIn {
        0%{
            opacity: 0;
        }
    }
`