import React, { useState } from "react";

import FilterDistance from "../Filter-distance/Filter-distance.component";
import { FilterContent } from "./Filter.styles";

const Filter = () => {
  const [distance, setDistance] = useState(1);

  return (
    <FilterContent>
      <FilterDistance distance={distance} setDistance={setDistance} />
    </FilterContent>
  );
};

export default Filter;
