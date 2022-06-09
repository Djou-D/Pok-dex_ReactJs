import styled from 'styled-components'
import Pikachu_gif from "../../assets/gif/pikachu.gif";
import Perfil from "../../assets/img/perfil-2.png"


export const Container = styled.div`
    width: 100%;
    height: 100%;

    .banner
    {
        position: relative;
        width: 100%;
        height: 100vh;
        background: ${props => props.theme.colors.tertiary};
        display: flex;
        justify-content: center;
        align-items: center;

        header
        {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 10px 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 11;
            border-radius:  ${props => props.theme.border.radius_3};
            background: rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
            

            img
            {
                width: 250px;
                transform: rotate(10deg);
            }

            .link
            {
                color: ${props => props.theme.colors.textPrimary};
                font-size: ${props => props.theme.font_size.size_2};
                text-decoration: none;
                letter-spacing: 1px;
                overflow: hidden;
                transition: 0.5s;
            }

            &:hover .link
            {
                letter-spacing: 3px;
            }
        }

        .img-banner
        {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: .25;
        }

        .content
        {
            position: relative;
            max-width: 400px;
            text-align: center;

            h2
            {
                color: ${props => props.theme.colors.textPrimary};
                font-size: ${props => props.theme.font_size.size_1};
                padding: ${props => props.theme.padding.pad_2};
            }


            p
            {
                color: ${props => props.theme.colors.textSecundary};
                font-size: ${props => props.theme.font_size.size_4};
                letter-spacing: 1px;
            }
        }

        @media screen and (min-width: 2480px){
            .content
            {
            max-width: 600px;
            text-align: center;

            h2
            {
                font-size: ${props => props.theme.font_size.size_1};
                padding: ${props => props.theme.padding.pad_1};
            }


            p
            {
                font-size: ${props => props.theme.font_size.size_2};
            }
            }
        }

        @media screen and (max-width: 700px){
            padding-top: 150px;

            header
            {
                display: flex;
                flex-direction: column;
            }
        }
        
    }

    .about
    {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        
        .about-sect
        {
            display: flex;
        }

        .content-bx
        {
            background: ${props => props.theme.colors.tertiary};
            padding: 100px;
            width: 50%;
            height: 85vh;
        }

        .heading
        {
            color: ${props => props.theme.colors.textPrimary};
            font-size: ${props => props.theme.font_size.size_1};
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: ${props => props.theme.margin.right};
        }

        .text
        {
            color: ${props => props.theme.colors.textSecundary};
            font-size: ${props => props.theme.font_size.size_4};
            font-weight: 300;
            letter-spacing: 1px;
        }

        .img-bx
        {
            background: url(${Pikachu_gif});
            width: 50%;
            background-size: cover;
            background-position: center;
        }

        .img-bx2
        {
            background: url(${Perfil});
            width: 50%;
            background-size: cover;
            background-position: center;
        }

        @media screen and (min-width: 2480px){
            .content-bx
            {
                padding: 200px;
                height: 70vh;
            }

            .heading
            {
                font-size: ${props => props.theme.font_size.size_1};
            }

            .text
            {
                font-size: ${props => props.theme.font_size.size_2};
            }
        }

        @media screen and (max-width: 1139px){
            .content-bx
            {
                padding: 40px;
            }
        }


        @media screen and (max-width: 1023px){
            .about-sect
            {
                display: flex;
                flex-direction: column;
            }

            .content-bx
            {
                padding: 50px;
                width: 100%;
                height: 80vh;
            }

            .img-bx
            {
                width: 100%;
                height: 80vh;
            }

            .img-bx2
            {
                width: 100%;
                height: 80vh;
            }
        }

        @media screen and (max-width: 590px){
            .content-bx
            {
                height: 75vh;
                padding: 20px;
            }
        }

        @media screen and (max-width: 389px){
            .content-bx
            {
                height: 100vh;
                padding: 20px;
            }

        }
    }

    .technology
    {
        background: #3E6966;
        padding: 100px;
        text-align: center;

        .container
        {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 60px;
            gap: 1rem;

            .tec-bx
            {
                position: relative;
                background: ${props => props.theme.colors.background};
                border-radius: ${props => props.theme.border.radius_1};
                width: 350px;
                height: 300px;
                display: flex;
                justify-content: center;
                align-items: center;


                img
                {
                    max-width: 100px;
                }

            }
        }


        @media screen and (max-width: 1285px){
            .container
            {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }

        @media screen and (max-width: 450px){
            padding: 30px;
        }
    }

    .footer
    {
        background: #3E6966;        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 150px;


        .social
        {
            display: flex;
            justify-content: space-around;
            align-items: center;
            letter-spacing: 1px;
            color: ${props => props.theme.colors.textSecundary};
            font-size: ${props => props.theme.font_size.size_2};
            width: 100%;


            div
            {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            i
            {
                color: ${props => props.theme.colors.textPrimary};
                text-decoration: none;
            }
        }


        @media screen and (max-width: 450px){
            height: 250px;

            .social
            {
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
                gap: 2rem;
            }
        }
    }


`