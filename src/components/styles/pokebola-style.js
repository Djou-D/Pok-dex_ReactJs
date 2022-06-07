import styled from "styled-components";

export const Pokebola = styled.div`

  cursor: pointer;
  color: #000;
  font-weight: 700;
  position: relative;
  width: 50px;
  height: 50px;
  border: 2px solid #000;
  border-radius: 50%;
  background: #fff;
  box-shadow: inset -10px 10px 0 10px rgba(0, 0, 0, 0.2);

  overflow: hidden;
  animation: gira 4s infinite;

  &:before,
  &:after 
  {
    content: "";
    position: absolute;
  }

  &:before 
  {
    background: #ef4036;
    width: 100px;
    height: 50%;
    top: 0;
    left: -20px;
    box-shadow: inset 10px -10px 0 10px rgba(0, 0, 0, 0.2);
  }

  &:after 
  {
    top: calc(50% - 4.5px);
    width: 100%;
    height: 4px;
    background: #000;
    right: 0;
  }

  div 
  {
    width: 20px;
    height: 20px;
    background: #fff;
    border: 4px solid #000;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 11px);
    left: calc(50% - 11px);
    z-index: 10;

    &:before 
    {
      content: "";
      position: absolute;
      top: calc(50% - 4px);
      left: calc(50% - 4px);
      width: 5px;
      height: 5px;
      background: #fff;
      border: 1.5px solid #000;
      border-radius: 50%;
      z-index: 10;
    }
  }

  @keyframes gira 
  {
    0% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(-45deg);
    }
  }
  
`;
