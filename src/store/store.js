import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/sellerSlice";

const store = configureStore({
  reducer: {
    users: userSlice,
  },
});

export default store;
