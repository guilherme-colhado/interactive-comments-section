import styled from "styled-components";

export const SectionReply = styled.section`
    display: flex;
    align-items: right;
    background-color: white;
    border-radius: 10px;
    width: ${props=> props.comment?'60%':'100%'};
    margin:0 auto 10px;
    overflow: hidden;
    animation: anime .5s ease-in forwards;
    @keyframes anime {
        0%{
            max-height: 0;
            opacity: 0;
        }
        100%{
            padding: 10px;
            max-height: 200px;
        }
    }
    @media screen and (max-width:600px){
        width: 100%;
    }
`