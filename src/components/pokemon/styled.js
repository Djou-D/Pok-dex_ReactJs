import styled from "styled-components"


export const Card = styled.div`

  width: 350px;
  height: 250px;
  background: #ecf0f1;
  color: #fff;
  padding: 1rem;
  border-radius: 20px;
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
    padding: 4px;
    flex: 1;
    max-width: 100%;

`;

export const Header = styled.section`

    padding: 2px;
    display: flex;
    justify-content: space-between;
    gap: 10px;

`;

export const Center = styled.section`

    display: flex;
    align-items: center;
    height: 150px;

    div:nth-child(1)
    {   
        display: flex;
        flex-direction: column;

        h4
        {
          padding: 10px;
          margin: 5px 0;
          background: rgba(255,255,255, 0.25);
          border-radius: 20px;
        }
    }

    div:nth-child(2) img
    {
        position: absolute;
        top: 25%;
        left: 50%;
        width: 120px;
        cursor: pointer;
    }

`;

export const CardFooter = styled.footer`

    display: flex;
    justify-content: space-between;
    align-items: center;

`;