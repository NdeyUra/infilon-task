import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  activeTab: 0,
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk("tabs/fetchUsers", async () => {
  const response = await fetch("https://reqres.in/api/users?page=1", {
    headers: {
      "x-api-key": "reqres-free-v1",
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data.data;
});

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { setActiveTab } = tabsSlice.actions;
export default tabsSlice.reducer;
