import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/app/auth/authSlice";
import leadReducer from "../src/app/leads/leadSlice"
const store = configureStore({
  reducer: {
    auth: authReducer,
    leads:leadReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
