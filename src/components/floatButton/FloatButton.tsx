import React from "react";

import ButtonStyled from "./floatButtonStyles";

interface FloatButtonProps {
  action: () => void;
}

const FloatButton: React.FC<FloatButtonProps> = ({ action }) => {
  return (
    <ButtonStyled onClick={action}>
      <div className="svg-wrapper">
        <svg height="60" width="190" xmlns="http://www.w3.org/2000/svg">
          <rect className="shape" height="60" width="190"></rect>
        </svg>
        <div className="text">Adicionar Livro</div>
      </div>
    </ButtonStyled>
  );
};

export default FloatButton;
