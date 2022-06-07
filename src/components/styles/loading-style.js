import styled from "styled-components"

export const LoadingPosition = styled.div`

    height: 100vh;
    width: 100%;
    position: fixed;

    img
    {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
    }
   
    
`