import { StoreActionTypes } from "./../actions/StoreActions";

const INITIAL_STATE = {
  store: []
};

const storeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StoreActionTypes.SET_STORE:
      return {
        ...state,
        store: JSON.parse(action.payload)
      };
    default:
      return state;
  }
};

export default storeReducer;
