import styled from "styled-components";

export const Container = styled.nav`

    width: 100%;
    height: 150px;
    border-radius: ${props => props.theme.border.radius_3};
    background: ${props => props.theme.colors.primary};
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    color: ${props => props.theme.colors.textPrimary};
    

`;


export const BoasVindas = styled.div`

    padding: ${props => props.theme.padding.pad_4};

    h1
    {
        font-size: ${props => props.theme.font_size.size_3};
        font-weight: 300;
        font-family: ${props => props.theme.font_family.primary};
    }

    .home
    {
        font-size: ${props => props.theme.font_size.size_5};
        color: ${props => props.theme.colors.textPrimary};
        letter-spacing: 1px;
        text-decoration: none;
        overflow: hidden;
        transition: 0.5s;
    }

    &:hover .home
    {
        letter-spacing: 3px;
    }

`;

export const imgPerfil = styled.div`

    
    overflow: hidden;

    img
    {
        position: relative;
        top: 35px;
        left: 15px;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        z-index: 10;
       
    }

    div:nth-child(1)
    {
        position: relative;
        left: 25px;
        z-index: 0;
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        background: #535353;


        &:after
        {
            content: '';
            position: absolute;
            top: calc(50% - 4.5px);
            width: 100%;
            height: 10px;
            background: #494949;
            right: 0;
        }


        div
        {
            position: relative;
            top: -55px;
            left: 5px;
            width: 5rem;
            height: 5rem;
            border: 8px solid #494949;
            border-radius: 50%;

        }

        p
        {
            position: relative;
            top: 50px;
            left: 10px;
            font-size: 1.2rem;
            text-align: center;
            z-index: 10;
        }
    }

    
    
`;
