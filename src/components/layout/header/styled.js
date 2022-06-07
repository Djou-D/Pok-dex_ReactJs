import styled from "styled-components";

export const Container = styled.nav`

    width: 100%;
    height: 150px;
    border-bottom: 3px solid #000;
    border-radius: 0 0 35px 35px;
    /* box-shadow: 0 8px 10px 0 #000; */
    background: #494949;
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: #fff; //criar variavel
    

`;


export const BoasVindas = styled.div`

    padding: 10px;

    h1
    {
        font-size: 1.5rem;
        font-weight: 300;
        font-family: 'Inter';
    }

    span
    {
        font-size: .8rem;
    }

`;

export const imgPerfil = styled.div`

    
    overflow: hidden;

    img
    {
        position: relative;
        top: 35px;
        left: 15px;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        z-index: 10;
       
    }

    div:nth-child(1)
    {
        position: relative;
        left: 5px;
        z-index: 0;
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        background: #535353;


        &:after
        {
            content: '';
            position: absolute;
            top: calc(50% - 4.5px);
            width: 100%;
            height: 7px;
            background: #494949;
            right: 0;
        }


        div
        {
            position: relative;
            top: -35px;
            left: 2px;
            width: 4rem;
            height: 4rem;
            border: 5px solid #494949;
            border-radius: 50%;

        }

        p
        {
            position: relative;
            top: 40px;
            left: 10px;
            font-size: 1rem;
            text-align: center;
            z-index: 10;
        }
    }
    
`;
