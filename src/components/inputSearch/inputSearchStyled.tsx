import styled from "styled-components";
export const InputWrapper = styled.div`
  position: relative;
  left: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.05rem;
  margin: 0;
  padding: 0%;
`;

export const Input = styled.input`
  display: flex;
  border-style: none;
  height: 50px;
  width: 50px;
  padding: 10px;
  outline: none;
  transition: 0.5s ease-in-out;
  background-color: #4c8b64;
  box-shadow: 0px 0px 8px rgb(255, 255, 255);
  padding-right: 45px;
  color: #fff;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 17px;

  &::placeholder {
    color: #ffffff;
  }
`;

export const Icon = styled.button`
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  outline: none;
  border-style: none;
  border-radius: 50%;
  pointer-events: painted;
  background-color: transparent;
  transition: 0.2s step-start;

  &:focus ~ ${Input}, ${Input}:focus {
    box-shadow: none;
    width: 10rem;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 5px solid rgb(20, 220, 37);
    transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
  }
`;
