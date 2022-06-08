import styled from "styled-components"


export const Card = styled.div`

  width: 350px;
  height: 220px;
  color: ${props => props.theme.colors.textPrimary};
  padding: ${props => props.theme.padding.pad_4};
  border-radius: ${props => props.theme.border.radius_1};
  text-align: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  overflow: hidden;
  text-transform: capitalize;

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

`;

export const CardBody = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${props => props.theme.padding.pad_5};
    flex: 1;
    max-width: 100%;

`;

export const Header = styled.section`

    font-size: ${props => props.theme.font_size.size_4};
    display: flex;
    justify-content: space-between;
    gap: 10px;

`;

export const Center = styled.section`

    display: flex;
    align-items: center;
    height: 120px;

    div:nth-child(1)
    {   
        display: flex;
        flex-direction: column;

        h4
        {
          width: 80px;
          padding: ${props => props.theme.padding.pad_4};
          margin: ${props => props.theme.margin.botton_2};
          background: ${props => props.theme.colors.secundary};
          border-radius: ${props => props.theme.border.radius_1};
        }
    }

    div:nth-child(2) img
    {
        position: absolute;
        top: 25%;
        left: 40%;
        width: 120px;
        cursor: pointer;
    }

`;

export const CardFooter = styled.footer`

    display: flex;
    justify-content: space-between;
    align-items: center;

    span
    {
      padding: ${props => props.theme.padding.pad_4};
      border-radius: ${props => props.theme.border.radius_1};
      background: ${props => props.theme.colors.secundary};
    }
  
`;