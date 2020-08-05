import React, { useState } from "react";

import FilterDistance from "../Filter-distance/Filter-distance.component";
import { FilterContent } from "./Filter.styles";
import CustomButton from "../CustomButton/CustomButton";

const Filter = () => {
  const [distance, setDistance] = useState(1);

  return (
    <FilterContent>
      <FilterDistance distance={distance} setDistance={setDistance} />
    </FilterContent>
  );
};

export default Filter;
