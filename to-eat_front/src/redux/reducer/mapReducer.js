import { MapActionTypes } from "./../actions/MapActions";

const INITIAL_STATE = {
  selected: ""
};

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MapActionTypes.SET_SELECTED_PLACE:
      return {
        ...state,
        selected: action.payload
      };
    default:
      return state;
  }
};

export default mapReducer;
