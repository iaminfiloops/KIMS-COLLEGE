// src/app/otp/otpSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface OTPState {
  loading: boolean;
  error: string | null;
  verified: boolean;
}

const initialState: OTPState = {
  loading: false,
  error: null,
  verified: false,
};

export const sendOTP = createAsyncThunk(
  'otp/sendOTP',
  async (phoneNumber: string) => {
    const response = await axios.post('/api/send-otp', { phoneNumber });
    return response.data;
  }
);

export const verifyOTP = createAsyncThunk(
  'otp/verifyOTP',
  async ({ phoneNumber, otp }: { phoneNumber: string; otp: string }) => {
    const response = await axios.post('/api/verify-otp', { phoneNumber, otp });
    return response.data;
  }
);

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOTP.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendOTP.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(sendOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to send OTP';
      })
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOTP.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.verified = true;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to verify OTP';
      });
  },
});

export default otpSlice.reducer;
