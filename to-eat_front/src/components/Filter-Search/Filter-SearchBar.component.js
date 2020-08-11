import React from "react";
import { Input } from "semantic-ui-react";
import { SearchBarContainer } from "./Filter-SearchBar.styles";

const FilterSearchBar = () => {
  return (
    <SearchBarContainer>
      <Input placeholder="키워드를 입력하세요!" />
    </SearchBarContainer>
  );
};

export default FilterSearchBar;
