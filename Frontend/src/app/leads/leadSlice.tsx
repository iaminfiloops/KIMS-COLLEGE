import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { Leads, LeadsGet } from "../../api/leadApi";


interface Credentials {
  name: string;
  email: string;
  phoneNumber: string;
  course:string,
  place:string,
  college?:string,
  leads?:[]
}

interface leadState {
  user: Credentials | null;
  leads: Credentials[];
  loading: boolean;
  error: string | null;
}

const initialState: leadState = {
  user: null,
  leads: [],
  loading: false,
  error: null,
};

export const leadRegister = createAsyncThunk(
  "auth/leadRegister",
  async (credentials: Credentials, thunkAPI) => {
    try {
      const data = await Leads(credentials);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const leadsGets = createAsyncThunk(
  "auth/leadsGets",
  async (_, thunkAPI) => {
    try {
      const data = await LeadsGet();
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const leadSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(leadRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(leadRegister.fulfilled, (state, action: PayloadAction<Credentials>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(leadRegister.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(leadsGets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(leadsGets.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.leads = action.payload.leads; // Assuming LeadsGet() returns an array of Lead objects
      })
      .addCase(leadsGets.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectLeads = (state: RootState) => state.leads;
export default leadSlice.reducer;
