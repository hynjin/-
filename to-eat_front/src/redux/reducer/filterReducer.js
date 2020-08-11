import { FilterActionTypes } from "./../actions/FilterActions";

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

const INITIAL_STATE = {
  distance: 1,
  pickedFood: defaultFoodType,
  query: "",
  sortType: "review"
};

// utils
const changePickedFood = (food, pickedFood) => ({
  ...pickedFood,
  [food]: !pickedFood[food]
});

// reducer
const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FilterActionTypes.SET_DISTANCE:
      return {
        ...state,
        distance: action.payload
      };
    case FilterActionTypes.SET_FOODTYPE:
      return {
        ...state,
        pickedFood: changePickedFood(action.payload, state.pickedFood)
      };
    case FilterActionTypes.SET_QUERY:
      return {
        ...state,
        query: action.payload
      };
    case FilterActionTypes.SET_SORTTYPE:
      return {
        ...state,
        sortType: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;
