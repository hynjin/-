export const MapActionTypes = {
  SET_SELECTED_PLACE: "SET_SELECTED_PLACE"
};

export const setSelectedPlace = selected => ({
  type: MapActionTypes.SET_SELECTED_PLACE,
  payload: selected
});
