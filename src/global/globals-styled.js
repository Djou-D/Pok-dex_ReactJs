import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

*
{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

body 
{
    /* font-family: 'Press Start 2P', cursive; */
    font-size: 'inter';
    background: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased !important;
}

body, html, #root 
{
    height: 100%;
}


`