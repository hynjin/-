import React from "react";
import { Radio } from "semantic-ui-react";

import {
  SectionDistance,
  RadioBox,
  RadioContainer
} from "./Filter-distance.styles";

const radios = [1, 2, 3, 4];

const FilterDistance = ({ setDistance, distance }) => {
  return (
    <SectionDistance>
      <h3>거리</h3>
      <RadioBox>
        {radios.map((value, i) => (
          <RadioContainer key={i + 1}>
            <Radio
              checked={distance === value}
              onClick={() => setDistance(value)}
            />
            <label onClick={() => setDistance(value)}>{value}km</label>
          </RadioContainer>
        ))}
      </RadioBox>
    </SectionDistance>
  );
};

export default FilterDistance;
