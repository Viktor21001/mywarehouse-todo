import {
  IGetTodos,
  IGetUser,
  IReturnedTodos,
  IReturnedUser,
} from '../types/types';

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => checkResponse<IGetUser[]>(res))
    .then((res) => {
      const response: IReturnedUser[] = res.map((item) => {
        return {
          id: item.id,
          name: item.username,
          email: item.email,
        };
      });
      return response;
    })
    .catch((err) => console.error(err));
};

export const getTodos = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => checkResponse<IGetTodos[]>(res))
    .then((res) => {
      const response: IReturnedTodos[] = res.map((item) => {
        return { userId: item.userId };
      });
      return response;
    })
    .catch((err) => console.error(err));
};
