import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 600px;
  background-color: #fff;
  padding: 3rem;
  font-size: 1.2rem;
`;

export const StyledH3 = styled.label`
  font-weight: 700;
  font-size: 1.8rem;
  text-align: center;
  color: #4c8b64;
`;
export const StyledLabel = styled.label`
  font-weight: bold;
  color: #4c8b64;
`;

export const StyledInput = styled.input`
  height: 2rem;
  padding: 5px;
  border: 1px solid #4c8b64;
  border-radius: 3px;
  margin-bottom: 0.8rem;
  margin-top: 0.2rem;
`;

export const StyledButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #4c8b64;
  color: #fff;

  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #366d4e;
  }
`;
