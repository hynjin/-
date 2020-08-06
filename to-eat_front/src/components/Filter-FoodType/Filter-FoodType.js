import React, { useState } from "react";
import { SectionFoodType, FoodTypeContainer } from "./Filter-FoodType.style";
import CustomButton from "../CustomButton/CustomButton";

const foodType = [
  "한식",
  "디저트",
  "동남아음식",
  "인도음식",
  "양식",
  "중식",
  "일식",
  "분식",
  "패스트푸드",
  "뷔페"
];

const FilterFoodType = () => {
  const defaultFoodType = {
    한식: true,
    디저트: false,
    동남아음식: false,
    인도음식: false,
    양식: false,
    중식: false,
    일식: false,
    분식: false,
    패스트푸드: false,
    뷔페: false
  };
  const [pickedFood, setPickedFood] = useState(defaultFoodType);
  const handleFoodClick = React.useCallback(
    food => {
      const changedPickedFood = { ...pickedFood, [food]: !pickedFood[food] };
      setPickedFood(changedPickedFood);
    },
    [pickedFood, setPickedFood]
  );

  return (
    <SectionFoodType>
      <h3>음식 종류</h3>
      <FoodTypeContainer>
        {foodType.map((food, i) => (
          <CustomButton
            key={i}
            inverted={!pickedFood[food]}
            handleClick={handleFoodClick}
          >
            {food}
          </CustomButton>
        ))}
      </FoodTypeContainer>
    </SectionFoodType>
  );
};

export default FilterFoodType;
