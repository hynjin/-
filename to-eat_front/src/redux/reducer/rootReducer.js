import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import storeReducer from "./storeReducer";
import filterReducer from "./filterReducer";
import mapReducer from "./mapReducer";

const persistConfig = {
  key: "root",
  storage,
  whilelist: []
};

const rootReducer = combineReducers({
  store: storeReducer,
  filter: filterReducer,
  map: mapReducer
});

export default persistReducer(persistConfig, rootReducer);
