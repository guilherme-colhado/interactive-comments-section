import { createGlobalStyle } from "styled-components";
import { Var } from "./StyleVariables";

export const GlobalStyle = createGlobalStyle`
    body, header, main, section, div, ul, li, a, p, h1, h2, h3, h4{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
    body{
        background-color: ${Var.gray};
        color: white;
        text-align: center;
        padding: 15px;
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
    }
`