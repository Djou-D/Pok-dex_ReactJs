import styled from 'styled-components'

export const Container = styled.div`

    background: ${props => props.theme.colors.background};
    font-family: ${props => props.theme.font_family.primary};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;


export const Header = styled.nav`

    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border-radius: ${props => props.theme.border.radius_1};
    padding: ${props => props.theme.padding.pad_4};
    /* height: 120px; */

    img
    {
        width: 250px;
        transform: rotate(10deg);
    }

    .safari
    {
        color: ${props => props.theme.colors.textSecundary};
        font-size: ${props => props.theme.font_size.size_2};
        text-decoration: none;
        margin-right: ${props => props.theme.margin.left};
        padding: ${props => props.theme.padding.pad_4};
        letter-spacing: 1px;
        text-decoration: none;
        overflow: hidden;
        transition: 0.5s;
    }

    div:hover .safari
    {
        letter-spacing: 3px;
    }



    @media screen and (max-width: 767px){
        display: flex;
        flex-direction: column;
        align-items: center;

        div:nth-child(2){
            padding: ${props => props.theme.padding.pad_4};
        }

        div:nth-child(3){
            padding: ${props => props.theme.padding.pad_4};
        }


        .safari
        {
            padding: ${props => props.theme.padding.pad_2};
        }

    }

`;


export const Section = styled.div`

    padding: ${props => props.theme.padding.pad_2};
    display: flex;
    justify-content: space-around;
    align-items: center;

    section:nth-child(1)
    {
        padding: ${props => props.theme.padding.pad_1};
        margin: ${props => props.theme.margin.top_2};
    }

    h2
    {
        
        font-size: ${props => props.theme.font_size.size_2};
        padding: ${props => props.theme.padding.pad_4};
        color: ${props => props.theme.colors.textSecundary};

        b
        {
            position: relative;
            font-size: ${props => props.theme.font_size.size_2};
            color: ${props => props.theme.colors.primary};
            text-transform: uppercase;

            &:before
            {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 100%;
                color: ${props => props.theme.colors.textSecundary};
                border-right: 2px solid #f00;
                overflow: hidden;
                animation: animate 6s linear infinite;
            }
	   
        }
    }

    @keyframes animate 
    {
        0%, 10%, 100%
        {
            width: 0;
        }
        70%, 90%
        {
            width: 100%;
        }    
    }

    P
    {
        font-size: ${props => props.theme.font_size.size_3};
        padding: ${props => props.theme.padding.pad_4};
        color: ${props => props.theme.colors.textSecundary};
    }

    img
    {
        width: 200px;
        z-index: 10;
        transform: rotate(-15deg);

        &:nth-child(1)
        {
            width: 300px;
        }
    }

    @media screen and (max-width: 389px){
        display: flex;
        flex-direction: column;

        h2
        {
            font-size: ${props => props.theme.font_size.size_3};
            padding: ${props => props.theme.padding.pad_3};
            
            b
            {
                font-size: ${props => props.theme.font_size.size_3};
            }
        }

        .image
        {
            display: flex;
            justify-content: center;
            align-items: center;

            img
        {
            width: 180px;

            &:nth-child(1)
            {
                width: 120px;
            }
        }

        }


        .btn
        {
            width: 20px;
        }
    }

  
    @media screen and (min-width: 390px) and (max-width: 767px){
        display: flex;
        flex-direction: column;

        .image
        {
            display: flex;
            justify-content: center;
            align-items: center;

            img
        {
            width: 180px;

            &:nth-child(1)
            {
                width: 120px;
            }
        }

        }


        .btn
        {
            width: 20px;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px){
        .image
        {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 60%;
            right: 10%;

            img
        {
            width: 200px;

            &:nth-child(1)
            {
                width: 150px;
            }
        }

        }


        .btn
        {
            width: 20px;
        }
        
    }
    
    @media screen and (min-width: 1024px) and (max-width: 1439px){
        .image
        {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 60%;
            right: 10%;

            img
        {
            width: 250px;

            &:nth-child(1)
            {
                width: 200px;
            }
        }

        }


        .btn
        {
            width: 20px;
        }
    }

    @media screen and (min-width: 1900px){
        h2
        {
            font-size: ${props => props.theme.font_size.size_1};
           
            b
            {
                font-size: ${props => props.theme.font_size.size_1};
            }
        }

        p
        {
            font-size: ${props => props.theme.font_size.size_2};
        }

        .image
        {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            top: 20%;
            left: -5%;

            img
        {
            width: 450px;

            &:nth-child(1)
            {
                width: 350px;
            }
        }

        }


        .btn
        {
            div
            {
                width: 400px;
                height: 80px;
            }
        }
    }

`;