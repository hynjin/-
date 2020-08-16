import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { FilterContent } from "./Filter.styles";
import FilterDistance from "../Filter-distance/Filter-distance.component";
import FilterFoodType from "../Filter-FoodType/Filter-FoodType.component";
import FilterSortType from "../Filter-SortType/Filter-SortType.component";
import FilterSearchBtn from "../Filter-Search/Filter-SearchBtn";
import FilterSearchBar from "../Filter-Search/Filter-SearchBar.component";
import SearchResult from "./../SearchResult/SearchResult.component";

const Filter = () => {
  const stores = useSelector(state => state.store.stores);

  return (
    <FilterContent result={stores.length}>
      {!stores.length ? (
        <Fragment>
          <FilterSearchBar />
          <FilterDistance />
          <FilterFoodType />
          <FilterSortType />
          <FilterSearchBtn />
        </Fragment>
      ) : (
        <Fragment>
          <SearchResult />
        </Fragment>
      )}
    </FilterContent>
  );
};

export default Filter;
