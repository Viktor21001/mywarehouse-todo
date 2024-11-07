import { IGetTodos, IGetUser } from '../types/types';

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getUsers = () =>
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => checkResponse<IGetUser[]>(res))
    .then((res) =>
      res.map((item) => ({
        id: item.id,
        name: item.username,
        email: item.email,
      }))
    )
    .catch((err) => console.error(err));

export const getTodos = () =>
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => checkResponse<IGetTodos[]>(res))
    .then((res) => res.map((item) => ({ userId: item.userId })))
    .catch((err) => console.error(err));
