import React from "react";

import styled from "styled-components";

const CustomButton = React.memo(
  ({ children, inverted, handleClick, btnType }) => {
    return (
      <CustomButtonContent
        onClick={() => handleClick(children)}
        inverted={inverted}
        btnType={btnType}
      >
        {children}
      </CustomButtonContent>
    );
  }
);

const CustomButtonContent = styled.button`
  ${({ inverted }) => {
    if (!inverted) {
      return `
        background-color: #00babb;
        border: 0.2px solid #00babb;
        color: #ffffff;   
      `;
    } else {
      return `
        background-color: #ffffff;
        border: 0.2px solid #00babb;
        color: #00babb;
      `;
    }
  }}
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: 0px 1px 0.5px #0087bb;
    transform: scale(1.02);
    ${({ btnType, inverted }) => {
      if (btnType === "sort") {
        if (inverted) {
          return `
              background-color: #00babb;
              border: 0.2px solid #00babb;
              color: #ffffff;
          `;
        } else {
          return `
              background-color: #ffffff;
              border: 0.2px solid #00babb;
              color: #00babb;
          `;
        }
      }
    }}
  }
  &:active {
    transform: scale(0.96);
  }

  box-shadow: 0px 0.5px 0.5px #0087bb;
  cursor: pointer;
  border-radius: 0.6rem;
  height: 2rem;
  font-size: 0.8rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  transition: all ease-in 0.1s;
`;

export default CustomButton;
