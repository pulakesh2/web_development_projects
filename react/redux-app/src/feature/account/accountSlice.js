import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: null,
  models: [],
  address: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    createAccount: {
      prepare(name, age, address) {
        return {
          payload: { name, age, address },
        };
      },
      reducer(state, action) {
        state.name = action.payload.name;
        state.age = action.payload.age;
        state.address = action.payload.address;
      },
    },
    addModel(state, action) {
      state.models = [...state.models, action.payload];
    },
  },
});

export const { createAccount, addModel } = accountSlice.actions;

export default accountSlice.reducer;
