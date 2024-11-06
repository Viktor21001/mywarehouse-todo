export type IGetTodos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type IGetUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type IReturnedUser = {
  id: number;
  name: string;
  email: string;
};

export type IReturnedTodos = {
  userId: number;
};

export type IUser = IReturnedUser & {
  count: number;
};
