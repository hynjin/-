import React from "react";
import { SectionFoodType, FoodTypeContainer } from "./Filter-FoodType.style";
import CustomButton from "../CustomButton/CustomButton.component";
import { useDispatch, useSelector } from "react-redux";
import { setFoodType } from "../../redux/actions/FilterActions";

const foodTypes = [
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
  const dispatch = useDispatch();
  const pickedFood = useSelector(state => state.filter.pickedFood);

  const handleFoodClick = React.useCallback(
    food => {
      dispatch(setFoodType(food));
    },
    [dispatch]
  );

  return (
    <SectionFoodType>
      <h3>음식 종류</h3>
      <FoodTypeContainer>
        {foodTypes.map((food, i) => (
          <CustomButton
            key={i}
            inverted={!pickedFood[food]}
            handleClick={handleFoodClick}
            btnType="food"
          >
            {food}
          </CustomButton>
        ))}
      </FoodTypeContainer>
    </SectionFoodType>
  );
};

export default FilterFoodType;
