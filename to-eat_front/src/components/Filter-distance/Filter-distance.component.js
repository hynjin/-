import React from "react";
import { Radio } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";

import {
  SectionDistance,
  RadioBox,
  RadioContainer
} from "./Filter-distance.styles";
import { setDistance } from "../../redux/actions/FilterActions";

const radios = [1, 2, 3, 4];

const FilterDistance = () => {
  const dispatch = useDispatch();
  const distance = useSelector(state => state.filter.distance);

  return (
    <SectionDistance>
      <h3>거리</h3>
      <RadioBox>
        {radios.map((value, i) => (
          <RadioContainer key={i + 1}>
            <Radio
              checked={distance === value}
              onClick={() => dispatch(setDistance(value))}
            />
            <label onClick={() => dispatch(setDistance(value))}>
              {value}km
            </label>
          </RadioContainer>
        ))}
      </RadioBox>
    </SectionDistance>
  );
};

export default FilterDistance;
