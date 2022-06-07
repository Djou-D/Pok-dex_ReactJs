import styled from "styled-components";

export const Container = styled.div`

   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 10vh;
   gap: 20px;

   .search
   {
        position: relative;
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 40px;
        transition: 0.5s;
        box-shadow: 0 0 0 5px #ccc;
        overflow: hidden;
   }

   .search.active
   {
    width: 250px;
   }

   .icon
   {
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        background: #fff;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        cursor: pointer;

        &:before
        {
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            border: 2px solid #287dfc;
            border-radius: 50%;
        }

        &:after
        {
            content: '';
            position: absolute;
            width: 2px;
            height: 7px;
            background: #287dfc;
            transform: translate(6px, 6px) rotate(315deg);
        }
   }

   .input 
   {
        position: relative;
        width: 230px;
        height: 40px;
        left: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        input
        {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            font-size: 15px;
            padding: 10px 0;
        }

   }

   .catch
        {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            border-radius: 20px;
            right: 5px;
            cursor: pointer;
            /* background: #287dfc; */
            display: flex;
            justify-content: center;
            align-items: center;

            &:before
            {
                position: absolute;
                content: '';
                width: 3px;
                height: 20px;
                top: -20%;
                background: #287dfc;
                transform: rotate(-55deg);
            }

            &:after
            {
                position: absolute;
                content: '';
                width: 3px;
                height: 20px;
                top: 30%;
                background: #287dfc;
                transform: rotate(-300deg);
            }
        }


`