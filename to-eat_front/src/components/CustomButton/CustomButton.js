import React from "react";

import styled from "styled-components";

const CustomButton = ({ children, inverted }) => {
  return (
    <CustomButtonContent inverted={inverted}>{children}</CustomButtonContent>
  );
};

const CustomButtonContent = styled.button`
  ${({ inverted }) => {
    if (!inverted) {
      return `
        background-color: #00babb;
        border: 0.2px solid #00babb;
        color: #ffffff;
        &:hover {
          background-color: #ffffff;
          border: 0.2px solid #00babb;
          color: #00babb;
        }
      `;
    } else {
      return `
        background-color: #ffffff;
        border: 0.2px solid #00babb;
        color: #00babb;
        &:hover {
          background-color: #00babb;
          border: 0.2px solid #00babb;
          color: #ffffff;
        }
      `;
    }
  }}
  cursor: pointer;
  border-radius: 0.6rem;
  width: 3rem;
  height: 2rem;
  font-size: 0.8rem;
`;

export default CustomButton;
