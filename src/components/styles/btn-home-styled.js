import styled from 'styled-components'

export const Container = styled.div`

    width: 300px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-left: 35%;
    margin-top: 5%;


    div
    {
        position: relative;
        width: 250px;
        height: 60px;
        margin: 20px;


        .Gocatch
        {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 30px;
            color: #000;
            z-index: 1;
            font-weight: 400;
            font-size: 20px;
            letter-spacing: 1px;
            text-decoration: none;
            overflow: hidden;
            transition: 0.5s;
            backdrop-filter: blur(15px);

            &:before
            {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 50%;
                height: 100%;
                background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
                transform: skewX(45deg) translateX(0);
                transition: .5s;
            }

        }

        &:hover .Gocatch
        {
            letter-spacing: 3px;
        }

        &:hover .Gocatch:before
        {
            transform: scaleX(45deg) translateX(200%);
        }

        &:before
        {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -15px;
            width: 50px;
            height: 50px;
            background: #f00;
            border-radius: 30px;
            transition: .5s;
            transition-delay: .5s;
        }

        &:hover:before
        {
            bottom: 0;
            height: 50%;
            width: 80%;
            border-radius: 30px;
            transition-delay: .5s;
        }

    
    }
`