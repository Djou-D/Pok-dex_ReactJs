import styled from "styled-components"

export const Modal = styled.div`
    position: absolute;
    width: 100%;
    height: 105vh;
    top: 0;
    left: 0;
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props => props.theme.padding.pad_5};

`;

export const Container = styled.section`
    border-radius: ${props => props.theme.border.radius_1};
    display: flex;
    height: 100vh;
    width: 100%;
    margin-bottom: ${props => props.theme.margin.top};
    
    .header
    {
        width: 220%;
    }

    .name
    {
        width: 100%;
        padding: ${props => props.theme.padding.pad_4};
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
        
        h3
        {
            font-size: ${props => props.theme.font_size.size_2};
        }

        p
        {
            font-size: ${props => props.theme.font_size.size_3};
        }
    }

    .type
    {
        width: 100%;
        height: 80%;
        padding: ${props => props.theme.padding.pad_5};
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        gap: 2rem;
        
        p
        {
            width: 100px;
            text-align: center;
            background: ${props => props.theme.colors.secundary};
            padding: ${props => props.theme.padding.pad_5};
            border-radius: ${props => props.theme.border.radius_2};
            font-size: ${props => props.theme.font_size.size_3};
            margin-right: ${props => props.theme.margin.right};
        }
    }

    .image
    {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        

        img
        {
            width: 400px;
            position: absolute;
            top: 25%;
            z-index: 10;
        }
    }


  &.Normal 
  {
    background-color: #a8a878;
  }

  &.Fire 
  {
    background-color: #f08030;
  }
  
  &.Water 
  {
    background-color: #6890f0;
  }

  &.Electric 
  {
    background-color: #f8d030;
  }

  &.Grass 
  {
      background-color: #78c850;
  }

  &.Ice 
  {
    background-color: #98d8d8;
  }

  &.Ground 
  {
    background-color: #e0c068;
  }

  &.Flying 
  {
    background-color: #a890f0;
  }

  &.Ghost 
  {
    background-color: #705898;
  }

  &.Rock 
  {
    background-color: #b8a038;
  }

  &.Fighting 
  {
    background-color: #c03028;
  }

  &.Poison 
  {
    background-color: #a040a0;
  }

  &.Psychic 
  {
    background-color: #f85888;
  }

  &.Bug 
  {
    background-color: #a8b820;
  }

  &.Dark 
  {
    background-color: #705848;
  }

  &.Steel 
  {
    background-color: #b8b8d0;
  }

  &.Dragon 
  {
    background-color: #7038f8;
  }

  &.Fairy 
  {
    background-color: #f781d8;
  }
    

  @media screen and (min-width: 2560px){
    display: flex;
    
    
    .header
    {
        width: 200%;
    }

    .name
    {
        padding: ${props => props.theme.padding.pad_2};
        
        h3
        {
            font-size: ${props => props.theme.font_size.size_0};
        }

        p
        {
            font-size: ${props => props.theme.font_size.size_1};
        }
    }

    .type
    {
        
        p
        {
            width: 250px;
            padding: ${props => props.theme.padding.pad_5};
            font-size: ${props => props.theme.font_size.size_1};            
        }
    }

    .image
    {
        img
        {
            width: 900px;
            top: 20%;
        }
    }
  }



  @media screen and (min-width: 1440px) and (max-width: 2559px){
    .image
    {
        img
        {
            width: 600px;
            top: 15%;
        }
    }
    
  }

  @media screen and (max-width: 1023px) {
    display: block;

    .header
    {
        width: 100%;
        height: 200px;
    }

    .name
    {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .type
    {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1rem;
        
        p
        {
            width: 80px;
            text-align: center;
            margin-left: 10px;
        }
    }

    .image
    {
        display: flex;
        justify-content: center;
        
        img
        {
            width: 190px;
            position: absolute;
            left: 40%;
            top: 10%;
            z-index: 10;
        }
    }

  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .header
    {
        height: 250px;
    }

    .image
    { 
        img
        {
            width: 280px;
            top: 8%;
            left: 33%;
        }
    }
  }
    
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
    top: 5px;
    display: flex;
    padding: ${props => props.theme.padding.pad_4};
    z-index: 100;

    &:before,
    &:after
    {
        content: '';
        position: absolute;
        width: 2.5px;
        height: 24px;
        background: #fff;
    }

    &:before
    {
        transform: rotate(45deg);
    }

    &:after
    {
        transform: rotate(-45deg);
    }

    @media screen and (min-width: 1024px) {
        cursor: pointer;
        background-color: transparent;
        outline: none;
        border: none;
        width: 32px;
        height: 32px;
        position: relative;
        right: -50%;
        top: -25px;
        display: flex;
    }


`;

export const Content = styled.div`
    

    .boty
    {
        background: ${props => props.theme.colors.background};
        border-radius: ${props => props.theme.border.radius_1};

        .description
        {
            padding: ${props => props.theme.padding.pad_4};
            line-height: 25px;

            h3
            {
                text-align: left;
                padding: ${props => props.theme.padding.pad_4};
                font-size: ${props => props.theme.font_size.size_3};
            }

            p
            {
                text-align: center;
                padding: ${props => props.theme.padding.pad_4};
                font-size: ${props => props.theme.font_size.size_4};
            }
        }

        .info
        {
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;

            div
            {
                width: 32%;
            }
            
            div:nth-child(2)
            {
                border-left: 2px solid #E0E0E0;
                border-right: 2px solid #E0E0E0;
            }

            p
            {
                font-size: ${props => props.theme.font_size.size_4};

                i
                {
                    font-size: ${props => props.theme.font_size.size_6};
                }
            }

            small
            {
                font-size: ${props => props.theme.font_size.size_6};
            }
        }


        .features
        {
            padding: ${props => props.theme.padding.pad_4};
            margin: ${props => props.theme.margin.top_2};

            h3
            {
                text-align: left;
                padding: ${props => props.theme.padding.pad_4};
                font-size: ${props => props.theme.font_size.size_3};
            }
            
            p
            {
                padding: ${props => props.theme.padding.pad_4};
                font-size: ${props => props.theme.font_size.size_4};
            }

            .mars i
            {
                color: #287DFC;
            }

            .venus i
            {
                color: #E85382;
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

    }

    @media screen and (min-width: 2060px){
        .boty
        {
            padding: ${props => props.theme.padding.pad_1};

            .description
            {
                padding: ${props => props.theme.padding.pad_2};
                line-height: 45px;

                h3
                {
                    padding: ${props => props.theme.padding.pad_2};
                    font-size: ${props => props.theme.font_size.size_0};
                }

                p
                {
                    text-align: center;
                    padding: ${props => props.theme.padding.pad_2};
                    font-size: ${props => props.theme.font_size.size_1};
                }
            }

            .info
            {
                p
                {
                    font-size: ${props => props.theme.font_size.size_1};
                }

                small
                {
                    font-size: ${props => props.theme.font_size.size_3};
                }
            }

            .features
            {
                padding: ${props => props.theme.padding.pad_2};
                margin-top: ${props => props.theme.margin.left};

                h3
                {
                    padding: ${props => props.theme.padding.pad_2};
                    font-size: ${props => props.theme.font_size.size_0};
                }

                p
                {
                    padding: ${props => props.theme.padding.pad_2};
                    font-size: ${props => props.theme.font_size.size_1};
                }

                div
                {

                    .statsTitle
                    {
                        width: 300px;
                    }

                    .statsValue
                    {
                        width: 200px;

                    }
                }
            }
        }
    }


`;

