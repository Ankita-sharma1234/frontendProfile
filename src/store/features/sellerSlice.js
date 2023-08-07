import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncUsers = createAsyncThunk(
  "users/fetchAsyncUsers",
  async () => {
    const response = await axios.get("https://panorbit.in/api/users.json");
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: {},
    loading: false,
  },
  extraReducers: {
    [fetchAsyncUsers.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [fetchAsyncUsers.fulfilled]: (state, { payload }) => {
      return { ...state, userDetails: payload, loading: false };
    },
    [fetchAsyncUsers.rejected]: (state, { payload }) => {
      console.log("rejected");
    },
  },
});

export const getUsers = (state) => state.users.userDetails.users;
console.log(getUsers, "......redux users");

export default usersSlice.reducer;