import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const CounterSlice = createSlice({
  name: "CounterSlice",
  initialState,
  reducers: {
    arttır: (state) => {
      state.count += 1;
    },
    azalt: (state) => {
      state.count -= 1;
    },
    sıfırla: (state, { payload }) => {
      state.count = payload;
    },
  },
});

export const { arttır, azalt, sıfırla } = CounterSlice.actions;

export default CounterSlice.reducer;
