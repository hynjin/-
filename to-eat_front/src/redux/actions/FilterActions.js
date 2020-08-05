export const FilterActionTypes = {
  SET_DISTANCE: "SET_DISTANCE",
  SET_FOODTYPE: "SET_FOODTYPE",
  SET_SORTTYPE: "SET_SORTTYPE",
  SET_QUERY: "SET_QUERY"
};

export const setDistance = distance => ({
  type: FilterActionTypes.SET_DISTANCE,
  payload: distance
});

export const setFoodType = foodType => ({
  type: FilterActionTypes.SET_FOODTYPE,
  payload: foodType
});

export const setSortType = sortType => ({
  type: FilterActionTypes.SET_SORTTYPE,
  payload: sortType
});

export const setQuery = query => ({
  type: FilterActionTypes.SET_QUERY,
  payload: query
});
