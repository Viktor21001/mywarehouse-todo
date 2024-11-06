import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IReturnedUser, IGetUser } from '../../types/types';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: IGetUser[] = await response.json();
  return data.map((item) => ({
    id: item.id,
    name: item.username,
    email: item.email,
  })) as IReturnedUser[];
});

interface UsersState {
  users: IReturnedUser[];
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load users';
      });
  },
});

export default usersSlice.reducer;
