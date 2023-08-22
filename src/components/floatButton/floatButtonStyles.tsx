import { styled } from "styled-components";

const ButtonStyled = styled.button`
  margin-top: 1rem;

  font-size: 30px;
  background: none;
  border: none;

  .svg-wrapper {
    position: relative;
    width: 190px;
    height: 60px;
    text-align: center;
    cursor: pointer;
  }

  .shape {
    stroke-dasharray: 240 800;
    stroke-dashoffset: -200;
    fill: transparent;
    stroke: rgb(20, 220, 37);
    stroke-width: 10px;
    transition: stroke-width 1s, stroke-dashoffset 1s, stroke-dasharray 1s;
  }

  .text {
    font-size: 23px;
    top: -50px;
    position: relative;
    font-weight: 600;
    color: #fcfcfc;
    text-shadow: 4px 4px 2px #020202;
  }

  .svg-wrapper:hover .shape {
    stroke-width: 3px;
    stroke-dashoffset: 0;
    stroke-dasharray: 780;
  }

  .svg-wrapper:hover {
    background-color: #4c8b64d3;
    transition: 0.2s;
  }
`;

export default ButtonStyled;
