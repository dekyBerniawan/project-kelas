import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBurger = createAsyncThunk("list-food/burger", async () => {
  const response = await axios.get(
    // "https://tiny-blue-vulture-shoe.cyclic.app/burgers"
    "https://free-food-menus-api-two.vercel.app/burgers"
  );
  return response.data;
});

export const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBurger.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBurger.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  },
});

export default burgerSlice.reducer;
