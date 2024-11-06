import { useEffect } from 'react';
import './styles/App.css';
import { fetchUsers } from '../redux/slices/usersSlice';
import { fetchTodos } from '../redux/slices/todosSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Main from './Main/main';

function App() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const todos = useAppSelector((state) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchTodos());
  }, [dispatch]);

  const usersWithTodoCount = users.map((user) => {
    const count = todos.filter((todo) => todo.userId === user.id).length;
    return { ...user, count };
  });

  return <Main users={usersWithTodoCount} />;
}

export default App;
