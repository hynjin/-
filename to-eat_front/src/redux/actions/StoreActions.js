export const StoreActionTypes = {
  SET_STORE: "SET_STORE"
};

export const setStore = store => ({
  type: StoreActionTypes.SET_STORE,
  payload: store
});
