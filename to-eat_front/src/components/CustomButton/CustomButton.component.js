import React from "react";

import styled from "styled-components";

const CustomButton = React.memo(
  ({ children, inverted, handleClick, btnType, huge, noBackground }) => {
    return (
      <CustomButtonContent
        onClick={() => handleClick(children)}
        inverted={inverted}
        btnType={btnType}
        huge={huge}
        noBackground={noBackground}
      >
        {children}
      </CustomButtonContent>
    );
  }
);

const CustomButtonContent = styled.button`
  ${({ inverted }) => {
    if (inverted) {
      return `
        background-color: #ffffff;
        color: #00babb;
      `;
    } else {
      return `
        background-color: #00babb;
        color: #ffffff;   
      `;
    }
  }}
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.96);
  }
  &:hover {
    ${({ btnType }) => {
      if (btnType === "food") {
        return `
          box-shadow: 0px 1px 0.5px #0087bb;
          transform: scale(1.02);
        `;
      }
    }}
  }
  box-shadow: 0px 0.5px 0.5px #0087bb;
  border: 0.2px solid #00babb;
  cursor: pointer;
  border-radius: 0.6rem;
  height: 2rem;
  font-size: 0.8rem;
  margin: 0.5rem 0.5rem 0.5rem 0;
  transition: all ease-in 0.1s;
  ${({ huge }) => {
    if (huge) {
      return `
        width: 100%;
        &:hover {
          background-color: #ffffff;
          border: 0.2px solid #00babb;
          color: #00babb;
        }
      `;
    }
  }}
  ${({ noBackground }) => {
    if (noBackground) {
      return `
        margin: 1rem 0.5rem 0.5rem 1rem;
        border: none;
        background-color: #ffffff;
        box-shadow: none;
        &:hover {
          background-color: #00babb24;
          box-shadow: 0px 0.5px 0.5px #0087bb;
        }
      `;
    }
  }}
`;

export default CustomButton;
