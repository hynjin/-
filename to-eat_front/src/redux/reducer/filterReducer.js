import { FilterActionTypes } from "./../actions/FilterActions";

const INITIAL_STATE = {
  distance: 1,
  foodType: "한식",
  query: "",
  sortType: "review"
};

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
        foodType: action.payload
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
