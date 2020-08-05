import React from "react";
import { Radio } from "semantic-ui-react";
import styled from "styled-components";

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

const SectionDistance = styled.section`
  display: flex;
  flex-direction: column;
  h3 {
    color: #292d39;
  }
`;

const RadioBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const RadioContainer = styled.div`
  width: 15px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  label {
    cursor: pointer;
  }
`;

export default FilterDistance;
