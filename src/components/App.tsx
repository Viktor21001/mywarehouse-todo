import { useEffect } from 'react';
import './styles/App.css';
import { fetchUsers } from '../redux/slices/usersSlice';
import { fetchTodos } from '../redux/slices/todosSlice';
import { useAppDispatch } from '../redux/hooks';
import Main from './Main/main';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchTodos());
  }, [dispatch]);

  return <Main />;
}

export default App;
