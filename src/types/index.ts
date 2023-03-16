export interface IUserData {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface IUserStore {
  users: IUserData[];
}

export interface IOrderBy {
  sortBy: string;
}

export interface IUserCreate {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface IUserPost {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}
