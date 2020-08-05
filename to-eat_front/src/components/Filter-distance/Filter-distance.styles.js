import styled from "styled-components";

export const SectionDistance = styled.section`
  display: flex;
  flex-direction: column;
  h3 {
    color: #292d39;
  }
`;

export const RadioBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const RadioContainer = styled.div`
  width: 15px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  label {
    cursor: pointer;
  }
`;
