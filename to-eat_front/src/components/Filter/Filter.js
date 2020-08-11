import React, { useState } from "react";

import { FilterContent } from "./Filter.styles";
import FilterDistance from "../Filter-distance/Filter-distance.component";
import CustomButton from "../CustomButton/CustomButton";
import FilterFoodType from "../Filter-FoodType/Filter-FoodType";
import FilterSortType from "../Filter-SortType/Filter-SortType";

const Filter = () => {
  const [distance, setDistance] = useState(1);

  return (
    <FilterContent>
      <FilterDistance distance={distance} setDistance={setDistance} />
      <FilterFoodType />
      <FilterSortType />
    </FilterContent>
  );
};

export default Filter;
