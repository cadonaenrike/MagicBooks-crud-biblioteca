import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  backdrop-filter: blur(19px) saturate(180%);
  -webkit-backdrop-filter: blur(19px) saturate(180%);
  background-color: #fafcfa73;
  border-radius: 12px;
  text-align: center;
`;

export const StyledTh = styled.th`
  text-align: center;
  border: 1px solid #050505;
  color: #020202;
  font-style: italic;
  font-size: 1.8rem;
  font-weight: 900;
  padding: 8px 12px;
`;

export const StyledTd = styled.td`
  text-align: center;
  border: 1px solid #050505;
  color: #000000;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 10px 14px;
`;

export const StyledTr = styled.tr`
  &:hover {
    background-color: #ffffff21;
  }
`;

export const MagicButton = styled.button`
  padding: 6px 10px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    animation: ${fadeIn} 0.5s ease;
  }
`;

export const EditButton = styled(MagicButton)`
  background-color: #000000;
  margin: 1rem;
  position: relative;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  justify-content: center;
  border: none;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -4px;
    top: -1px;
    margin: auto;
    padding: 6px 10px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #000000d2 0%, rgb(1, 255, 22) 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #000000d2 0%, rgb(0, 255, 21) 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  &:hover::after {
    filter: blur(30px);
  }

  &:hover::before {
    transform: rotate(-180deg);
  }

  &:active::before {
    scale: 0.7;
  }
`;

export const DeleteButton = styled(MagicButton)`
  background-color: #000000; /* Vermelho */
  margin: 1rem;
  position: relative;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  justify-content: center;
  border: none;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -4px;
    top: -1px;
    margin: auto;
    padding: 6px 10px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #000000 0%, #ff3b30 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #000000 0%, #ff3b30 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  &:hover::after {
    filter: blur(30px);
  }

  &:hover::before {
    transform: rotate(-180deg);
  }

  &:active::before {
    scale: 0.7;
  }
`;

export const InfoButton = styled(MagicButton)`
  background-color: #000000;
  margin: 1rem;
  position: relative;
  padding: 6px 10px;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
  justify-content: center;
  border: none;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    left: -4px;
    top: -1px;
    margin: auto;
    padding: 6px 10px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #000000 0%, #0112ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #000000 0%, #0112ff 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  &:hover::after {
    filter: blur(30px);
  }

  &:hover::before {
    transform: rotate(-180deg);
  }

  &:active::before {
    scale: 0.7;
  }
`;
