export const StoreActionTypes = {
  SET_STORE: "SET_STORE",
  SET_STORE_EMPTY: "SET_STORE_EMPTY"
};

export const setStore = store => ({
  type: StoreActionTypes.SET_STORE,
  payload: store
});

export const setStoreEmpty = () => ({
  type: StoreActionTypes.SET_STORE_EMPTY
});
