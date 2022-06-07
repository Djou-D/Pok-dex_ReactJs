import styled from "styled-components"


export const Modal = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.8);
    top: 0;
    left: 0;
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

`;

export const Container = styled.section`
    background: #f2ff;
    position: absolute;
    top: 0;
    left: 0;
    
   
`;


export const Close = styled.button`

    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    width: 32px;
    height: 32px;
    position: relative;
    right: -50%;
    top: 15px;
    display: flex;

    &:before,
    &:after
    {
        content: '';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background: #000;
    }

    &:before
    {
        transform: rotate(45deg);
    }

    &:after
    {
        transform: rotate(-45deg);
    }


`;

export const Content = styled.div`
    .header
    {
        width: 100%;
        height: 35vh;
    }

    .name
    {
        width: 100%;
        padding: 5px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .type
    {
        padding: 5px 10px;
        display: flex;
        gap: 2rem;
    }

    .image
    {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        

        img
        {
            width: 200px;
            position: absolute;
            top: 10%;
            z-index: 10;
        }
    }

    .boty
    {
        background: #fff;
        border-radius: 25px 25px 0 0;

        .description
        {
            padding: 10px 5px;
            line-height: 25px;

            h3
            {
                text-align: left;
                padding: 10px;
                font-size: 1.2rem;
            }

            p
            {
                text-align: center;
                padding: 10px;
                font-size: .8rem;
            }
        }

        .info
        {
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;

            p
            {
                font-size: 1rem;
            }

            small
            {
                font-size: .5rem;
            }
        }

        .features
        {
            padding: 10px 5px;
            margin: 10px 5px;

            h3
            {
                text-align: left;
                padding: 10px;
                font-size: 1.2rem;
            }
            
            p
            {
                padding: 10px;
            }

            div
            {
                display: flex;
                align-items: center;


                .statsTitle
                {
                    width: 180px;
                    text-align: center;
                }

                .statsValue
                {
                    width: 70px;
                    
                }
                
            }


        }

        .description2
        {
            padding: 10px 5px;
            line-height: 25px;

            h3
            {
                text-align: left;
                padding: 10px;
                font-size: 1.2rem;
            }

            p
            {
                text-align: center;
                padding: 10px;
                font-size: .8rem;
            }

        }
    }




`;