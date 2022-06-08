import styled from "styled-components"

export const Modal = styled.div`
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, .8);
    top: 0;
    left: 0;
    z-index: 11;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${props => props.theme.padding.pad_1};

`;

export const Container = styled.section`
    border-radius: ${props => props.theme.border.radius_1};;


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
    height: 90vh;
    
    .header
    {
        width: 100%;
    }

    .name
    {
        width: 100%;
        padding: ${props => props.theme.padding.pad_4};;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
        
        h3
        {
            font-size: ${props => props.theme.font_size.size_1};
        }

        p
        {
            font-size: ${props => props.theme.font_size.size_2};
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
            width: 800px;
            position: absolute;
            top: 25%;
            z-index: 10;
        }
    }
  }



  @media screen and (min-width: 1440px) and (max-width: 2559px){
    display: flex;
    height: 100vh;
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
            width: 600px;
            position: absolute;
            top: 15%;
            z-index: 10;
        }
    }
    
  }

  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    display: flex;
    
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
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    .header
    {
        height: 220px;
    }

    .name
    {
        width: 100%;
        padding: ${props => props.theme.padding.pad_4};
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        h3
        {
            font-size: ${props => props.theme.font_size.size_3};
        }

        p
        {
            font-size: ${props => props.theme.font_size.size_4};
        }
    }

    .type
    {
        padding: ${props => props.theme.padding.pad_5};
        display: flex;
        gap: 1rem;
        
        p
        {
            background: ${props => props.theme.colors.secundary};
            padding: ${props => props.theme.padding.pad_4};
            border-radius: ${props => props.theme.border.radius_2};
            font-size: ${props => props.theme.font_size.size_4};
            
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
            width: 200px;
            position: absolute;
            top: 10%;
            z-index: 10;
        }
    }
  }


  @media screen and (max-width: 767px) {
    .header
    {
        height: 220px;
    }

    .name
    {
        width: 100%;
        padding: ${props => props.theme.padding.pad_4};
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        h3
        {
            font-size: ${props => props.theme.font_size.size_3};
        }

        p
        {
            font-size: ${props => props.theme.font_size.size_4};
        }
    }

    .type
    {
        padding: ${props => props.theme.padding.pad_5};
        display: flex;
        gap: 1rem;
        
        p
        {
            background: ${props => props.theme.colors.secundary};
            padding: ${props => props.theme.padding.pad_4};
            border-radius: ${props => props.theme.border.radius_2};
            font-size: ${props => props.theme.font_size.size_4};
            
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
            width: 180px;
            position: absolute;
            top: 10%;
            z-index: 10;
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

        .description2
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
    }

    @media screen and (min-width: 2560px){
        .boty
    {
        background: #fff;
        border-radius: ${props => props.theme.border.radius_1};
        padding: ${props => props.theme.padding.pad_1};

        .description
        {
            padding: ${props => props.theme.padding.pad_4};
            line-height: 25px;

            h3
            {
                text-align: left;
                padding: ${props => props.theme.padding.pad_4};
                font-size: ${props => props.theme.font_size.size_1};
            }

            p
            {
                text-align: center;
                padding: ${props => props.theme.padding.pad_4};
                font-size: ${props => props.theme.font_size.size_2};
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
                font-size: ${props => props.theme.font_size.size_2};
            }

            small
            {
                font-size: ${props => props.theme.font_size.size_4};
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
                font-size: ${props => props.theme.font_size.size_1};
            }
            
            p
            {
                padding: ${props => props.theme.padding.pad_4};
                font-size: ${props => props.theme.font_size.size_2};
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
            padding: ${props => props.theme.padding.pad_4};
            line-height: 25px;

            h3
            {
                text-align: left;
                padding: ${props => props.theme.padding.pad_4};
                font-size: ${props => props.theme.font_size.size_1};
            }

            p
            {
                text-align: center;
                padding: ${props => props.theme.padding.pad_4};
                font-size: ${props => props.theme.font_size.size_2};
            }

            }
        }
    }

    @media screen and (min-width: 1024px) and (max-width: 1439px) {
        width: 100%;
            
    }


`;

