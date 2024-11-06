import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IGetTodos, IReturnedTodos } from '../../types/types';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data: IGetTodos[] = await response.json();
  return data.map((item) => ({
    userId: item.userId,
  })) as IReturnedTodos[];
});

interface TodosState {
  todos: IReturnedTodos[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load todos';
      });
  },
});

export default todosSlice.reducer;
