
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Login, Register } from "../../api/authApi";
import {
  saveSession,
  clearSession,
  getSessionToken,
  getSessionUser,
} from "../../utility/token";
import { RootState } from "../../store";

export interface AuthState {
  user: any;
  token:any;
  isLoading: boolean;
  error: string;
  isAuthenticated: boolean;
  role?:any;
}

const initialState: AuthState = {
  user: getSessionUser()?.user || null,
  token: getSessionToken() || "",
  isLoading: false,
  error: "",
  isAuthenticated: !!getSessionToken(),
  role: getSessionUser()?.user?.role || "",
};
interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: LoginCredentials, thunkAPI) => {
    try {
      const data = await Login(credentials);
      const expiry = Date.now() + 3600 * 1000; // Example: token expiry set to 1 hour
      saveSession(
        data.token,
        {
          user: data.user,
          token: data.token,
          isLoading: false,
          error: "",
          isAuthenticated: true,
          role: data.role,
        },
        expiry
      );
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (credentials: RegisterCredentials, thunkAPI) => {
    try {
      const data = await Register(credentials);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = "";
      state.isAuthenticated = false;
      state.role = "";
      clearSession();
    },
    restoreSession(state, action: PayloadAction<AuthState>) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.role = action.payload.role;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        loginUser.fulfilled,
        (
          state,
          action: PayloadAction<{ user: string; token: string; role: string }>
        ) => {
          state.isLoading = false;
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.role = action.payload.role;
        }
      )
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(
        registerUser.fulfilled,
        (
          state,
          action: PayloadAction<{ user: string; token: string; role: string }>
        ) => {
          state.isLoading = false;
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.role = action.payload.role;
        }
      )
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, restoreSession } = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;
