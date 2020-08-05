import React, { useState } from "react";

import styled from "styled-components";
import FilterDistance from "../Filter-distance/Filter-distance.component";

const Filter = () => {
  const [distance, setDistance] = useState(1);

  return (
    <FilterContent>
      <FilterDistance distance={distance} setDistance={setDistance} />
    </FilterContent>
  );
};

const FilterContent = styled.div`
  position: absolute;
  cursor: pointer;
  z-index: 99;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow: 0px 0px 5.5px #292d39;
  color: #000000;
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
`;

export default Filter;
