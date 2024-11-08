/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const aplicationSlice = createSlice({
  name: "application",
  initialState: {
    data: {
      applicationResponse: {},
    },
    isLoading: false,
    error: [],
    isSuccessful: null,
  },
  reducers: {
    postApplicationStart: (state) => {
      state.data = {
        applicationResponse: {},
      };
      state.isLoading = true;
      state.error = [];
    },
    postApplicationSuccess: (state, action) => {
      if (action.payload.invoicingVerificationAB !== undefined) {
        state.data.applicationResponse = action.payload.invoicingVerificationAB;
      }
      state.isLoading = false;
      state.error = [];
      state.isSuccessful = action.payload.isSuccessful;
    },
    postApplicationFail: (state, action) => {
      state.data = {
        applicationResponse: {},
      };
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { postApplicationStart, postApplicationSuccess, postApplicationFail } =
  aplicationSlice.actions;

export default aplicationSlice.reducer;
