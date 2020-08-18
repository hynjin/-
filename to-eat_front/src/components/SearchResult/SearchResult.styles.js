import styled from "styled-components";

export const SearchResultContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const SearchResultContainer = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  color: #292d39;
`;

export const SearchResultitem = styled.li`
  width: 100%;
  height: 150px;
  padding: 10px 20px;
  border-bottom: 1px solid #292d3933;
  color: #616161;
  font-weight: 600;
  line-height: 160%;
  a {
    color: #00babb;
    font-weight: 700;
  }
  &:last-child {
    border: none;
  }
  &:hover {
    background-color: #00babb24;
  }
  ${({ selected }) => {
    if (selected) {
      return `
        background-color: #00babb24;
      `;
    }
  }}
`;
