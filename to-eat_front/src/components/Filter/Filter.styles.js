import styled from "styled-components";

export const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  cursor: pointer;
  z-index: 99;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0px 0px 5.5px #292d39;
  color: #292d39;
  width: 20%;
  height: 80%;
  top: 10%;
  right: 3rem;
  padding: 2rem;
  opacity: 0.5;
  transition: opacity ease-in 0.1s;
  &:hover {
    opacity: 0.98;
  }
  section {
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 0.2px solid #00babb4a;
  }
`;
