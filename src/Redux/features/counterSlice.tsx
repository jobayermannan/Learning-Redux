import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  count: number
}

const initialState :CounterState = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, ) => {
      state.count = state.count + 1;
    },
    decrement: (state,) => {
      state.count = state.count - 1;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { decrement, increment, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
