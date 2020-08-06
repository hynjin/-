import React, { useState } from "react";

import FilterDistance from "../Filter-distance/Filter-distance.component";
import { FilterContent } from "./Filter.styles";
import CustomButton from "../CustomButton/CustomButton";
import FilterFoodType from "../Filter-FoodType/Filter-FoodType";

const Filter = () => {
  const [distance, setDistance] = useState(1);

  return (
    <FilterContent>
      <FilterDistance distance={distance} setDistance={setDistance} />
      <FilterFoodType />
    </FilterContent>
  );
};

export default Filter;
