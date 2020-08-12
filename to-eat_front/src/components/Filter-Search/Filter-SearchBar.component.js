import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import { SearchBarContainer } from "./Filter-SearchBar.styles";
import { setQuery } from "../../redux/actions/FilterActions";
import { useDispatch, useSelector } from "react-redux";

let timer;

const FilterSearchBar = () => {
  const dispatch = useDispatch();
  // const query = useSelector(state => state.filter.query);
  const [keyword, setKeywordLocal] = useState("");

  const onKeywordChange = value => {
    setKeywordLocal(value);
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      dispatch(setQuery(value));
    }, 500);
  };

  return (
    <SearchBarContainer>
      <Input
        value={keyword}
        onChange={e => onKeywordChange(e.target.value)}
        placeholder="키워드를 입력하세요!"
      />
    </SearchBarContainer>
  );
};

export default FilterSearchBar;
