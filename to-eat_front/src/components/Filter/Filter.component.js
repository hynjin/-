import React, { useState } from "react";

import { FilterContent } from "./Filter.styles";
import FilterDistance from "../Filter-distance/Filter-distance.component";
import FilterFoodType from "../Filter-FoodType/Filter-FoodType.component";
import FilterSortType from "../Filter-SortType/Filter-SortType.component";
import FilterSearchBtn from "../Filter-Search/Filter-SearchBtn";
import FilterSearchBar from "../Filter-Search/Filter-SearchBar.component";

const Filter = () => {
  const [distance, setDistance] = useState(1);

  return (
    <FilterContent>
      <FilterSearchBar />
      <FilterDistance distance={distance} setDistance={setDistance} />
      <FilterFoodType />
      <FilterSortType />
      <FilterSearchBtn />
    </FilterContent>
  );
};

export default Filter;
